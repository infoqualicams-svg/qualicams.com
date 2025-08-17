'use client';

import Image from 'next/image';
import type { Product } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import { StarRating } from '@/components/star-rating';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingCart, ShieldCheck, Truck, CheckCircle, Award, HeartHandshake, Package, Lock, Smartphone, Headphones, Video, Recycle, Aperture } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/cart-context';
import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PaymentIcons } from '@/components/ui/payment-icons';

interface ClientProductPageProps {
  product: Product;
}

export default function ClientProductPage({ product }: ClientProductPageProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images?.[0] || 'https://placehold.co/200x200?text=Camera',
      quantity: 1,
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/products" className="hover:text-black transition-colors">Products</Link>
              <span className="mx-2">/</span>
              <Link href="/products" className="hover:text-black transition-colors capitalize">{product.category}</Link> 
              <span className="mx-2">/</span>
              <span className="text-black font-medium">{product.name}</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    {product.images.map((img, index) => (
                      <CarouselItem key={index}>
                        <div className="relative aspect-square overflow-hidden bg-gray-50 border border-gray-200 rounded-xl">
                          <Image
                            src={img}
                            alt={`${product.name} - Image ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-4 left-4 space-y-2">
                            <Badge className="bg-green-600 text-white font-bold uppercase tracking-wide text-xs shadow-lg">
                              REFURBISHED
                            </Badge>
                            <Badge className="bg-white/90 text-gray-600 border border-gray-200 font-light backdrop-blur-sm text-xs">
                              ✓ Verified
                            </Badge>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {product.images.slice(0, 4).map((img, index) => (
                  <div key={index} className="relative aspect-square overflow-hidden bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:border-gray-300 transition-colors">
                    <Image
                      src={img}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white text-gray-700 text-xs font-medium uppercase tracking-wide rounded-full border border-gray-200">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  Certified Refurbished
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-gray-900">{product.name}</h1>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <StarRating rating={product.rating} starClassName="w-4 h-4" />
                    <span className="font-medium text-sm">{product.rating}</span>
                    <a href="#reviews" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
                      ({product.reviewCount} reviews)
                    </a>
                  </div>
                </div>
              </div>

              {/* Price Section */}
              <div className="space-y-4 border-b border-gray-100 pb-8">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl xl:text-5xl font-extralight text-gray-900">${product.price.toFixed(2)}</span>
                  <span className="text-lg text-gray-400 line-through">${(product.price * 1.1).toFixed(2)}</span>
                  <span className="inline-flex items-center px-3 py-1 bg-gray-50 text-gray-700 text-sm font-medium rounded-full border border-gray-200">
                    Save ${((product.price * 1.1) - product.price).toFixed(0)}
                  </span>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold font-headline tracking-tight text-gray-800">Key Benefits</h3>
                <div className="grid gap-3">
                  <div className="flex items-start gap-3 p-4 bg-white border border-gray-100 hover:border-gray-200 transition-all duration-200 rounded-xl">
                    <div className="w-6 h-6 bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Best Price Quality Ratio</p>
                      <p className="text-sm text-gray-500 mt-1">Premium performance at a fraction of retail price</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white border border-gray-100 hover:border-gray-200 transition-all duration-200 rounded-xl">
                    <div className="w-6 h-6 bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 rounded-lg">
                      <ShieldCheck className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{product.warranty} Comprehensive Warranty</p>
                      <p className="text-sm text-gray-500 mt-1">Full coverage for peace of mind</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white border border-gray-100 hover:border-gray-200 transition-all duration-200 rounded-xl">
                    <div className="w-6 h-6 bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 rounded-lg">
                      <Truck className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Daily Fresh Inventory</p>
                      <p className="text-sm text-gray-500 mt-1">New refurbished cameras added every day</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="space-y-4 border-t border-gray-100 pt-8">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4">We accept</p>
                  <PaymentIcons className="flex items-center justify-center gap-2" iconClassName="opacity-60" />
                </div>
                
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="space-y-3">
                    <div className="w-8 h-8 mx-auto bg-white border border-gray-200 flex items-center justify-center rounded-lg">
                      <ShieldCheck className="w-4 h-4 text-gray-500"/>
                    </div>
                    <p className="text-xs font-light text-gray-600">{product.warranty}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-8 h-8 mx-auto bg-white border border-gray-200 flex items-center justify-center rounded-lg">
                      <Truck className="w-4 h-4 text-gray-500"/>
                    </div>
                    <p className="text-xs font-light text-gray-600">Free Shipping</p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-8 h-8 mx-auto bg-white border border-gray-200 flex items-center justify-center rounded-lg">
                      <HeartHandshake className="w-4 h-4 text-gray-500"/>
                    </div>
                    <p className="text-xs font-light text-gray-600">30-Day Returns</p>
                  </div>
                </div>
              </div>

              {/* Product Details Tabs */}
              <div className="mt-8 border-t border-gray-100 pt-8">
                <Tabs defaultValue="description">
                  <TabsList className="inline-flex h-12 items-center justify-start rounded-xl bg-gray-50 p-1 text-gray-500 w-full overflow-x-auto">
                    <TabsTrigger 
                      value="description" 
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm hover:bg-white/50 hover:text-gray-700 flex-shrink-0"
                    >
                      Description
                    </TabsTrigger>
                    <TabsTrigger 
                      value="specs"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm hover:bg-white/50 hover:text-gray-700 flex-shrink-0"
                    >
                      Specs
                    </TabsTrigger>
                    <TabsTrigger 
                      value="warranty"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm hover:bg-white/50 hover:text-gray-700 flex-shrink-0"
                    >
                      Warranty
                    </TabsTrigger>
                    <TabsTrigger 
                      value="reviews" 
                      id="reviews"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm hover:bg-white/50 hover:text-gray-700 flex-shrink-0"
                    >
                      Reviews
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="description" className="mt-8 focus:outline-none">
                    <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Description</h3>
                      <div className="text-gray-700 leading-relaxed space-y-3">
                        <p>{product.longDescription}</p>
                      </div>
                      
                      <div className="border-t border-gray-100 pt-6 mt-6">
                        <h4 className="font-semibold text-gray-900 mb-3">What's in the box?</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                            <span>{product.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                            <span>Charger & Cable</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                            <span>Battery</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                            <span>User Manual (Digital)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="specs" className="mt-8 focus:outline-none">
                    <div className="bg-white rounded-xl border border-gray-100 p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Specifications</h3>
                      <div className="space-y-3">
                        {product.specs.map((spec, index) => (
                          <div key={spec.key} className={`flex items-center justify-between py-3 ${index !== product.specs.length - 1 ? 'border-b border-gray-50' : ''}`}>
                            <span className="font-medium text-gray-700">{spec.key}</span>
                            <span className="text-gray-600 text-right max-w-[60%]">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="warranty" className="mt-8 focus:outline-none">
                    <div className="bg-white rounded-xl border border-gray-100 p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Quality Promise</h3>
                      <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                          This product is covered by our <strong className="text-gray-900">{product.warranty}</strong>. We stand by the quality of our refurbished products. If you encounter any issues with your camera that are not related to accidental damage, we'll repair or replace it free of charge.
                        </p>
                        
                        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                          <h4 className="font-medium text-gray-900 mb-3">Quality Assurance Process:</h4>
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <span className="text-sm text-gray-700">Full 52-point inspection</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <span className="text-sm text-gray-700">Professional cleaning & calibration</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <span className="text-sm text-gray-700">Guaranteed functionality testing</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="reviews" className="mt-8 focus:outline-none">
                    <div className="bg-white rounded-xl border border-gray-100 p-6">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold text-gray-900">Customer Reviews</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <StarRating rating={product.rating} starClassName="w-4 h-4" />
                          <span className="font-medium">{product.rating}</span>
                          <span>({product.reviewCount} reviews)</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        {product.reviews.map((review, index) => (
                          <div key={review.id} className={`pb-4 ${index !== product.reviews.length - 1 ? 'border-b border-gray-50' : ''}`}>
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h4 className="font-medium text-gray-900 text-sm">{review.author}</h4>
                                <div className="flex items-center gap-2 mt-1">
                                  <StarRating rating={review.rating} starClassName="w-3 h-3" />
                                  <span className="text-xs text-gray-500">{review.date}</span>
                                </div>
                              </div>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">{review.comment}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>

          {/* Subtle Sticky Add to Cart for Mobile/Tablet */}
          <div className="lg:hidden">
            <div className="fixed bottom-4 left-4 right-4 z-40 opacity-95">
              <div className="bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-2xl p-3 shadow-lg">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm">
                    <div className="font-semibold text-black">${product.price.toFixed(2)}</div>
                    <div className="text-gray-500 text-xs truncate max-w-[120px]">{product.name}</div>
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-black text-white hover:bg-gray-800 transition-all duration-300 px-6 h-10 text-sm font-medium rounded-xl" 
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Subtle Sticky Add to Cart for Desktop */}
          <div className="hidden lg:block">
            <div className="fixed bottom-6 right-6 z-40">
              <div className="group">
                <Button 
                  size="sm" 
                  className="bg-black/90 text-white hover:bg-black transition-all duration-300 backdrop-blur-sm px-6 h-12 text-sm font-medium shadow-md hover:shadow-lg rounded-full border border-white/10" 
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart • ${product.price.toFixed(2)}
                </Button>
              </div>
            </div>
          </div>

        </div>

        {/* Social Proof & Trust Indicators */}
        <div className="bg-gray-50 py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold font-headline text-gray-900 mb-4">
                Trusted by Thousands of Photographers
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join over 25,000+ satisfied customers who chose QualiCams for their photography needs
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-black mb-2">25,000+</div>
                <div className="text-gray-600 font-medium">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-black mb-2">4.8/5</div>
                <div className="text-gray-600 font-medium">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-black mb-2">15,000+</div>
                <div className="text-gray-600 font-medium">Products Sold</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-black mb-2">99.2%</div>
                <div className="text-gray-600 font-medium">Satisfaction Rate</div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Quality Guaranteed</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Every camera undergoes our rigorous 52-point inspection process, ensuring you receive only the highest quality refurbished equipment.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Truck className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Free Shipping & Returns</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Enjoy free insured shipping on all orders and hassle-free 30-day returns. Your satisfaction is our priority.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Expert Support</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our photography experts are here to help. Get personalized advice and support from people who understand cameras.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Story & Mission */}
        <div className="bg-white py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold font-headline text-gray-900 mb-4">
                  Why Choose QualiCams?
                </h2>
                <p className="text-lg text-gray-600">
                  We're not just another camera store. We're passionate photographers who understand what you need.
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    At QualiCams, we believe that high-quality photography equipment shouldn't break the bank. That's why we specialize in premium refurbished cameras that deliver professional results at a fraction of the cost.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Every day, we receive fresh inventory of carefully selected cameras from professional photographers, studios, and authorized dealers. Each camera is meticulously inspected, cleaned, and tested by our expert technicians.
                  </p>
                  <div className="flex items-center gap-2 text-green-600 font-medium">
                    <CheckCircle className="w-5 h-5" />
                    <span>Founded by photographers, for photographers</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Recycle className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Sustainable Choice</h4>
                        <p className="text-sm text-gray-600">Extend the life of premium equipment while reducing electronic waste</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Expert Curation</h4>
                        <p className="text-sm text-gray-600">Only the best cameras make it through our selection process</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <HeartHandshake className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Personal Service</h4>
                        <p className="text-sm text-gray-600">Real photographers providing real advice and support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="bg-gray-50 py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold font-headline text-gray-900 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-lg text-gray-600">
                Don't just take our word for it - hear from photographers who trust QualiCams
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 text-yellow-400 fill-current">★</div>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "I was skeptical about buying refurbished, but my Canon EOS R5 from QualiCams looks and performs like new. The inspection report gave me complete confidence in my purchase."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-600">MK</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Marcus Klein</div>
                    <div className="text-sm text-gray-500">Wedding Photographer</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 text-yellow-400 fill-current">★</div>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "Amazing service! My Sony A7 IV arrived perfectly packaged with all accessories. The 6-month warranty gave me peace of mind. Will definitely buy again!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-600">SJ</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Sarah Johnson</div>
                    <div className="text-sm text-gray-500">Travel Photographer</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 text-yellow-400 fill-current">★</div>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "Best decision I made for my photography business. Saved thousands on professional equipment without compromising on quality. The support team is incredibly knowledgeable."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-600">DR</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">David Rodriguez</div>
                    <div className="text-sm text-gray-500">Portrait Photographer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Refurbished Benefits */}
        <div className="bg-white py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold font-headline text-gray-900 mb-4">
                  The QualiCams Refurbished Advantage
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Discover why refurbished cameras from QualiCams are the smart choice for photographers
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">52-Point Quality Inspection</h3>
                      <p className="text-gray-600 leading-relaxed">
                        This {product.brand} {product.category.toLowerCase()} undergoes our comprehensive inspection process covering sensor cleanliness, autofocus accuracy, exposure systems, mechanical components, and all {product.category.toLowerCase()}-specific functions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Package className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Like-New Condition</h3>
                      <p className="text-gray-600 leading-relaxed">
                        This {product.brand} {product.name} has been professionally cleaned, calibrated, and restored to optimal working condition. Every function has been tested to ensure professional-grade performance.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.warranty}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        This {product.brand} {product.category.toLowerCase()} comes with our comprehensive {product.warranty.toLowerCase()} covering parts and labor. We stand behind every product we sell.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Save Big, Shoot Better</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">{product.name} (New)</span>
                      <span className="font-semibold text-gray-900">${(product.price * 1.2).toFixed(0)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">{product.name} (QualiCams)</span>
                      <span className="font-semibold text-green-600">${product.price.toFixed(0)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex items-center justify-between text-lg font-bold">
                        <span className="text-gray-900">You Save</span>
                        <span className="text-green-600">${((product.price * 1.2) - product.price).toFixed(0)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-green-700 font-medium mb-2">
                      <CheckCircle className="w-5 h-5" />
                      <span>Same Professional Results</span>
                    </div>
                    <p className="text-sm text-green-600">
                      Get the same image quality and performance from this {product.brand} {product.category.toLowerCase()} at a fraction of the retail cost
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Help & Support */}
        <div className="bg-gray-50 py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold font-headline text-gray-900 mb-4">
                Need Help? We're Here for You
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                Our photography experts are ready to help you find the perfect camera
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600 text-sm mb-3">Speak directly with our camera experts</p>
                  <a href="tel:1-800-QUALICAMS" className="text-blue-600 font-medium hover:text-blue-700">
                    1-800-QUALICAMS
                  </a>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Headphones className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
                  <p className="text-gray-600 text-sm mb-3">Get instant answers to your questions</p>
                  <button className="text-green-600 font-medium hover:text-green-700">
                    Start Chat
                  </button>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Video className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Video Call</h3>
                  <p className="text-gray-600 text-sm mb-3">See the camera before you buy</p>
                  <button className="text-purple-600 font-medium hover:text-purple-700">
                    Schedule Call
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <HeartHandshake className="w-5 h-5 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Still Not Sure?</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Email us at <a href="mailto:info@qualicams.com" className="text-blue-600 hover:text-blue-700 font-medium">info@qualicams.com</a> and we'll help you find the perfect camera for your needs and budget.
                </p>
                <div className="text-sm text-gray-500">
                  Average response time: Under 2 hours during business hours
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Trust Badges */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Shop with Confidence</h3>
                <p className="text-gray-600">Your security and satisfaction are our top priorities</p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <ShieldCheck className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">SSL Secured</h4>
                  <p className="text-sm text-gray-500">256-bit encryption</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Lock className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">Secure Payments</h4>
                  <p className="text-sm text-gray-500">Stripe protected</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Truck className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">Insured Shipping</h4>
                  <p className="text-sm text-gray-500">Full coverage</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <HeartHandshake className="w-8 h-8 text-orange-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">30-Day Returns</h4>
                  <p className="text-sm text-gray-500">No questions asked</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Spacer for mobile sticky button */}
      <div className="lg:hidden h-20"></div>
      
      <Footer />
    </>
  );
}