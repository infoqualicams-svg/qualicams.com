
'use client';
import { useState } from 'react';
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

const categories = [...new Set(allProducts.map(p => p.category))];
const brands = [...new Set(allProducts.map(p => p.brand))];

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(allProducts);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);

  return (
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
                    {categories.map(category => (
                        <div key={category} className="flex items-center space-x-2">
                            <Checkbox id={`cat-${category}`} />
                            <Label htmlFor={`cat-${category}`} className="font-normal capitalize">{category}</Label>
                        </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-4">Brand</h3>
                  <div className="space-y-2">
                    {brands.map(brand => (
                        <div key={brand} className="flex items-center space-x-2">
                            <Checkbox id={`brand-${brand}`} />
                            <Label htmlFor={`brand-${brand}`} className="font-normal">{brand}</Label>
                        </div>
                    ))}
                  </div>
                </div>

                <Separator />
                
                <div>
                    <h3 className="font-semibold mb-4">Price Range</h3>
                    <Slider
                        defaultValue={[0, 3000]}
                        max={3000}
                        step={100}
                        onValueChange={(value) => setPriceRange(value as [number, number])}
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                    </div>
                </div>

                <Separator />

                 <div>
                  <h3 className="font-semibold mb-4">Condition</h3>
                  <div className="space-y-2">
                    {['Excellent', 'Good', 'Fair'].map(condition => (
                        <div key={condition} className="flex items-center space-x-2">
                            <Checkbox id={`cond-${condition}`} />
                            <Label htmlFor={`cond-${condition}`} className="font-normal">{condition}</Label>
                        </div>
                    ))}
                  </div>
                </div>
                
                 <Button className="w-full">Apply Filters</Button>
             </CardContent>
           </Card>
        </aside>

        <main className="md:col-span-3">
            <div className="flex justify-between items-center mb-6">
                <p className="text-sm text-muted-foreground">{products.length} products found</p>
                <Select>
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
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
        </main>
      </div>
    </div>
  );
}
