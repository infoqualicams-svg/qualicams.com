
'use client';
import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { ProductCard } from '@/components/product-card';
import { products as allProducts } from '@/lib/mock-data';
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
import { Search } from 'lucide-react';

const allCategories = [...new Set(allProducts.map(p => p.category))];
const allBrands = [...new Set(allProducts.map(p => p.brand))];
const allConditions = ['Excellent', 'Good', 'Fair'];

function ProductsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
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
  }, [searchParams]);
  
  const currentSearchQuery = searchParams.get('q');
  
  const handleSortChange = (value: string) => {
    setSortBy(value);
    updateUrlParams(filters, value);
  };

  return (
    <>
      <Header />
      <main className="flex-grow">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">
            {currentSearchQuery ? `Search Results for "${currentSearchQuery}"` : "All Products" }
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
             {currentSearchQuery ? `We found ${filteredAndSortedProducts.length} items for you!` : `Browse our full collection of professionally refurbished cameras. Each one comes with our seal of approval and a warranty to give you peace of mind.`}
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <aside className="md:col-span-1">
             <Card>
               <CardContent className="p-4 space-y-6">
                 <div>
                    <h3 className="font-semibold mb-4 text-sm">Category</h3>
                    <div className="space-y-2">
                      {allCategories.map(category => (
                          <div key={category} className="flex items-center space-x-2">
                              <Checkbox 
                                  id={`cat-${category}`} 
                                  checked={filters.categories.includes(category)}
                                  onCheckedChange={(checked) => handleFilterChange('categories', category, !!checked)}
                              />
                              <Label htmlFor={`cat-${category}`} className="font-normal capitalize text-sm">{category}</Label>
                          </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-4 text-sm">Brand</h3>
                    <div className="space-y-2">
                      {allBrands.map(brand => (
                          <div key={brand} className="flex items-center space-x-2">
                              <Checkbox 
                                  id={`brand-${brand}`}
                                  checked={filters.brands.includes(brand)}
                                  onCheckedChange={(checked) => handleFilterChange('brands', brand, !!checked)}
                              />
                              <Label htmlFor={`brand-${brand}`} className="font-normal text-sm">{brand}</Label>
                          </div>
                      ))}
                    </div>
                  </div>

                  <Separator />
                  
                  <div>
                      <h3 className="font-semibold mb-4 text-sm">Price Range</h3>
                      <Slider
                          value={filters.priceRange}
                          max={3000}
                          step={100}
                          onValueChange={handlePriceChange}
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-2">
                          <span>${filters.priceRange[0]}</span>
                          <span>${filters.priceRange[1]}</span>
                      </div>
                  </div>

                  <Separator />

                   <div>
                    <h3 className="font-semibold mb-4 text-sm">Condition</h3>
                    <div className="space-y-2">
                      {allConditions.map(condition => (
                          <div key={condition} className="flex items-center space-x-2">
                              <Checkbox 
                                  id={`cond-${condition}`} 
                                  checked={filters.conditions.includes(condition)}
                                  onCheckedChange={(checked) => handleFilterChange('conditions', condition, !!checked)}
                              />
                              <Label htmlFor={`cond-${condition}`} className="font-normal text-sm">{condition}</Label>
                          </div>
                      ))}
                    </div>
                  </div>
                  <Separator/>
                   <div className="flex flex-col gap-2">
                       <Button onClick={applyFilters} className="w-full">Apply Filters</Button>
                       <Button variant="ghost" onClick={clearFilters} className="w-full">Clear All Filters</Button>
                   </div>
               </CardContent>
             </Card>
          </aside>

          <main className="md:col-span-3">
              <div className="flex justify-between items-center mb-6">
                  <p className="text-sm text-muted-foreground">{filteredAndSortedProducts.length} products found</p>
                  <Select value={sortBy} onValueChange={handleSortChange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-asc">Price: Low to High</SelectItem>
                      <SelectItem value="price-desc">Price: High to Low</SelectItem>
                      <SelectItem value="rating-desc">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredAndSortedProducts.length > 0 ? (
                  filteredAndSortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                      <p className="text-muted-foreground">No products match your filters.</p>
                      <Button variant="link" onClick={clearFilters}>Clear filters</Button>
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
