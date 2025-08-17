
"use client";

import Link from "next/link";
import { Camera, Search, ShoppingCart, Menu, User, LifeBuoy, ChevronDown, ShieldCheck, Truck, Package, LogOut } from "lucide-react";
import { useAuth } from "@/context/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/context/cart-context";
import { CartDrawer } from "@/components/cart-drawer";
import { Badge } from "@/components/ui/badge";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect, useMemo, useRef, Suspense } from "react";
import { Popover, PopoverContent, PopoverTrigger, PopoverAnchor } from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { getAllProducts } from "@/lib/firebase-products";
import type { Product } from "@/lib/types";

const navLinks = [
  { href: "/products?brand=Sony", label: "Sony" },
  { href: "/products?brand=Canon", label: "Canon" },
  { href: "/products?brand=Fujifilm", label: "Fujifilm" },
  { href: "/products?brand=Panasonic", label: "Panasonic" },
  { href: "/products?brand=Ricoh", label: "Ricoh" },

];

function SearchInput({ isMobile = false }: { isMobile?: boolean}) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialQuery = searchParams.get('q') || '';
    const [query, setQuery] = useState(initialQuery);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      setQuery(initialQuery);
    }, [initialQuery]);

    useEffect(() => {
      const loadProducts = async () => {
        try {
          const productsData = await getAllProducts();
          setProducts(productsData);
        } catch (error) {
          console.error('Error loading products for search:', error);
        }
      };
      loadProducts();
    }, []);

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
        if (query.length < 2 || products.length === 0) return [];
        const lowerCaseQuery = query.toLowerCase();
        return products
          .filter(p => 
            p.name.toLowerCase().includes(lowerCaseQuery) || 
            p.brand.toLowerCase().includes(lowerCaseQuery) ||
            p.category.toLowerCase().includes(lowerCaseQuery)
          )
          .slice(0, 5);
    }, [query, products]);

    return (
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <form onSubmit={handleSearch} className="relative">
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
                                <Image 
                                  src={product.images?.[0] || 'https://placehold.co/40x40?text=Camera'} 
                                  alt={product.name} 
                                  width={40} 
                                  height={40} 
                                  className="rounded-sm object-cover" 
                                />
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
        </form>
      </Popover>
    )
}

// Highlight Bar Component
function HighlightBar() {
  return (
    <div className="bg-black text-white py-2 px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"></div>
      <div className="relative z-10 flex items-center justify-center gap-4 text-sm font-medium">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-green-400" />
          <span>Insured</span>
        </div>
        <div className="w-px h-4 bg-gray-600"></div>
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-blue-400" />
          <span className="font-semibold">Free Shipping</span>
        </div>
        <div className="w-px h-4 bg-gray-600"></div>
        <div className="flex items-center gap-2">
          <Package className="w-4 h-4 text-yellow-400" />
          <span>2-5 Business Days</span>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <HighlightBar />
      <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white shadow-sm">
       <div className="container mx-auto flex h-16 sm:h-20 items-center px-4 gap-4 sm:gap-6">
         <Link href="/" className="flex items-center">
           <img 
             src="/QualiCams.svg" 
             alt="QualiCams Logo" 
             className="h-10 w-auto sm:h-12"
           />
         </Link>
        
        <div className="hidden md:block w-full max-w-md mx-auto">
          <Suspense fallback={<div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><Input placeholder="Search..." className="pl-10" disabled /></div>}>
            <SearchInput />
          </Suspense>
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
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Account Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-2 py-1.5 text-sm font-medium">
                  {user.displayName || user.email}
                </div>
                <DropdownMenuItem asChild>
                  <Link href="/account" className="flex items-center cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    My Account
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={logout}
                  className="cursor-pointer text-red-600 focus:text-red-600"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild variant="ghost" size="icon">
              <Link href="/login">
                <User className="h-5 w-5" />
                <span className="sr-only">Sign In</span>
              </Link>
            </Button>
          )}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <div className="p-6">
                    <Link href="/" className="flex items-center mb-6">
                        <img 
                          src="/QualiCams.svg" 
                          alt="QualiCams Logo" 
                          className="h-12 w-auto"
                        />
                    </Link>
                    <div className="mb-6 md:hidden">
                        <Suspense fallback={<div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><Input placeholder="Search..." className="pl-10" disabled /></div>}>
                            <SearchInput isMobile />
                        </Suspense>
                    </div>
                    <nav className="flex flex-col space-y-4">
                         {navLinks.map(link => (
                           <Link key={link.href} href={link.href} className="text-lg font-medium transition-colors hover:text-black">
                            {link.label}
                          </Link>
                        ))}
                        
                        {/* Account Navigation for Mobile */}
                        <div className="border-t pt-4 mt-6">
                          {user ? (
                            <>
                              <div className="mb-4 pb-2 border-b">
                                <p className="text-sm font-medium text-gray-900">
                                  {user.displayName || user.email}
                                </p>
                                <p className="text-xs text-gray-500">Signed in</p>
                              </div>
                              <Link href="/account" className="flex items-center gap-3 text-lg font-medium transition-colors hover:text-black mb-3">
                                <User className="h-5 w-5" />
                                My Account
                              </Link>
                              <button 
                                onClick={logout}
                                className="flex items-center gap-3 text-lg font-medium text-red-600 transition-colors hover:text-red-700"
                              >
                                <LogOut className="h-5 w-5" />
                                Sign Out
                              </button>
                            </>
                          ) : (
                            <Link href="/login" className="flex items-center gap-3 text-lg font-medium transition-colors hover:text-black">
                              <User className="h-5 w-5" />
                              Sign In
                            </Link>
                          )}
                        </div>
                    </nav>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
             <nav className="hidden lg:flex items-center justify-center space-x-12 text-sm font-medium border-t border-black/10 bg-white/95 backdrop-blur-sm">
           <div className="container mx-auto px-4 h-14 flex items-center justify-center gap-12">
             {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="font-semibold tracking-wide uppercase text-xs hover:text-black transition-colors relative group">
               {link.label}
               <div className="absolute bottom-0 left-0 w-full h-px bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
             </Link>
             ))}
          </div>
      </nav>
    </header>
    </>
  );
}
