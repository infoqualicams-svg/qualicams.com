
'use client';
import { useState, useMemo } from 'react';
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

const allCategories = [...new Set(allProducts.map(p => p.category))];
const allBrands = [...new Set(allProducts.map(p => p.brand))];
const allConditions = ['Excellent', 'Good', 'Fair'];

export default function ProductsPage() {
  const [filters, setFilters] = useState({
    categories: [] as string[],
    brands: [] as string[],
    conditions: [] as string[],
    priceRange: [0, 3000] as [number, number],
  });
  const [sortBy, setSortBy] = useState('featured');

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

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts.filter(product => {
      const { categories, brands, conditions, priceRange } = filters;
      
      const categoryMatch = categories.length === 0 || categories.includes(product.category);
      const brandMatch = brands.length === 0 || brands.includes(product.brand);
      const conditionMatch = conditions.length === 0 || conditions.includes(product.condition);
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];

      return categoryMatch && brandMatch && conditionMatch && priceMatch;
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
  }, [filters, sortBy]);

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
               <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="font-semibold mb-4">Category</h3>
                    <div className="space-y-2">
                      {allCategories.map(category => (
                          <div key={category} className="flex items-center space-x-2">
                              <Checkbox 
                                  id={`cat-${category}`} 
                                  onCheckedChange={(checked) => handleCategoryChange(category, !!checked)}
                              />
                              <Label htmlFor={`cat-${category}`} className="font-normal capitalize">{category}</Label>
                          </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-4">Brand</h3>
                    <div className="space-y-2">
                      {allBrands.map(brand => (
                          <div key={brand} className="flex items-center space-x-2">
                              <Checkbox 
                                  id={`brand-${brand}`}
                                  onCheckedChange={(checked) => handleBrandChange(brand, !!checked)}
                              />
                              <Label htmlFor={`brand-${brand}`} className="font-normal">{brand}</Label>
                          </div>
                      ))}
                    </div>
                  </div>

                  <Separator />
                  
                  <div>
                      <h3 className="font-semibold mb-4">Price Range</h3>
                      <Slider
                          defaultValue={filters.priceRange}
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
                    <h3 className="font-semibold mb-4">Condition</h3>
                    <div className="space-y-2">
                      {allConditions.map(condition => (
                          <div key={condition} className="flex items-center space-x-2">
                              <Checkbox 
                                  id={`cond-${condition}`} 
                                  onCheckedChange={(checked) => handleConditionChange(condition, !!checked)}
                              />
                              <Label htmlFor={`cond-${condition}`} className="font-normal">{condition}</Label>
                          </div>
                      ))}
                    </div>
                  </div>
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
                      <p className="text-muted-foreground">No products match the selected filters.</p>
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

    