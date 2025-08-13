
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
      <main className="flex-grow bg-background">
        <section className="w-full py-12 md:py-20 lg:py-24 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-headline">
              Turn Your Gear Into Cash
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
              Give your used cameras and lenses a new life. Get a competitive, instant quote and enjoy free shipping on us. It's simple, fast, and good for the planet.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {steps.map((step) => (
                        <div key={step.title} className="text-center">
                            <div className="flex justify-center items-center mb-4">
                                <div className="bg-primary/10 text-primary rounded-full p-4">
                                    <step.icon className="w-8 h-8"/>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        <section className="w-full py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4">
                 <div className="max-w-2xl mx-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle>Get a Quote</CardTitle>
                            <CardDescription>Fill out the form below to get started. This is a demo form.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label htmlFor="item-type" className="font-semibold text-sm">What are you selling?</label>
                                <Input id="item-type" placeholder="e.g., Canon EOS R5, Sony 24-70mm f/2.8 GM" />
                            </div>
                             <div>
                                <label htmlFor="condition" className="font-semibold text-sm">Condition</label>
                                <Input id="condition" placeholder="e.g., Like New, Lightly Used, Heavily Used" />
                            </div>
                            <div>
                                <label htmlFor="description" className="font-semibold text-sm">Additional Details (Optional)</label>
                                <Textarea id="description" placeholder="Mention any scratches, issues, or included accessories."/>
                            </div>
                        </CardContent>
                        <CardFooter>
                           <Button size="lg" className="w-full">
                                Get My Quote
                                <ArrowRight className="ml-2 h-4 w-4"/>
                           </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
