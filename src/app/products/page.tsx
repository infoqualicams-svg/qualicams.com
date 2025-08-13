
'use client';
import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
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
  const searchParams = useSearchParams();
  const initialSearchQuery = searchParams.get('q') || '';
  const initialCategory = searchParams.get('category') || '';

  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [filters, setFilters] = useState({
    categories: initialCategory ? [initialCategory] : [] as string[],
    brands: [] as string[],
    conditions: [] as string[],
    priceRange: [0, 3000] as [number, number],
  });
  const [sortBy, setSortBy] = useState('featured');
  
  useEffect(() => {
    setSearchQuery(initialSearchQuery);
  }, [initialSearchQuery]);

  useEffect(() => {
    setFilters(prev => ({...prev, categories: initialCategory ? [initialCategory] : []}));
  }, [initialCategory]);


  const handleCategoryChange = (category: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      categories: checked
        ? [...prev.categories, category]
        : prev.categories.filter(c => c !== category),
    }));
  };

  const handleBrandChange = (brand: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      brands: checked
        ? [...prev.brands, brand]
        : prev.brands.filter(b => b !== brand),
    }));
  };

  const handleConditionChange = (condition: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      conditions: checked
        ? [...prev.conditions, condition]
        : prev.conditions.filter(c => c !== condition),
    }));
  };
  
  const handlePriceChange = (value: number[]) => {
      setFilters(prev => ({ ...prev, priceRange: value as [number, number]}));
  }
  
  const clearFilters = () => {
    setFilters({
        categories: [],
        brands: [],
        conditions: [],
        priceRange: [0, 3000],
    });
    setSearchQuery('');
  }

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts.filter(product => {
      const { categories, brands, conditions, priceRange } = filters;
      
      const categoryMatch = categories.length === 0 || categories.includes(product.category);
      const brandMatch = brands.length === 0 || brands.includes(product.brand);
      const conditionMatch = conditions.length === 0 || conditions.includes(product.condition);
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];

      const searchMatch = searchQuery.length === 0 ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      return categoryMatch && brandMatch && conditionMatch && priceMatch && searchMatch;
    });

    switch (sortBy) {
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
            break;
    }

    return filtered;
  }, [filters, sortBy, searchQuery]);

  return (
    <>
      <Header />
      <main className="flex-grow">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">All Products</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Browse our full collection of professionally refurbished cameras. Each one comes with our seal of approval and a warranty to give you peace of mind.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <aside className="md:col-span-1">
             <Card>
               <CardContent className="p-4 space-y-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search in products..." 
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                 
                  <div>
                    <h3 className="font-semibold mb-4 text-sm">Category</h3>
                    <div className="space-y-2">
                      {allCategories.map(category => (
                          <div key={category} className="flex items-center space-x-2">
                              <Checkbox 
                                  id={`cat-${category}`} 
                                  checked={filters.categories.includes(category)}
                                  onCheckedChange={(checked) => handleCategoryChange(category, !!checked)}
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
                                  onCheckedChange={(checked) => handleBrandChange(brand, !!checked)}
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
                                  onCheckedChange={(checked) => handleConditionChange(condition, !!checked)}
                              />
                              <Label htmlFor={`cond-${condition}`} className="font-normal text-sm">{condition}</Label>
                          </div>
                      ))}
                    </div>
                  </div>
                  <Separator/>
                   <Button variant="ghost" onClick={clearFilters} className="w-full">Clear All Filters</Button>
               </CardContent>
             </Card>
          </aside>

          <main className="md:col-span-3">
              <div className="flex justify-between items-center mb-6">
                  <p className="text-sm text-muted-foreground">{filteredAndSortedProducts.length} products found</p>
                  <Select value={sortBy} onValueChange={setSortBy}>
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
                      <p className="text-muted-foreground">No products match your search or filters.</p>
                      <Button variant="link" onClick={clearFilters}>Clear filters and search</Button>
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
