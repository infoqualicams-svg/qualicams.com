'use client';

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
import { ShoppingCart, ShieldCheck, Truck, CheckCircle, Award, HeartHandshake } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/cart-context';
import { useToast } from "@/hooks/use-toast";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { toast } = useToast();
  const { addItem } = useCart();
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    if (product) {
      addItem(product);
      toast({
        title: "Added to cart",
        description: `${product.name} is now in your cart.`,
      });
    }
  };

  const getConditionClass = (condition: string) => {
    switch (condition) {
        case 'Excellent': return 'bg-green-100 text-green-800 border-green-300';
        case 'Good': return 'bg-blue-100 text-blue-800 border-blue-300';
        case 'Fair': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
        default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm text-muted-foreground mb-4">
        <Link href="/" className="hover:text-primary">Home</Link> &gt; <Link href="/products" className="hover:text-primary capitalize">{product.category}</Link> &gt; <span className="font-medium text-foreground">{product.name}</span>
      </div>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <Carousel className="w-full">
            <CarouselContent>
              {product.images.map((img, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden rounded-lg">
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
          <h1 className="text-3xl lg:text-4xl font-bold font-headline">{product.name}</h1>
          <div className="mt-3 flex items-center gap-4">
            <div className="flex items-center gap-2">
                <StarRating rating={product.rating} />
                <a href="#reviews" className="text-sm text-muted-foreground hover:text-primary">{product.reviewCount} reviews</a>
            </div>
            <Separator orientation="vertical" className="h-4"/>
            <Badge variant="outline" className={`w-fit font-medium ${getConditionClass(product.condition)}`}>
             {product.condition}
          </Badge>
          </div>
          
          <p className="mt-4 text-muted-foreground">{product.description}</p>

          <p className="text-4xl font-bold mt-6">${product.price.toFixed(2)}</p>
          
          <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                      <p className="font-semibold">Free & Fast Delivery</p>
                      <p className="text-sm text-muted-foreground">Get it by tomorrow if you order in the next 4 hours.</p>
                  </div>
              </div>
               <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                      <p className="font-semibold">{product.warranty}</p>
                      <p className="text-sm text-muted-foreground">Expertly tested, fully functional, and backed by our guarantee.</p>
                  </div>
              </div>
          </div>

          <div className="mt-8">
            <Button size="lg" className="w-full text-lg py-6" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
          
          <Card className="mt-6">
            <CardContent className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                 <div className="flex flex-col items-center gap-1">
                    <Award className="w-7 h-7 text-primary"/>
                    <p className="text-xs font-medium">Expert-Tested</p>
                 </div>
                 <div className="flex flex-col items-center gap-1">
                    <ShieldCheck className="w-7 h-7 text-primary"/>
                    <p className="text-xs font-medium">{product.warranty}</p>
                 </div>
                 <div className="flex flex-col items-center gap-1">
                    <Truck className="w-7 h-7 text-primary"/>
                    <p className="text-xs font-medium">Free Shipping</p>
                 </div>
                 <div className="flex flex-col items-center gap-1">
                    <HeartHandshake className="w-7 h-7 text-primary"/>
                    <p className="text-xs font-medium">30-Day Returns</p>
                 </div>
            </CardContent>
          </Card>

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
          <TabsContent value="description" className="mt-6 text-base leading-relaxed prose max-w-none">
            <p>{product.longDescription}</p>
            <h4 className="font-bold mt-4">What's in the box?</h4>
            <ul>
                <li>{product.name}</li>
                <li>Charger & Cable</li>
                <li>Battery</li>
                <li>User Manual (Digital)</li>
            </ul>
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
          <TabsContent value="warranty" className="mt-6 text-base leading-relaxed prose max-w-none">
             <h3>Our Quality Promise</h3>
             <p>This product is covered by our <strong>{product.warranty}</strong>. We stand by the quality of our refurbished products. If you encounter any issues with your camera that are not related to accidental damage, we'll repair or replace it free of charge. Your peace of mind is our priority.</p>
             <ul>
                <li><CheckCircle className="inline-block mr-2 text-green-500"/> Full 52-point inspection</li>
                <li><CheckCircle className="inline-block mr-2 text-green-500"/> Professional cleaning</li>
                <li><CheckCircle className="inline-block mr-2 text-green-500"/> Guaranteed functionality</li>
             </ul>
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
