import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/mock-data';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] text-white">
        <Image
          src="https://placehold.co/1600x900.png"
          alt="A collection of professional cameras"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
          data-ai-hint="professional cameras"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold font-headline">
            Focus on Quality, Not Price.
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
            Discover premium refurbished cameras, tested and trusted by experts. Get the gear you've always wanted at a price you'll love.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#featured-products">Shop Now</Link>
          </Button>
        </div>
      </section>

      <section id="featured-products" className="w-full py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center font-headline">Featured Products</h2>
          <p className="mt-2 text-center text-muted-foreground max-w-xl mx-auto">
            Each camera is meticulously inspected, restored, and certified to meet our high standards of quality and performance.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-10">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/products">View All Cameras</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
