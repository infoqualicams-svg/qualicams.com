
'use client';

import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product-card';
import { getAllProducts } from '@/lib/firebase-products';
import { testimonials } from '@/lib/mock-data';
import type { Product } from '@/lib/types';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Smartphone, Camera, Headphones, ShieldCheck, Package, Smile, Award, Truck, HeartHandshake, Video, Aperture, Recycle } from 'lucide-react';
import { TestimonialCard } from '@/components/testimonial-card';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const categories = [
  { name: 'All Compacts', icon: Camera, href: '/products?category=compact' },
  { name: 'Vlogging Cameras', icon: Video, href: '/products' }, // Assuming no specific category, link to all
  { name: 'Street Cameras', icon: Aperture, href: '/products' },
  { name: 'Accessories', icon: Headphones, href: '/products?category=accessories' },
];

const whyQualicams = [
    {
        icon: Award,
        title: 'Rigorously Tested',
        description: 'Every device undergoes a 52-point inspection to ensure full functionality. We stand by our quality with a 1-year warranty.',
    },
    {
        icon: Truck,
        title: 'Free & Fast Shipping',
        description: 'Get your gear quickly and safely with our free, tracked shipping on every single order. No minimum purchase required.',
    },
    {
        icon: HeartHandshake,
        title: '30-Day Happiness Guarantee',
        description: 'Not the right fit? No problem. Return your item within 30 days for a full refund, no questions asked.',
    },
]

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState(true);
  
  React.useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const products = await getAllProducts();
        setFeaturedProducts(products.slice(0, 4)); // Get first 4 products
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadProducts();
  }, []);

  return (
    <>
    <Header />
    <main className="flex-grow">
    <div className="flex flex-col bg-background">
      <section className="relative w-full py-24 md:py-32 lg:py-40 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.05),transparent_50%)]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/80 text-sm mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            New Batches Daily • Best Price Quality
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-headline text-white leading-tight">
            CAPTURE
            <br />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">PERFECTION</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Premium refurbished cameras at unbeatable prices. Fresh inventory every day.
            <br />
            <span className="text-white font-medium">Professional quality. Certified refurbished. Maximum value.</span>
          </p>
           <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
             <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-xl">
              <Link href="/products">EXPLORE COLLECTION</Link>
            </Button>
            <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-200">
              <Link href="/sell">SELL YOUR GEAR</Link>
            </Button>
          </div>
          <div className="mt-16 flex justify-center items-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              FREE SHIPPING
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              30-DAY RETURNS
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              1-YEAR WARRANTY
            </div>
          </div>
        </div>
      </section>
      
       <section className="w-full py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-4">DAILY FRESH INVENTORY</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">New refurbished cameras arrive daily. Professional-grade equipment at prices that make sense for every photographer.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {categories.map((category, index) => (
                  <Link href={category.href} key={category.name} className="group">
                    <div className="relative overflow-hidden bg-black rounded-xl border border-black/10 transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800"></div>
                      <div className="relative z-10 p-8 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-white mb-6 transition-transform duration-300 group-hover:scale-110">
                          <category.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-bold text-white text-lg tracking-wide uppercase">{category.name}</h3>
                        <div className="mt-4 w-12 h-px bg-white/50 mx-auto transition-all duration-300 group-hover:w-20 group-hover:bg-white"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </div>
                  </Link>
                ))}
            </div>
        </div>
      </section>

      <section id="featured-products" className="w-full py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">TODAY'S BEST DEALS</h2>
              <p className="text-gray-600 text-lg mt-2">Fresh refurbished cameras with the best price-quality ratio</p>
            </div>
            <Button asChild variant="outline" className="border-black text-black hover:bg-black hover:text-white font-semibold px-6 py-3 rounded-xl">
              <Link href="/products">VIEW FULL CATALOG <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          {/* Mobile: Horizontal Scroll Slider */}
          <div className="block lg:hidden">
            {loading ? (
              <div className="text-center py-12">
                <p className="text-gray-500">Loading featured products...</p>
              </div>
            ) : featuredProducts.length > 0 ? (
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                {featuredProducts.map((product, index) => (
                  <div key={product.id} className="flex-none w-72 snap-start">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No products available.</p>
              </div>
            )}
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8">
            {loading ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">Loading featured products...</p>
              </div>
            ) : featuredProducts.length > 0 ? (
              featuredProducts.map((product, index) => (
                <div key={product.id} className="group">
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">No products available.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      
       <section className="w-full py-20 md:py-28 bg-black text-white">
         <div className="container mx-auto px-4">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-4">UNBEATABLE VALUE</h2>
             <p className="text-gray-300 text-lg max-w-3xl mx-auto">Every refurbished camera delivers professional performance at a fraction of the retail price. Quality guaranteed, prices that surprise.</p>
           </div>
            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                {whyQualicams.map((item, index) => (
                    <div key={item.title} className="group text-center">
                        <div className="relative">
                            <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-white/30 mb-8 transition-all duration-300 group-hover:border-white group-hover:scale-110">
                                <item.icon className="w-10 h-10 text-white"/>
                            </div>
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-white text-black text-xs font-bold rounded-full flex items-center justify-center">
                              {String(index + 1).padStart(2, '0')}
                            </div>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold font-headline tracking-tight mb-4 uppercase">{item.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                        <div className="mt-6 w-16 h-px bg-white/30 mx-auto transition-all duration-300 group-hover:w-24 group-hover:bg-white"></div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-4">TRUSTED BY PROFESSIONALS</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">From emerging artists to established photographers, our community speaks to the quality and reliability of every QUALICAMS product.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="relative group">
                <div className="bg-gray-50 p-8 border border-gray-200 transition-all duration-300 group-hover:border-black group-hover:shadow-lg rounded-xl">
                  <div className="text-6xl text-gray-200 font-serif leading-none mb-4">"</div>
                  <TestimonialCard testimonial={testimonial} />
                  <div className="absolute top-4 right-4 w-8 h-8 bg-black text-white text-xs font-bold flex items-center justify-center rounded-lg">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className="w-full py-20 md:py-28 bg-black">
        <div className="container mx-auto px-4">
           <div className="relative w-full min-h-[60vh] text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-20 left-20 w-32 h-32 border border-white/20"></div>
                  <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10"></div>
                </div>
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full p-12 md:p-16 gap-12">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/80 text-sm mb-8">
                      <Recycle className="w-4 h-4" />
                      Sustainable • Profitable • Professional
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold font-headline tracking-tight mb-6 leading-tight">
                      TRANSFORM
                      <br />
                      <span className="text-gray-400">YOUR GEAR</span>
                      <br />
                      INTO VALUE
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
                      Professional assessment. Competitive pricing. Seamless transaction. 
                      Turn your unused equipment into cash while contributing to a sustainable photography ecosystem.
                    </p>
                    <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-xl" asChild>
                      <Link href="/sell">GET INSTANT QUOTE</Link>
                    </Button>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="relative">
                      <div className="w-80 h-80 border-2 border-white/20 flex items-center justify-center rounded-xl">
                        <Camera className="w-32 h-32 text-white/30" />
                      </div>
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-lg"></div>
                      <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-white rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </section>
    </div>
    </main>
    <Footer />
    </>
  );
}
