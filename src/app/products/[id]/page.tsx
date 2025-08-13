import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/lib/mock-data';
import type { Product } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import { StarRating } from '@/components/star-rating';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingCart, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm text-muted-foreground mb-4">
        <Link href="/" className="hover:text-primary">Home</Link> &gt; <Link href="/products" className="hover:text-primary">Products</Link> &gt; <span className="font-medium text-foreground">{product.name}</span>
      </div>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <Carousel className="w-full">
            <CarouselContent>
              {product.images.map((img, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden">
                    <Image
                      src={img}
                      alt={`${product.name} - Image ${index + 1}`}
                      width={600}
                      height={600}
                      className="w-full h-auto aspect-square object-cover"
                      data-ai-hint={product.imageHints[index]}
                    />
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-16" />
            <CarouselNext className="mr-16" />
          </Carousel>
        </div>

        <div className="flex flex-col">
          <Badge variant={product.condition === 'Excellent' ? 'default' : 'secondary'} className={`w-fit ${product.condition === 'Excellent' ? 'bg-primary/80' : ''}`}>
            Condition: {product.condition}
          </Badge>
          <h1 className="text-3xl lg:text-4xl font-bold font-headline mt-2">{product.name}</h1>
          <div className="mt-3 flex items-center gap-4">
            <StarRating rating={product.rating} />
            <a href="#reviews" className="text-sm text-muted-foreground hover:text-primary">{product.reviewCount} reviews</a>
          </div>
          <p className="text-4xl font-bold mt-4">${product.price.toFixed(2)}</p>
          <p className="mt-4 text-muted-foreground">{product.description}</p>
          
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span>{product.warranty}</span>
          </div>

          <div className="mt-auto pt-6">
            <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-12 lg:mt-16">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-2 md:w-[400px] md:grid-cols-4">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specs">Specs</TabsTrigger>
            <TabsTrigger value="warranty">Warranty</TabsTrigger>
            <TabsTrigger value="reviews" id="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-6 text-base leading-relaxed">
            <p>{product.longDescription}</p>
          </TabsContent>
          <TabsContent value="specs" className="mt-6">
            <Card>
              <Table>
                <TableBody>
                  {product.specs.map((spec) => (
                    <TableRow key={spec.key}>
                      <TableCell className="font-semibold">{spec.key}</TableCell>
                      <TableCell>{spec.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>
          <TabsContent value="warranty" className="mt-6 text-base leading-relaxed">
             <p>This product is covered by our <strong>{product.warranty}</strong>. We stand by the quality of our refurbished products. If you encounter any issues with your camera that are not related to accidental damage, we'll repair or replace it free of charge. Your peace of mind is our priority.</p>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
                {product.reviews.map(review => (
                    <Card key={review.id}>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-base font-medium">{review.author}</CardTitle>
                                <span className="text-sm text-muted-foreground">{review.date}</span>
                            </div>
                            <StarRating rating={review.rating} />
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{review.comment}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
