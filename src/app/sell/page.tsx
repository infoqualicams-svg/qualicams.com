
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ArrowRight, Camera, DollarSign, Package } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const steps = [
    {
        icon: Camera,
        title: "1. Tell Us About Your Gear",
        description: "Provide details about your camera, lens, or accessory. The more information you give, the more accurate your quote will be."
    },
    {
        icon: DollarSign,
        title: "2. Get an Instant Quote",
        description: "Our system will generate an instant, competitive offer based on the information you provided and current market values."
    },
    {
        icon: Package,
        title: "3. Ship It for Free",
        description: "If you accept the offer, we'll send you a prepaid shipping label. Just pack your gear securely and send it our way."
    }
]

export default function SellPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/80 text-sm mb-8">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              BEST PRICES • DAILY BUYING • FAST PAYMENT
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-headline tracking-tight leading-tight">
              TURN GEAR
              <br />
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">INTO CASH</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed">
              We buy cameras daily to stock our refurbished inventory. Get top market prices. 
              <br />
              <span className="text-white font-medium">Best prices guaranteed. Professional assessment. Same-day payment.</span>
            </p>
            <div className="mt-12 flex justify-center items-center gap-8 text-gray-400 text-sm uppercase tracking-wide">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                INSTANT QUOTES
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                FREE SHIPPING
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                SECURE PROCESS
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-4">HOW IT WORKS</h2>
                  <p className="text-gray-600 text-lg max-w-2xl mx-auto">A streamlined process designed for maximum efficiency and transparency</p>
                </div>
                <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={step.title} className="group text-center">
                            <div className="relative mb-8">
                                <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-black/30 transition-all duration-300 group-hover:border-black group-hover:scale-110">
                                    <step.icon className="w-10 h-10 text-black"/>
                                </div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-black text-white text-xs font-bold flex items-center justify-center">
                                  {String(index + 1).padStart(2, '0')}
                                </div>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold font-headline tracking-tight mb-4 uppercase">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{step.description}</p>
                            <div className="mt-6 w-16 h-px bg-black/30 mx-auto transition-all duration-300 group-hover:w-24 group-hover:bg-black"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        <section className="w-full py-20 md:py-28 bg-black text-white">
            <div className="container mx-auto px-4">
                 <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-12">
                      <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-4">GET YOUR QUOTE</h2>
                      <p className="text-gray-300 text-lg">Professional assessment in minutes</p>
                    </div>
                    <div className="bg-white text-black p-8 border border-gray-200">
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="item-type" className="block font-semibold text-sm mb-2 uppercase tracking-wide">What are you selling?</label>
                                <Input id="item-type" placeholder="e.g., Canon EOS R5, Sony 24-70mm f/2.8 GM" className="border-black" />
                            </div>
                             <div>
                                <label htmlFor="condition" className="block font-semibold text-sm mb-2 uppercase tracking-wide">Condition</label>
                                <Input id="condition" placeholder="e.g., Like New, Lightly Used, Heavily Used" className="border-black" />
                            </div>
                            <div>
                                <label htmlFor="description" className="block font-semibold text-sm mb-2 uppercase tracking-wide">Additional Details (Optional)</label>
                                <Textarea id="description" placeholder="Mention any scratches, issues, or included accessories." className="border-black" />
                            </div>
                            <Button size="lg" className="w-full bg-black text-white hover:bg-gray-800 font-semibold px-8 py-4 text-lg rounded-xl">
                                GET INSTANT QUOTE
                                <ArrowRight className="ml-2 h-4 w-4"/>
                           </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
