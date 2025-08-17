import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Award, Heart, Recycle, Users, Camera } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "Every decision we make starts with how it will benefit our customers and their photography journey."
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We believe refurbished doesn't mean compromised. Every product meets our rigorous 52-point inspection."
  },
  {
    icon: Recycle,
    title: "Environmental Impact",
    description: "By giving electronics a second life, we reduce waste and help create a more sustainable future."
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "We're photographers helping photographers access the tools they need to tell their stories."
  }
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/80 text-sm mb-8">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              EST. 2020 • DAILY FRESH BATCHES
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-headline tracking-tight leading-tight">
              OUR
              <br />
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">STORY</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed">
              QUALICAMS was born from a simple belief: premium cameras shouldn't break the bank. 
              <br />
              <span className="text-white font-medium">We deliver fresh refurbished equipment daily at unbeatable prices with guaranteed quality.</span>
            </p>
            <div className="mt-12 flex justify-center items-center gap-8 text-gray-400 text-sm uppercase tracking-wide">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                50,000+ RESTORED
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                25,000+ CUSTOMERS
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                500 TONS SAVED
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 border border-black text-black text-xs font-semibold tracking-wide uppercase mb-6 rounded-full">
                    MISSION STATEMENT
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-6">
                    DEMOCRATIZING
                    <br />
                    VISUAL EXCELLENCE
                  </h2>
                </div>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg">
                    Founded in 2020, QUALICAMS emerged from our shared belief that every photographer deserves access 
                    to premium equipment without premium prices.
                  </p>
                  <p className="text-lg">
                    Our approach is simple: source the best refurbished cameras, rigorously test every unit, and deliver 
                    fresh inventory daily with the best price-quality ratio in the market.
                  </p>
                  <p className="text-lg font-medium text-black">
                    New batches arrive every day. Premium quality. Unbeatable prices. That's the QUALICAMS promise.
                  </p>
                </div>
                <div className="mt-8">
                  <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800 font-semibold px-8 py-4 text-lg rounded-xl">
                    <Link href="/products">EXPLORE COLLECTION</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-black border-4 border-gray-200 relative overflow-hidden rounded-xl">
                  <div className="absolute inset-4 border border-white/20"></div>
                  <div className="absolute inset-8 border border-white/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="w-32 h-32 text-white/30" />
                  </div>
                  <div className="absolute top-8 left-8 w-4 h-4 bg-white"></div>
                  <div className="absolute bottom-8 right-8 w-4 h-4 bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-20 md:py-28 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-4">
                OUR VALUES
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These principles guide everything we do, from the equipment we select to the service we provide.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div key={value.title} className="group text-center">
                  <div className="relative mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-white/30 transition-all duration-300 group-hover:border-white group-hover:scale-110">
                      <value.icon className="w-10 h-10 text-white"/>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white text-black text-xs font-bold flex items-center justify-center">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                                      <h3 className="text-xl font-bold font-headline tracking-tight mb-4 uppercase">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  <div className="mt-6 w-16 h-px bg-white/30 mx-auto transition-all duration-300 group-hover:w-24 group-hover:bg-white"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="w-full py-12 md:py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-8">
                Our Impact
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div>
                  <div className="text-4xl font-bold text-black mb-2">50,000+</div>
                  <p className="text-muted-foreground">Devices Refurbished</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-black mb-2">25,000+</div>
                  <p className="text-muted-foreground">Happy Customers</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-black mb-2">500 tons</div>
                  <p className="text-muted-foreground">E-Waste Prevented</p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground">
                Every purchase you make helps extend the life of quality electronics and reduces environmental impact. 
                Together, we're building a more sustainable future for photography.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
                          <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're buying your first camera or selling gear you've outgrown, 
              we're here to support your photography journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/products">Browse Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/sell">Sell Your Gear</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}