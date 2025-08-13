"use client";

import Link from "next/link";
import { Camera, Search, ShoppingCart, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/context/cart-context";
import { CartDrawer } from "@/components/cart-drawer";
import { Badge } from "@/components/ui/badge";

const navLinks = [
  { href: "/products?category=dslr", label: "DSLR" },
  { href: "/products?category=mirrorless", label: "Mirrorless" },
  { href: "/products?category=lenses", label: "Lenses" },
  { href: "/products?category=accessories", label: "Accessories" },
  { href: "/generate-description", label: "AI Tool" },
];

export function Header() {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container mx-auto flex h-16 items-center px-4 gap-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg font-headline">
          <Camera className="h-6 w-6 text-primary" />
          <span className="hidden sm:inline">ReFocus</span>
        </Link>
        
        <div className="relative flex-1 hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search for cameras, lenses, and more" className="pl-10" />
        </div>

        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map(link => (
             <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
           <CartDrawer>
             <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 justify-center p-0">{itemCount}</Badge>
                )}
                <span className="sr-only">Shopping Cart</span>
              </Button>
           </CartDrawer>
          <Button asChild variant="ghost" size="icon">
            <Link href="/login">
              <User className="h-5 w-5" />
              <span className="sr-only">Login</span>
            </Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <div className="p-6">
                    <Link href="/" className="flex items-center gap-2 font-bold text-lg font-headline mb-6">
                        <Camera className="h-6 w-6 text-primary" />
                        ReFocus
                    </Link>
                    <div className="relative mb-6">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search..." className="pl-10" />
                    </div>
                    <nav className="flex flex-col space-y-4">
                         {navLinks.map(link => (
                           <Link key={link.href} href={link.href} className="text-lg font-medium transition-colors hover:text-primary">
                            {link.label}
                          </Link>
                        ))}
                    </nav>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
