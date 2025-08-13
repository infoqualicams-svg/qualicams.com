
"use client";

import Link from "next/link";
import { Camera, Search, ShoppingCart, Menu, User, LifeBuoy, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/context/cart-context";
import { CartDrawer } from "@/components/cart-drawer";
import { Badge } from "@/components/ui/badge";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Popover, PopoverContent, PopoverTrigger, PopoverAnchor } from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { products } from "@/lib/mock-data";
import Image from "next/image";

const navLinks = [
  { href: "/products?brand=Sony", label: "Sony" },
  { href: "/products?brand=Canon", label: "Canon" },
  { href: "/products?brand=Fujifilm", label: "Fujifilm" },
  { href: "/products?brand=Panasonic", label: "Panasonic" },
  { href: "/products?brand=Ricoh", label: "Ricoh" },
  { href: "/generate-description", label: "AI Tool" },
];

function SearchInput({ isMobile = false }: { isMobile?: boolean}) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialQuery = searchParams.get('q') || '';
    const [query, setQuery] = useState(initialQuery);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      setQuery(initialQuery);
    }, [initialQuery]);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (query.trim() === '') return;
        setIsPopoverOpen(false);
        inputRef.current?.blur();
        router.push(`/products?q=${encodeURIComponent(query)}`);
    }

    const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        if (newQuery.trim().length > 1) {
          setIsPopoverOpen(true);
        } else {
          setIsPopoverOpen(false);
        }
    }
    
    const searchResults = useMemo(() => {
        if (query.length < 2) return [];
        const lowerCaseQuery = query.toLowerCase();
        return products
          .filter(p => p.name.toLowerCase().includes(lowerCaseQuery) || p.brand.toLowerCase().includes(lowerCaseQuery))
          .slice(0, 5);
    }, [query]);

    return (
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <form onSubmit={handleSearch}>
            <PopoverAnchor asChild>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                        ref={inputRef}
                        placeholder={isMobile ? "Search..." : "Search for cameras, lenses, and more"}
                        className="pl-10"
                        value={query}
                        onChange={handleQueryChange}
                        onFocus={() => query.length > 1 && setIsPopoverOpen(true)}
                    />
                </div>
            </PopoverAnchor>
        </form>
        {searchResults.length > 0 && (
            <PopoverContent 
                className="p-1 w-[var(--radix-popover-trigger-width)]"
                onOpenAutoFocus={(e) => e.preventDefault()}
            >
                <div className="flex flex-col gap-1">
                    {searchResults.map(product => (
                        <Link 
                            key={product.id} 
                            href={`/products/${product.id}`}
                            className="flex items-center gap-3 p-2 rounded-md hover:bg-accent"
                            onClick={() => setIsPopoverOpen(false)}
                        >
                            <Image src={product.images[0]} alt={product.name} width={40} height={40} className="rounded-sm object-cover" />
                            <div className="flex-1">
                                <p className="text-sm font-medium">{product.name}</p>
                                <p className="text-xs text-muted-foreground capitalize">{product.category}</p>
                            </div>
                            <p className="text-sm font-semibold">${product.price.toFixed(2)}</p>
                        </Link>
                    ))}
                </div>
            </PopoverContent>
        )}
      </Popover>
    )
}

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
        
        <div className="hidden md:block w-full max-w-md mx-auto">
          <SearchInput />
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
               <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                 <LifeBuoy className="h-5 w-5 mr-2"/>
                 Need Help?
                 <ChevronDown className="h-4 w-4 ml-1"/>
               </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild><Link href="/contact">Contact Us</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/faq">FAQ</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/returns">Returns</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

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
            <Link href="/account">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
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
                    <div className="mb-6 md:hidden">
                        <SearchInput isMobile />
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
      <nav className="hidden lg:flex items-center justify-center space-x-8 text-sm font-medium border-t bg-card">
          <div className="container mx-auto px-4 h-12 flex items-center justify-center gap-8">
            {navLinks.map(link => (
             <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </Link>
            ))}
          </div>
      </nav>
    </header>
  );
}
