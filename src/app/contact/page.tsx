
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Contact form submitted:', values);
      
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/80 text-sm mb-8">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              24/7 SUPPORT • RAPID RESPONSE
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-headline tracking-tight leading-tight">
              GET IN
              <br />
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">TOUCH</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Professional support for all your photography equipment needs.
              <br />
              <span className="text-white font-medium">Expert guidance. Rapid response. Personal attention.</span>
            </p>
          </div>
        </section>

        <section className="w-full py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
              <div>
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 border border-black text-black text-xs font-semibold tracking-wide uppercase mb-6">
                    DAILY SUPPORT • BEST PRICES
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-6">
                    SEND US A
                    <br />
                    MESSAGE
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Questions about our daily inventory, pricing, or refurbished cameras? Get in touch for personalized assistance.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 border border-gray-200">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-semibold uppercase tracking-wide text-sm">Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your Name" {...field} className="border-black" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-semibold uppercase tracking-wide text-sm">Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="you@example.com" {...field} className="border-black" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-semibold uppercase tracking-wide text-sm">Subject</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g. Question about my order" {...field} className="border-black" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-semibold uppercase tracking-wide text-sm">Message</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Your message..." {...field} className="border-black" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 font-semibold px-8 py-4 text-lg rounded-xl" disabled={isSubmitting}>
                                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                            </Button>
                        </form>
                    </Form>
                </div>
              </div>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold font-headline tracking-tight mb-8 uppercase">DIRECT CONTACT</h3>
                  <div className="space-y-6">
                     <div className="flex items-center gap-6">
                        <div className="w-12 h-12 border-2 border-black flex items-center justify-center">
                          <Mail className="w-6 h-6 text-black"/>
                        </div>
                        <div>
                          <div className="font-semibold text-black">EMAIL</div>
                          <div className="text-gray-600">info@qualicams.com</div>
                        </div>
                     </div>
                      <div className="flex items-center gap-6">
                        <div className="w-12 h-12 border-2 border-black flex items-center justify-center">
                          <Phone className="w-6 h-6 text-black"/>
                        </div>
                        <div>
                          <div className="font-semibold text-black">PHONE</div>
                          <div className="text-gray-600">(555) 123-4567</div>
                        </div>
                     </div>
                  </div>
                </div>
                
                <div className="bg-black text-white p-8">
                  <h3 className="text-xl font-bold font-headline tracking-tight mb-4 uppercase">QUICK ANSWERS</h3>
                  <p className="text-gray-300 mb-6">
                      Common questions? Our comprehensive FAQ covers warranty information, shipping details, and return policies.
                  </p>
                  <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black font-semibold rounded-xl">
                    <a href="/faq">VIEW FAQ</a>
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
