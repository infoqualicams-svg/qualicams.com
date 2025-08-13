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
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0">
        <Link href={`/products/${product.id}`} className="block relative aspect-square w-full">
          <Image
            src={product.images[0]}
            alt={`Image of ${product.name}`}
            fill
            className="object-cover"
            data-ai-hint={product.imageHints[0]}
          />
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <Badge variant={product.condition === 'Excellent' ? 'default' : 'secondary'} className={product.condition === 'Excellent' ? 'bg-primary/80' : ''}>
          {product.condition}
        </Badge>
        <CardTitle className="mt-2 text-lg font-headline hover:text-primary">
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </CardTitle>
        <div className="mt-2 flex items-center gap-2">
          <StarRating rating={product.rating} />
          <span className="text-xs text-muted-foreground">({product.reviewCount} reviews)</span>
        </div>
        <p className="mt-4 text-2xl font-bold">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link href={`/products/${product.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
