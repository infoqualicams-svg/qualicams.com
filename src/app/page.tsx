
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product-card';
import { products, testimonials } from '@/lib/mock-data';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Smartphone, Camera, Headphones, ShieldCheck, Package, Smile, Award, Truck, HeartHandshake } from 'lucide-react';
import { TestimonialCard } from '@/components/testimonial-card';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const categories = [
  { name: 'DSLR Cameras', icon: Camera, href: '/products?category=dslr' },
  { name: 'Mirrorless Cameras', icon: Camera, href: '/products?category=mirrorless' },
  { name: 'Lenses', icon: Smartphone, href: '/products?category=lenses' }, // Placeholder icon
  { name: 'Accessories', icon: Headphones, href: '/products?category=accessories' },
];

const whyRefocus = [
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
  return (
    <>
    <Header />
    <main className="flex-grow">
    <div className="flex flex-col bg-background">
      <section className="w-full py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-gray-800">
            Find your focus, for less.
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground">
            Discover premium refurbished cameras, lenses, and accessories. Expertly restored for you, and for the planet.
          </p>
           <div className="mt-8 flex justify-center gap-4">
             <Button asChild size="lg">
              <Link href="/products">Shop All Products</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/sell">Sell Your Gear</Link>
            </Button>
          </div>
        </div>
      </section>
      
       <section className="w-full py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-10">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
                {categories.map((category) => (
                  <Link href={category.href} key={category.name}>
                    <Card className="flex flex-col items-center justify-center p-4 h-full text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <category.icon className="h-10 w-10 text-primary mb-3" />
                      <span className="font-semibold text-base">{category.name}</span>
                    </Card>
                  </Link>
                ))}
            </div>
        </div>
      </section>

      <section id="featured-products" className="w-full py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Top Deals</h2>
            <Button asChild variant="link" className="text-primary">
              <Link href="/products">View All <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
       <section className="w-full py-12 md:py-20 bg-card">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-10">Why ReFocus?</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {whyRefocus.map((item) => (
                    <div key={item.title} className="text-center">
                        <div className="flex justify-center items-center mb-4">
                            <div className="bg-primary/10 text-primary rounded-full p-4">
                                <item.icon className="w-8 h-8"/>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-10">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

       <section className="w-full py-12 md:py-20">
        <div className="container mx-auto px-4">
           <div className="relative w-full h-[40vh] text-white rounded-lg overflow-hidden">
                <Image
                  src="https://placehold.co/1200x400.png"
                  alt="A person holding a vintage camera"
                  layout="fill"
                  objectFit="cover"
                  className="brightness-75"
                  data-ai-hint="person camera"
                />
                <div className="relative z-10 flex flex-col items-start justify-center h-full p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">
                    Give Your Gear a Second Life
                  </h2>
                  <p className="mt-2 text-lg max-w-md text-gray-200">
                    Get a competitive offer for your used electronics and turn them into cash. It's smart, simple, and sustainable.
                  </p>
                  <Button size="lg" className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                    <Link href="/sell">Get an Offer</Link>
                  </Button>
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
