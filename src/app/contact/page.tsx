
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold font-headline">Contact Us</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                We're here to help! Whether you have a question about our products, an order, or our service, please get in touch.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                 <Card>
                    <CardHeader>
                        <CardTitle>Send us a Message</CardTitle>
                        <CardDescription>Fill out the form and we'll get back to you as soon as possible.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Your Name" />
                        </div>
                         <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="you@example.com" />
                        </div>
                         <div>
                            <Label htmlFor="subject">Subject</Label>
                            <Input id="subject" placeholder="e.g. Question about my order" />
                        </div>
                         <div>
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" placeholder="Your message..."/>
                        </div>
                        <Button className="w-full">Submit</Button>
                    </CardContent>
                 </Card>
              </div>
               <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 font-headline">Our Information</h3>
                  <div className="space-y-4 text-muted-foreground">
                     <div className="flex items-center gap-4">
                        <Mail className="w-5 h-5 text-primary"/>
                        <span>support@refocus.com</span>
                     </div>
                      <div className="flex items-center gap-4">
                        <Phone className="w-5 h-5 text-primary"/>
                        <span>(555) 123-4567</span>
                     </div>
                  </div>
                </div>
                 <div>
                    <h3 className="text-xl font-bold mb-4 font-headline">Frequently Asked Questions</h3>
                    <p className="text-muted-foreground">
                        Have a common question? Check out our <a href="/faq" className="text-primary underline">FAQ page</a> for quick answers.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
