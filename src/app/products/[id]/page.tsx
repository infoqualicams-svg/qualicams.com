
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
import React from 'react';

const VisaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24" {...props}><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#3A424A" /><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFF" /><path d="M12.9 6.6c0-.5-.3-.8-.8-.8H8.3c-.4 0-.7.3-.7.6 0 .2.1.4.3.5l2.1 2.4-2.5 4.3c-.2.3-.2.5 0 .6.1.1.3.2.5.2h1.4c.4 0 .7-.2.9-.6l1.2-2.3 1.1-2.2c-.1-.1-.1-.2-.1-.4zm-3.9 5.2l-1.1-2h-.1l-1.7 3.5c-.1.3-.4.5-.7.5H4c-.5 0-.8-.3-.8-.7s.3-.8.8-.8l1.4-.2c.5 0 .8-.3.9-1l1.5-6.4c.1-.5.5-.8 1-.8h2.9c.5 0 .8.3.8.8s-.3.8-.8-.8H9.3l-1.1 4.7h.1l1.7-2.3c.1-.2.2-.4.2-.6 0-.5-.3-.8-.8-.8H7.4c-.4 0-.7.3-.7.6s.3.8.8.8l.6.1.3 1.2zM22.6 6.6c0-.5-.3-.8-.8-.8h-3.4c-.5 0-.8.3-.8.8s.3.8.8.8h.9l-2.2 6.8c-.1.4-.4.6-.8.6H15c-.5 0-.8.3-.8.8s.3.8.8.8h3.4c.5 0 .8-.3.8-.8s-.3-.8-.8-.8h-.9l2.2-6.8c.1-.4.4-.6.8-.6h1.4c.5 0 .8-.3.8-.8zM31.2 6.6c0-.5-.3-.8-.8-.8H27c-.5 0-.8.3-.8.8s.3.8.8.8h.7l-1.3 3.4-1.6-3.4H24c-.5 0-.8.3-.8.8s.3.8.8.8h.6l1.5 3.4-1.5 3.4h-.6c-.5 0-.8.3-.8.8s.3.8.8.8h2.8c.5 0 .8-.3.8-.8l-.1-1.2.6-1.2c.2-.4.2-.6 0-.8l-1.5-2.8 1.9-4h.6c.5 0 .8-.3.8-.8z" fill="#1A1F71" /></svg>
)

const MastercardIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24" {...props}><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#3A424A"/><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFF"/><circle cx="15" cy="12" r="7" fill="#EB001B"/><circle cx="23" cy="12" r="7" fill="#F79E1B"/><path d="M22 12c0 4.1-2.9 7-6.9 7h-1.2c-3.7 0-6.8-2.6-6.8-6.3 0-3.3 2.4-6.3 6.1-6.3h1.8C19.1 6.4 22 8.9 22 12z" fill="#FF5F00"/></svg>
)

const AmexIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24" {...props}><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#3A424A"/><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#006FCF"/><path fill="#FFF" d="M12.9 8.2H9.8v1.8h2.8v1.7H9.8v2.1h3.1v1.8H8V6.4h4.9zM15.3 15.6h1.8V8.1h-1.8zM20.6 8.2h-1.7l-2.1 7.4h1.8l.3-1.3h2.3l.3 1.3h1.8l-2.1-7.4zm-.2 4.5h-1.3l.6-2.6zM29.2 11.2c0-1.8-1.2-2.9-3.2-2.9h-3.4v7.4h1.8v-2.7h1.2l1.6 2.7h2l-2-3.1c.9-.3 1.2-1 1.2-1.8zm-3.2-.8h-1.6v-1.3h1.6c.7 0 1.1.3 1.1.8s-.4.5-1.1.5z"/></svg>
)

const PayPalIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24" {...props}><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#3A424A"/><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFF"/><path d="M24.4 8.7c.2-1.5-1-2.6-2.5-2.6H17l-.8 4.9c0 .4.2.7.6.7h2.8l-.4 2.3c-.1.4-.5.7-.9.7h-1.9c-.4 0-.7.3-.8.7l-.4 2.3c-.1.4.2.7.6.7h2.2c1.5 0 2.7-1.2 2.7-2.7 0-.4-.1-.8-.2-1.2l.2-1c.1-.5.6-1 1.1-1h.8c.6 0 1.1-.5 1.1-1.1l.1-1.2s0-.1 0 0z" fill="#009CDE"/><path d="M23.1 8.2c0-.3-.2-.5-.4-.5h-1c-.8 0-1.4.6-1.5 1.4l-.4 2.3c0 .3.2.5.4.5h1.7c.8 0 1.4-.6 1.5-1.4l.2-1.2s0-.1 0-.1zm-1.8 5.9c-.1 0-.1-.1-.1-.1l.3-1.8c0-.3.3-.5.5-.5h.3c.6 0 1 .4 1 1l-.2 1.2c-.1.6-.6 1.1-1.2 1.1h-.6zM28.3 8.3c-.2-1.5-1.5-2.5-3-2.5h-5.4l-.8 4.9c0 .4.2.7.6.7h2.8l-.4 2.3c-.1.4-.5.7-.9.7H19c-.4 0-.7.3-.8.7l-.4 2.3c-.1.4.2.7.6.7h2.2c1.5 0 2.7-1.2 2.7-2.7 0-.4-.1-.8-.2-1.2l.2-1c.1-.5.6-1 1.1-1h.8c.6 0 1.1-.5 1.1-1.1l.1-1.2z" fill="#003087"/></svg>
)

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { toast } = useToast();
  const { addItem } = useCart();
  const product = products.find((p) => p.id === React.use(params).id);

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
           <div className="mt-4 flex items-center justify-center gap-2">
              <VisaIcon />
              <MastercardIcon />
              <AmexIcon />
              <PayPalIcon />
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
