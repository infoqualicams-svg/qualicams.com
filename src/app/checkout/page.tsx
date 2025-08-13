
'use client';

import { useCart } from '@/context/cart-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, ChevronRight, ShoppingCart, User, Truck, CreditCard } from 'lucide-react';
import Link from 'next/link';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  fullName: z.string().min(2, { message: 'Full name is required.' }),
  address: z.string().min(5, { message: 'Address is required.' }),
  city: z.string().min(2, { message: 'City is required.' }),
  state: z.string().min(2, { message: 'State/Province is required.' }),
  zip: z.string().min(4, { message: 'ZIP/Postal code is required.' }),
  cardName: z.string().min(2, { message: 'Name on card is required.' }),
  cardNumber: z.string().regex(/^\d{16}$/, { message: 'Card number must be 16 digits.' }),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: 'Use MM/YY format.' }),
  cvc: z.string().regex(/^\d{3,4}$/, { message: 'CVC must be 3 or 4 digits.' }),
});

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState('information');

  useEffect(() => {
    if (cart.length === 0) {
      router.push('/products');
    }
  }, [cart, router]);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 15.00;
  const taxes = subtotal * 0.08;
  const total = subtotal + shipping + taxes;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      fullName: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      cardName: '',
      cardNumber: '',
      expiryDate: '',
      cvc: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log('Order placed with values:', values);
    router.push('/order-confirmation');
    clearCart();
  };

  if (cart.length === 0) {
    return null; // or a loading spinner
  }

  const steps = [
    { id: 'information', name: 'Information', icon: User },
    { id: 'shipping', name: 'Shipping', icon: Truck },
    { id: 'payment', name: 'Payment', icon: CreditCard },
  ];
  
  const Breadcrumbs = () => (
    <nav className="flex items-center text-sm font-medium text-muted-foreground mb-8">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <span className={`px-2 py-1 rounded-full ${currentStep === step.id ? 'text-primary' : ''}`}>
             {step.name}
          </span>
          {index < steps.length - 1 && (
            <ChevronRight className="h-4 w-4 mx-1" />
          )}
        </div>
      ))}
    </nav>
  );

  return (
    <div className="grid lg:grid-cols-2 min-h-screen">
      <div className="lg:col-span-1 bg-white py-12 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-lg mx-auto">
          <Breadcrumbs />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
               <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                        <h3 className="text-lg font-semibold flex items-center gap-3">
                            <User className="w-5 h-5"/> Contact Information
                        </h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                       <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="you@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                         <p className="text-xs text-muted-foreground mt-2">Already have an account? <Link href="/login" className="text-primary hover:underline">Log in</Link></p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                     <AccordionTrigger>
                        <h3 className="text-lg font-semibold flex items-center gap-3">
                            <Truck className="w-5 h-5"/> Shipping Address
                        </h3>
                     </AccordionTrigger>
                     <AccordionContent className="pt-4 space-y-4">
                         <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                         <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Address</FormLabel>
                              <FormControl>
                                <Input placeholder="123 Main St" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="grid md:grid-cols-3 gap-4">
                           <FormField
                              control={form.control}
                              name="city"
                              render={({ field }) => (
                                <FormItem className="md:col-span-1">
                                  <FormLabel>City</FormLabel>
                                  <FormControl><Input {...field} /></FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                             <FormField
                              control={form.control}
                              name="state"
                              render={({ field }) => (
                                <FormItem className="md:col-span-1">
                                  <FormLabel>State</FormLabel>
                                  <FormControl><Input {...field} /></FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="zip"
                              render={({ field }) => (
                                <FormItem className="md:col-span-1">
                                  <FormLabel>ZIP Code</FormLabel>
                                  <FormControl><Input {...field} /></FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                        </div>
                     </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                         <h3 className="text-lg font-semibold flex items-center gap-3">
                            <CreditCard className="w-5 h-5"/> Payment Details
                        </h3>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 space-y-4">
                        <p className="text-sm text-muted-foreground mb-4">This is a demo. Do not enter real card details.</p>
                         <FormField
                          control={form.control}
                          name="cardName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name on Card</FormLabel>
                              <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                         <FormField
                          control={form.control}
                          name="cardNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Card Number</FormLabel>
                              <FormControl><Input placeholder="1111222233334444" {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                         <div className="grid grid-cols-2 gap-4">
                           <FormField
                              control={form.control}
                              name="expiryDate"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Expiration (MM/YY)</FormLabel>
                                  <FormControl><Input placeholder="MM/YY" {...field} /></FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="cvc"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>CVC</FormLabel>
                                  <FormControl><Input placeholder="123" {...field} /></FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                         </div>
                    </AccordionContent>
                  </AccordionItem>
               </Accordion>
               
               <Button type="submit" size="lg" className="w-full text-lg py-6 mt-6">
                    Place Order
                </Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="lg:col-span-1 bg-muted/50 py-12 px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-lg mx-auto lg:sticky lg:top-20">
            <h2 className="text-2xl font-bold font-headline mb-6">Order Summary</h2>
            <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                       <div className="relative h-16 w-16 rounded-md overflow-hidden border bg-white">
                          <Image src={item.images[0]} alt={item.name} fill className="object-cover" />
                       </div>
                       <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                       </div>
                    </div>
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
            </div>
            <Separator className="my-6" />
            <div className="space-y-2">
                <div className="flex justify-between">
                    <p className="text-muted-foreground">Subtotal</p>
                    <p>${subtotal.toFixed(2)}</p>
                </div>
                 <div className="flex justify-between">
                    <p className="text-muted-foreground">Shipping</p>
                    <p>${shipping.toFixed(2)}</p>
                </div>
                 <div className="flex justify-between">
                    <p className="text-muted-foreground">Taxes</p>
                    <p>${taxes.toFixed(2)}</p>
                </div>
            </div>
             <Separator className="my-6" />
             <div className="flex justify-between text-xl font-bold">
              <p>Total</p>
              <p>${total.toFixed(2)}</p>
            </div>
          </div>
      </div>
    </div>
  );
}

    