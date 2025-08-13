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
  const getConditionClass = (condition: string) => {
    switch (condition) {
        case 'Excellent': return 'bg-green-100 text-green-800';
        case 'Good': return 'bg-blue-100 text-blue-800';
        case 'Fair': return 'bg-yellow-100 text-yellow-800';
        default: return 'bg-gray-100 text-gray-800';
    }
  }
  
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
      <CardHeader className="p-0">
        <Link href={`/products/${product.id}`} className="block relative aspect-square w-full overflow-hidden rounded-t-lg">
          <Image
            src={product.images[0]}
            alt={`Image of ${product.name}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={product.imageHints[0]}
          />
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <div className="flex justify-between items-center mb-2">
            <Badge variant="outline" className={`font-medium border-0 ${getConditionClass(product.condition)}`}>
              {product.condition}
            </Badge>
            <div className="flex items-center gap-1">
              <StarRating rating={product.rating} starClassName="w-3.5 h-3.5" />
              <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
            </div>
        </div>
        <CardTitle className="mt-1 text-base font-headline h-10 hover:text-primary">
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </CardTitle>
        <p className="mt-2 text-xl font-bold">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link href={`/products/${product.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
