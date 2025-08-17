
'use client';
import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { ProductCard } from '@/components/product-card';
import { getAllProducts, getProductsByBrand, getProductsByCategory } from '@/lib/firebase-products';
import type { Product } from '@/lib/types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Input } from '@/components/ui/input';
import { Search, Filter, ChevronDown } from 'lucide-react';

const allConditions = ['Excellent', 'Good', 'Fair'];

function ProductsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [allCategories, setAllCategories] = useState<string[]>([]);
  const [allBrands, setAllBrands] = useState<string[]>([]);
  
  const [filters, setFilters] = useState({
    categories: searchParams.getAll('category') || [],
    brands: searchParams.getAll('brand') || [],
    conditions: searchParams.getAll('condition') || [],
    priceRange: [
        Number(searchParams.get('minPrice')) || 0,
        Number(searchParams.get('maxPrice')) || 3000
    ] as [number, number],
  });
  const [sortBy, setSortBy] = useState(searchParams.get('sortBy') || 'featured');
  const [showFilters, setShowFilters] = useState(false);
  
  // Load products from Firebase
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const products = await getAllProducts();
        setAllProducts(products);
        
        // Extract unique categories and brands
        const categories = [...new Set(products.map(p => p.category))];
        const brands = [...new Set(products.map(p => p.brand))];
        setAllCategories(categories);
        setAllBrands(brands);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadProducts();
  }, []);
  
  // This effect synchronizes the component's state with the URL's search parameters.
  // This is important for handling browser back/forward navigation and direct URL loads.
  useEffect(() => {
    setFilters({
      categories: searchParams.getAll('category') || [],
      brands: searchParams.getAll('brand') || [],
      conditions: searchParams.getAll('condition') || [],
      priceRange: [
        Number(searchParams.get('minPrice')) || 0,
        Number(searchParams.get('maxPrice')) || 3000
      ],
    });
    setSortBy(searchParams.get('sortBy') || 'featured');
  }, [searchParams]);

  const updateUrlParams = (newFilters: any, newSortBy: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    // Update categories
    params.delete('category');
    newFilters.categories.forEach((c: string) => params.append('category', c));
    
    // Update brands
    params.delete('brand');
    newFilters.brands.forEach((b: string) => params.append('brand', b));

    // Update conditions
    params.delete('condition');
    newFilters.conditions.forEach((c: string) => params.append('condition', c));

    // Update price range
    if (newFilters.priceRange[0] > 0) {
      params.set('minPrice', newFilters.priceRange[0].toString());
    } else {
      params.delete('minPrice');
    }
    if (newFilters.priceRange[1] < 3000) {
      params.set('maxPrice', newFilters.priceRange[1].toString());
    } else {
      params.delete('maxPrice');
    }

    // Update sort
    if (newSortBy !== 'featured') {
      params.set('sortBy', newSortBy);
    } else {
      params.delete('sortBy');
    }
    
    router.push(`/products?${params.toString()}`);
  };


  const handleFilterChange = (type: 'categories' | 'brands' | 'conditions', value: string, checked: boolean) => {
    const newValues = checked
      ? [...filters[type], value]
      : filters[type].filter((v: string) => v !== value);
    
    const newFilters = { ...filters, [type]: newValues };
    setFilters(newFilters);
  };

  const handlePriceChange = (value: number[]) => {
      setFilters(prev => ({ ...prev, priceRange: value as [number, number]}));
  }
  
  const applyFilters = () => {
    updateUrlParams(filters, sortBy);
  }

  const clearFilters = () => {
    const defaultFilters = {
        categories: [],
        brands: [],
        conditions: [],
        priceRange: [0, 3000] as [number, number],
    };
    setFilters(defaultFilters);
    setSortBy('featured');
    router.push('/products');
  }

  const filteredAndSortedProducts = useMemo(() => {
    const currentSearchQuery = searchParams.get('q') || '';
    const currentCategories = searchParams.getAll('category');
    const currentBrands = searchParams.getAll('brand');
    const currentConditions = searchParams.getAll('condition');
    const minPrice = Number(searchParams.get('minPrice')) || 0;
    const maxPrice = Number(searchParams.get('maxPrice')) || 3000;
    const currentSortBy = searchParams.get('sortBy') || 'featured';

    let filtered = allProducts.filter(product => {
      const categoryMatch = currentCategories.length === 0 || currentCategories.includes(product.category);
      const brandMatch = currentBrands.length === 0 || currentBrands.includes(product.brand);
      const conditionMatch = currentConditions.length === 0 || currentConditions.includes(product.condition);
      const priceMatch = product.price >= minPrice && product.price <= maxPrice;

      const searchMatch = currentSearchQuery.length === 0 ||
        product.name.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(currentSearchQuery.toLowerCase());

      return categoryMatch && brandMatch && conditionMatch && priceMatch && searchMatch;
    });

    switch (currentSortBy) {
        case 'price-asc':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'rating-desc':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
        case 'featured':
        default:
            // Assuming 'featured' is the default order from mock-data
            break;
    }

    return filtered;
  }, [allProducts, searchParams]);
  
  const currentSearchQuery = searchParams.get('q');
  
  const handleSortChange = (value: string) => {
    setSortBy(value);
    updateUrlParams(filters, value);
  };

  return (
    <>
      <Header />
      <main className="flex-grow">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline tracking-tight">
            {currentSearchQuery ? `Search Results for "${currentSearchQuery}"` : "All Products" }
          </h1>
          <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-4">
             {currentSearchQuery ? `We found ${filteredAndSortedProducts.length} items for you!` : `Fresh refurbished cameras arrive daily. Premium quality at unbeatable prices with guaranteed performance.`}
          </p>
        </div>
        
        <div className="lg:grid lg:grid-cols-4 lg:gap-8 space-y-6 lg:space-y-0">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-4">
            <Button 
              className="w-full justify-between bg-white border-2 border-black text-black hover:bg-black hover:text-white rounded-xl font-semibold" 
              onClick={() => setShowFilters(!showFilters)}
            >
              <span className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filters & Sort
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </Button>
          </div>

          <aside className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <Card className="rounded-xl">
              <CardContent className="p-4 lg:p-6 space-y-4 lg:space-y-6">
                 <div>
                    <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-800">Category</h3>
                    <div className="space-y-2.5">
                      {allCategories.map(category => (
                          <div key={category} className="flex items-center space-x-3">
                              <Checkbox 
                                  id={`cat-${category}`} 
                                  checked={filters.categories.includes(category)}
                                  onCheckedChange={(checked) => handleFilterChange('categories', category, !!checked)}
                                  className="w-4 h-4"
                              />
                              <Label htmlFor={`cat-${category}`} className="font-normal capitalize text-sm cursor-pointer">{category}</Label>
                          </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-800">Brand</h3>
                    <div className="space-y-2.5">
                      {allBrands.map(brand => (
                          <div key={brand} className="flex items-center space-x-3">
                              <Checkbox 
                                  id={`brand-${brand}`}
                                  checked={filters.brands.includes(brand)}
                                  onCheckedChange={(checked) => handleFilterChange('brands', brand, !!checked)}
                                  className="w-4 h-4"
                              />
                              <Label htmlFor={`brand-${brand}`} className="font-normal text-sm cursor-pointer">{brand}</Label>
                          </div>
                      ))}
                    </div>
                  </div>

                  <Separator />
                  
                  <div>
                      <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-800">Price Range</h3>
                      <div className="px-2">
                        <Slider
                            value={filters.priceRange}
                            max={3000}
                            step={100}
                            onValueChange={handlePriceChange}
                            className="mb-3"
                        />
                        <div className="flex justify-between text-sm font-medium text-gray-600">
                            <span>${filters.priceRange[0]}</span>
                            <span>${filters.priceRange[1]}</span>
                        </div>
                      </div>
                  </div>

                  <Separator />

                                      <div>
                    <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-800">Condition</h3>
                    <div className="space-y-2.5">
                      {allConditions.map(condition => (
                          <div key={condition} className="flex items-center space-x-3">
                              <Checkbox 
                                  id={`cond-${condition}`}
                                  checked={filters.conditions.includes(condition)}
                                  onCheckedChange={(checked) => handleFilterChange('conditions', condition, !!checked)}
                                  className="w-4 h-4"
                              />
                              <Label htmlFor={`cond-${condition}`} className="font-normal text-sm cursor-pointer">{condition}</Label>
                          </div>
                      ))}
                    </div>
                  </div>
                  
                  <Separator className="my-4"/>
                  
                   <div className="flex flex-col gap-3">
                     <Button onClick={applyFilters} className="w-full bg-black text-white hover:bg-gray-900 font-semibold rounded-xl h-10 text-sm">APPLY FILTERS</Button>
                     <Button onClick={clearFilters} className="w-full bg-white text-black border-2 border-black hover:bg-black hover:text-white font-semibold rounded-xl h-10 text-sm">CLEAR ALL FILTERS</Button>
                   </div>
               </CardContent>
             </Card>
          </aside>

          <main className="lg:col-span-3">
              {/* Mobile Sort & Results Bar */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 bg-gray-50 p-4 rounded-xl lg:bg-transparent lg:p-0">
                  <p className="text-sm text-gray-600 font-medium">{filteredAndSortedProducts.length} products found</p>
                  
                  <div className="flex items-center gap-3">
                    <Select value={sortBy} onValueChange={handleSortChange}>
                      <SelectTrigger className="w-full sm:w-[180px] bg-white border-2 border-black text-black hover:bg-gray-50 rounded-xl h-10 font-medium">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="price-asc">Price: Low to High</SelectItem>
                        <SelectItem value="price-desc">Price: High to Low</SelectItem>
                        <SelectItem value="rating-desc">Highest Rated</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    {/* Mobile Clear Filters */}
                    <Button 
                      onClick={clearFilters} 
                      className="bg-white text-black border-2 border-black hover:bg-black hover:text-white font-semibold text-sm lg:hidden rounded-xl px-4 h-10"
                    >
                      CLEAR
                    </Button>
                  </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                {loading ? (
                  <div className="col-span-full text-center py-12">
                    <p className="text-muted-foreground">Loading products...</p>
                  </div>
                ) : filteredAndSortedProducts.length > 0 ? (
                  filteredAndSortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                      <p className="text-muted-foreground mb-4">No products match your filters.</p>
                      <Button onClick={clearFilters} className="bg-white text-black border-2 border-black hover:bg-black hover:text-white font-semibold rounded-xl px-6">CLEAR FILTERS</Button>
                  </div>
                )}
              </div>
          </main>
        </div>
      </div>
      </main>
      <Footer />
    </>
  );
}


export default function ProductsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProductsPageContent />
        </Suspense>
    )
}
