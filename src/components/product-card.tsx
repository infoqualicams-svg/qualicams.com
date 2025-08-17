import type { Product } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { StarRating } from '@/components/star-rating';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group border border-gray-200 hover:border-black rounded-xl">
      <CardHeader className="p-0">
        <Link href={`/products/${product.id}`} className="block relative aspect-square w-full overflow-hidden">
          <Image
            src={product.images?.[0] || 'https://placehold.co/600x600.png'}
            alt={`Image of ${product.name}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={product.imageHints?.[0] || 'camera equipment'}
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-green-600 text-white font-bold uppercase tracking-wide text-xs shadow-lg">
              REFURBISHED
            </Badge>
          </div>
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-1">
              <StarRating rating={product.rating} starClassName="w-3.5 h-3.5" />
              <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
            </div>
        </div>
        <CardTitle className="text-xl font-bold font-headline tracking-tight mb-2 hover:text-black transition-colors">
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </CardTitle>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold text-black">${product.price.toFixed(2)}</p>
            <p className="text-lg text-gray-500 line-through">${(product.price * 1.2).toFixed(2)}</p>
          </div>
          <p className="text-sm text-green-600 font-medium">
            Save ${((product.price * 1.2) - product.price).toFixed(2)} ({Math.round(((product.price * 1.2 - product.price) / (product.price * 1.2)) * 100)}% off)
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full border-black text-black hover:bg-black hover:text-white transition-colors font-semibold rounded-xl" variant="outline">
          <Link href={`/products/${product.id}`}>VIEW DETAILS</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
