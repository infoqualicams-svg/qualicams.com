'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/context/auth-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Product } from '@/lib/types';
import { 
  getAllProducts, 
  addProduct, 
  updateProduct, 
  deleteProduct,
  batchImportProducts 
} from '@/lib/firebase-products';
import { 
  uploadMultipleImages, 
  deleteProductImage, 
  validateImageFile 
} from '@/lib/firebase-storage';
import { products as mockProducts } from '@/lib/mock-data';
import { Trash2, Edit, Plus, Save, X } from 'lucide-react';
import Image from 'next/image';

export default function AdminPage() {
  const router = useRouter();
  const pathname = usePathname();
  const { user, loading: authLoading } = useAuth();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingImages, setUploadingImages] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    brand: '',
    category: 'dslr',
    price: 0,
    images: [] as string[],
    condition: 'Excellent',
    description: '',
    longDescription: ''
  });
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  // Authentication protection
  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    }
  }, [user, authLoading, router]);

  // Load products from Firebase
  useEffect(() => {
    if (user) {
      loadProducts();
    }
  }, [user]);

  // Handle dashboard redirects
  useEffect(() => {
    if (pathname === '/admin/dashboard') {
      router.replace('/admin');
    }
  }, [pathname, router]);

  // Show loading state while checking authentication
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-12">
            <p className="text-gray-500">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  // Show nothing while redirecting
  if (!user) {
    return null;
  }

  const loadProducts = async () => {
    setLoading(true);
    try {
      const firebaseProducts = await getAllProducts();
      setProducts(firebaseProducts);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMigrateData = async () => {
    if (confirm('This will import all mock data to Firebase. Continue?')) {
      setSaving(true);
      try {
        const success = await batchImportProducts(mockProducts);
        if (success) {
          alert('Data migrated successfully!');
          loadProducts(); // Reload products
        } else {
          alert('Failed to migrate data.');
        }
      } catch (error) {
        console.error('Migration error:', error);
        alert('Migration failed.');
      } finally {
        setSaving(false);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      id: '',
      name: '',
      brand: '',
      category: 'dslr',
      price: 0,
      images: [],
      condition: 'Excellent',
      description: '',
      longDescription: ''
    });
    setSelectedFiles(null);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    // Validate each file
    try {
      Array.from(files).forEach(file => validateImageFile(file));
      setSelectedFiles(files);
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Invalid file selected');
      e.target.value = ''; // Reset file input
    }
  };

  const handleImageUpload = async (): Promise<string[]> => {
    if (!selectedFiles || selectedFiles.length === 0) {
      return formData.images; // Return existing images if no new files
    }

    setUploadingImages(true);
    try {
      const productId = formData.id || `temp_${Date.now()}`;
      
      console.log('Attempting to upload images to Firebase Storage...');
      const uploadedUrls = await uploadMultipleImages(selectedFiles, productId);
      return [...formData.images, ...uploadedUrls]; // Combine existing + new images
    } catch (error) {
      console.error('Firebase Storage upload failed, using fallback:', error);
      
      // Fallback: Use placeholder images if Firebase Storage fails
      const fallbackUrls = Array.from(selectedFiles).map((file, index) => {
        return `https://placehold.co/600x600.png?text=${encodeURIComponent(file.name.substring(0, 10))}`;
      });
      
      alert(`⚠️ Firebase Storage upload failed. Using placeholder images as fallback.\n\nError: ${error instanceof Error ? error.message : 'Unknown error'}\n\nTo fix this:\n1. Set up Firebase Storage rules\n2. Check Firebase configuration`);
      
      return [...formData.images, ...fallbackUrls];
    } finally {
      setUploadingImages(false);
    }
  };

  const removeImage = async (imageUrl: string, index: number) => {
    try {
      // Remove from Firebase Storage
      await deleteProductImage(imageUrl);
      
      // Remove from form data
      const updatedImages = formData.images.filter((_, i) => i !== index);
      setFormData({ ...formData, images: updatedImages });
    } catch (error) {
      console.error('Error removing image:', error);
      // Still remove from UI even if storage deletion fails
      const updatedImages = formData.images.filter((_, i) => i !== index);
      setFormData({ ...formData, images: updatedImages });
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      id: product.id,
      name: product.name,
      brand: product.brand,
      category: product.category,
      price: product.price,
      images: product.images,
      condition: product.condition,
      description: product.description,
      longDescription: product.longDescription
    });
    setIsAdding(false);
  };

  const handleAdd = () => {
    resetForm();
    setIsAdding(true);
    setEditingProduct(null);
  };

  const handleSave = async () => {
    setSaving(true);
    
    try {
      // First upload images if any are selected
      const finalImages = await handleImageUpload();
      
      const productData = {
        ...formData,
        images: finalImages,
        imageHints: ['camera equipment'],
        specs: [
          { key: 'Condition', value: formData.condition },
          { key: 'Brand', value: formData.brand }
        ],
                        warranty: '6-Month QualiCams Warranty',
        rating: 4.5,
        reviewCount: 0,
        reviews: []
      };

      if (isAdding) {
        const newId = await addProduct(productData);
        if (newId) {
          alert('✅ Product added successfully!');
          loadProducts(); // Reload products
        } else {
          alert('❌ Failed to add product.');
        }
      } else if (editingProduct) {
        const success = await updateProduct(editingProduct.id, productData);
        if (success) {
          alert('✅ Product updated successfully!');
          loadProducts(); // Reload products
        } else {
          alert('❌ Failed to update product.');
        }
      }

      setEditingProduct(null);
      setIsAdding(false);
      resetForm();
    } catch (error) {
      console.error('Save error:', error);
      alert('❌ An error occurred while saving: ' + (error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (productId: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setSaving(true);
      try {
        const success = await deleteProduct(productId);
        if (success) {
          alert('✅ Product deleted successfully!');
          loadProducts(); // Reload products
        } else {
          alert('❌ Failed to delete product.');
        }
      } catch (error) {
        console.error('Delete error:', error);
        alert('❌ An error occurred while deleting.');
      } finally {
        setSaving(false);
      }
    }
  };

  const handleCancel = () => {
    setEditingProduct(null);
    setIsAdding(false);
    resetForm();
  };

  const downloadJSON = () => {
    const dataStr = JSON.stringify(products, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = 'products.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <Alert className="mb-6">
          <AlertDescription>
            🔥 <strong>Firebase Mode:</strong> All changes are now persistent and saved to Firebase Firestore!
          </AlertDescription>
        </Alert>
        
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold font-headline">Product Admin</h1>
          <div className="flex gap-4">
            <Button onClick={downloadJSON} variant="outline" disabled={saving}>
              Download JSON
            </Button>
            <Button onClick={handleMigrateData} variant="outline" disabled={saving || products.length > 0}>
              {saving ? 'Migrating...' : 'Import Mock Data'}
            </Button>
            <Button onClick={handleAdd} className="bg-black text-white hover:bg-gray-900" disabled={saving}>
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </Button>
          </div>
        </div>

        {/* Form */}
        {(isAdding || editingProduct) && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>
                {isAdding ? 'Add New Product' : 'Edit Product'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="id">Product ID</Label>
                  <Input
                    id="id"
                    value={formData.id}
                    onChange={(e) => setFormData({...formData, id: e.target.value})}
                    placeholder="unique-product-id"
                  />
                </div>
                <div>
                  <Label htmlFor="name">Product Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Canon EOS R5"
                  />
                </div>
                <div>
                  <Label htmlFor="brand">Brand</Label>
                  <Input
                    id="brand"
                    value={formData.brand}
                    onChange={(e) => setFormData({...formData, brand: e.target.value})}
                    placeholder="Canon"
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dslr">DSLR</SelectItem>
                      <SelectItem value="mirrorless">Mirrorless</SelectItem>
                      <SelectItem value="compact">Compact</SelectItem>
                      <SelectItem value="lenses">Lenses</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="price">Price ($)</Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value)})}
                    placeholder="1299"
                  />
                </div>
                <div>
                  <Label htmlFor="condition">Condition</Label>
                  <Select value={formData.condition} onValueChange={(value) => setFormData({...formData, condition: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Excellent">Excellent</SelectItem>
                      <SelectItem value="Very Good">Very Good</SelectItem>
                      <SelectItem value="Good">Good</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="images">Product Images</Label>
                
                {/* Current Images */}
                {formData.images.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-3">Current Images:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                      {formData.images.map((imageUrl, index) => (
                        <div key={index} className="relative group">
                          <div className="aspect-square w-full rounded-xl border-2 border-gray-200 overflow-hidden bg-gray-50 hover:border-gray-300 transition-colors">
                            <Image
                              src={imageUrl}
                              alt={`Product image ${index + 1}`}
                              width={120}
                              height={120}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                            onClick={() => removeImage(imageUrl, index)}
                          >
                            <X className="w-3 h-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* File Upload */}
                <div className="space-y-3">
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-gray-400 transition-colors bg-gray-50">
                    <div className="text-center">
                      <Input
                        id="images"
                        type="file"
                        multiple
                        accept="image/jpeg,image/jpg,image/png,image/webp"
                        onChange={handleFileSelect}
                        className="file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800"
                      />
                      <p className="text-sm text-gray-600 mt-2">
                        Select multiple images (JPEG, PNG, WebP). Max 5MB per image.
                      </p>
                    </div>
                  </div>
                  
                  {selectedFiles && (
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                      <p className="font-medium text-blue-900 mb-2">Selected Files:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {Array.from(selectedFiles).map((file, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-blue-700 bg-white rounded-lg p-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                            <span className="truncate">{file.name}</span>
                            <span className="text-blue-500 text-xs">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {uploadingImages && (
                    <div className="flex items-center justify-center gap-3 bg-green-50 border border-green-200 rounded-xl p-4">
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-green-600 border-t-transparent"></div>
                      <span className="text-green-700 font-medium">Uploading images...</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div>
                <Label htmlFor="description">Short Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Brief product description..."
                />
              </div>
              
              <div>
                <Label htmlFor="longDescription">Long Description</Label>
                <Textarea
                  id="longDescription"
                  value={formData.longDescription}
                  onChange={(e) => setFormData({...formData, longDescription: e.target.value})}
                  placeholder="Detailed product description..."
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700" disabled={saving || uploadingImages}>
                  <Save className="w-4 h-4 mr-2" />
                  {uploadingImages ? 'Uploading Images...' : saving ? 'Saving...' : 'Save'}
                </Button>
                <Button onClick={handleCancel} variant="outline" disabled={saving || uploadingImages}>
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Products List */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Loading products...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No products found.</p>
            <Button onClick={handleMigrateData} variant="outline" disabled={saving}>
              {saving ? 'Importing...' : 'Import Mock Data to Get Started'}
            </Button>
          </div>
        ) : (
          <div className="grid gap-6">
            {products.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-6">
                <div className="flex items-start gap-6">
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold">{product.name}</h3>
                        <p className="text-gray-600">{product.brand} • {product.category}</p>
                        <p className="text-lg font-bold mt-2">${product.price}</p>
                        <p className="text-sm text-gray-500 mt-1">{product.condition}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          onClick={() => handleEdit(product)}
                          size="sm"
                          variant="outline"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          onClick={() => handleDelete(product.id)}
                          size="sm"
                          variant="outline"
                          className="text-red-600 hover:text-red-700"
                          disabled={saving}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-gray-700 mt-3 text-sm">{product.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}