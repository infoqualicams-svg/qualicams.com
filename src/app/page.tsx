import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/mock-data';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Smartphone, Laptop, Camera, Headphones } from 'lucide-react';

const categories = [
  { name: 'DSLR Cameras', icon: Camera, href: '/products?category=dslr' },
  { name: 'Mirrorless Cameras', icon: Camera, href: '/products?category=mirrorless' },
  { name: 'Lenses', icon: Smartphone, href: '/products?category=lenses' }, // Placeholder icon
  { name: 'Accessories', icon: Headphones, href: '/products?category=accessories' },
];

export default function Home() {
  return (
    <div className="flex flex-col bg-background">
      <section className="w-full py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline">
            Quality Tech, Renewed.
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground">
            Shop premium refurbished cameras and electronics, expertly tested and restored. Better for your wallet, better for the planet.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {categories.map((category) => (
              <Link href={category.href} key={category.name}>
                <Card className="flex flex-col items-center justify-center p-4 h-full text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <category.icon className="h-8 w-8 text-primary mb-2" />
                  <span className="font-semibold text-sm">{category.name}</span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="featured-products" className="w-full py-12 md:py-20 bg-gray-50">
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
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">
                    Sell Your Gear
                  </h2>
                  <p className="mt-2 text-lg max-w-md">
                    Give your old camera a new life. Get a competitive offer and free shipping.
                  </p>
                  <Button size="lg" className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
                    Get an Offer
                  </Button>
                </div>
              </div>
        </div>
      </section>
    </div>
  );
}
