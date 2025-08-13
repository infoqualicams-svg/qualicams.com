
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from '@/components/ui/sheet';
import { useCart } from '@/context/cart-context';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import { Trash2, Plus, Minus } from 'lucide-react';
import Link from 'next/link';

export function CartDrawer({ children }: { children: React.ReactNode }) {
  const { cart, removeItem, updateItemQuantity, isCartOpen, closeCart, openCart } = useCart();
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

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
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Shopping Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})</SheetTitle>
        </SheetHeader>
        {cart.length > 0 ? (
          <>
            <ScrollArea className="flex-grow pr-4 -mr-6">
              <div className="space-y-4 py-4">
                {cart.map(item => (
                  <div key={item.id} className="flex items-start gap-4">
                    <div className="relative h-20 w-20 rounded-md overflow-hidden">
                       <Image
                          src={item.images[0]}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                    </div>
                    <div className="flex-grow">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                      <div className="flex items-center gap-2 mt-2">
                          <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                              <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-6 text-center">{item.quantity}</span>
                          <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                              <Plus className="h-3 w-3" />
                          </Button>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                      <Trash2 className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <SheetFooter className="mt-auto">
              <div className="w-full space-y-4">
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <Button asChild size="lg" className="w-full" onClick={closeCart}>
                    <Link href="/checkout">Proceed to Checkout</Link>
                </Button>
              </div>
            </SheetFooter>
          </>
        ) : (
          <div className="flex-grow flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-semibold">Your cart is empty</h3>
            <p className="text-muted-foreground mt-2">Add some products to get started.</p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
