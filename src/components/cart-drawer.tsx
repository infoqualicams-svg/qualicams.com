'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from '@/components/ui/sheet';
import { useCart } from '@/context/cart-context';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import { Trash2, Plus, Minus, ShoppingBag, Truck } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useToast } from '@/hooks/use-toast';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder'
);

export function CartDrawer({ children }: { children: React.ReactNode }) {
  const { cart, removeItem, updateItemQuantity, isCartOpen, closeCart, openCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const originalTotal = cart.reduce((acc, item) => acc + (item.price * 1.1) * item.quantity, 0);
  const savings = originalTotal - subtotal;

  const handleDirectCheckout = async () => {
    if (cart.length === 0) return;
    
    setIsLoading(true);
    try {
      const stripe = await stripePromise;
      
      if (!stripe) {
        throw new Error('Stripe failed to initialize');
      }

      // Create checkout session without customer info - Stripe will collect it
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cart.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            images: item.images,
            description: item.description,
          })),
          customerInfo: { email: '', fullName: '' } // Empty - Stripe will collect
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const session = await response.json();

      // Close cart and redirect to Stripe Checkout
      closeCart();
      
      const result = await stripe.redirectToCheckout({
        sessionId: session.sessionId,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Checkout Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleOpenChange = (open: boolean) => {
    if (open) {
      openCart();
    } else {
      closeCart();
    }
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col w-full max-w-md bg-white">
        <SheetHeader className="pb-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <div>
              <SheetTitle className="text-lg font-semibold text-left">Your Cart</SheetTitle>
              <p className="text-sm text-gray-500">{totalItems} {totalItems === 1 ? 'item' : 'items'}</p>
            </div>
          </div>
        </SheetHeader>
        
        {cart.length > 0 ? (
          <>
            <ScrollArea className="flex-grow">
              <div className="space-y-4 py-4">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="relative h-16 w-16 rounded-lg overflow-hidden border border-gray-200 bg-white flex-shrink-0">
                       <Image
                          src={item.images[0]}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-sm leading-tight">{item.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-sm font-semibold text-gray-900">${item.price.toFixed(2)}</p>
                        <p className="text-xs text-gray-500 line-through">${(item.price * 1.1).toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-6 w-6 text-gray-400 hover:text-red-500 hover:bg-red-50" 
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-7 w-7 rounded-lg border-gray-300 text-gray-600 hover:bg-gray-100" 
                          onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-7 w-7 rounded-lg border-gray-300 text-gray-600 hover:bg-gray-100" 
                          onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                        <p className="text-xs text-gray-500 line-through">${((item.price * 1.1) * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>



            <Separator className="my-4" />
            
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Original Price</span>
                  <span className="text-gray-500 line-through">${originalTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-green-600 font-medium">You Save</span>
                  <span className="text-green-600 font-medium">-${savings.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="flex items-center justify-center gap-2 text-sm text-green-700">
                  <Truck className="w-4 h-4" />
                  <span className="font-medium">Free Shipping Included</span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">Total</span>
                  <span className="text-lg font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
              </div>
                
              <Button 
                onClick={handleDirectCheckout}
                disabled={isLoading}
                className="w-full bg-black text-white hover:bg-gray-900 text-base py-3 rounded-xl font-semibold"
              >
                {isLoading ? 'Processing...' : 'CHECKOUT'}
              </Button>
            </div>
          </>
        ) : (
          <div className="flex-grow flex items-center justify-center">
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-sm text-gray-500 mb-4">Start shopping to add items to your cart</p>
              <Button asChild className="bg-black text-white hover:bg-gray-900 rounded-xl">
                <Link href="/products">Browse Products</Link>
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}