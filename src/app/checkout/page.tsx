
'use client';

import { useCart } from '@/context/cart-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold font-headline mb-8 text-center">Checkout</h1>
      <div className="grid lg:grid-cols-2 gap-12">
        
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Shipping & Payment</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <section>
                    <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                     <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="you@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                  </section>
                  <section>
                    <h3 className="text-lg font-semibold mb-4">Shipping Address</h3>
                    <div className="space-y-4">
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
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                           <FormField
                            control={form.control}
                            name="state"
                            render={({ field }) => (
                              <FormItem className="md:col-span-1">
                                <FormLabel>State / Province</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="zip"
                            render={({ field }) => (
                              <FormItem className="md:col-span-1">
                                <FormLabel>ZIP / Postal</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                      </div>
                    </div>
                  </section>
                  <section>
                    <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
                    <p className="text-sm text-muted-foreground mb-4">This is a demo. Do not enter real card details.</p>
                     <div className="space-y-4">
                       <FormField
                        control={form.control}
                        name="cardName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name on Card</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
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
                            <FormControl>
                              <Input placeholder="1111222233334444" {...field} />
                            </FormControl>
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
                                <FormControl>
                                  <Input placeholder="MM/YY" {...field} />
                                </FormControl>
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
                                <FormControl>
                                  <Input placeholder="123" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                       </div>
                    </div>
                  </section>
                   <Button type="submit" size="lg" className="w-full text-lg py-6">
                      Place Order
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                       <div className="relative h-16 w-16 rounded-md overflow-hidden border">
                          <Image src={item.images[0]} alt={item.name} fill className="object-cover" />
                       </div>
                       <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                       </div>
                    </div>
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
                <Separator />
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
                <Separator />
            </CardContent>
            <CardFooter className="flex justify-between text-xl font-bold">
              <p>Total</p>
              <p>${total.toFixed(2)}</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
