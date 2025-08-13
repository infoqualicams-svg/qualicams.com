"use client";

import Link from "next/link";
import { Camera, Search, ShoppingCart, Sparkles, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container mx-auto flex h-16 items-center px-4 gap-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg font-headline">
          <Camera className="h-6 w-6 text-primary" />
          <span className="hidden sm:inline">ReFocus</span>
        </Link>
        
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search for a camera..." className="pl-10" />
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/products" className="transition-colors hover:text-primary">
            Products
          </Link>
          <Link href="/generate-description" className="flex items-center gap-2 transition-colors hover:text-primary">
            AI Tool
          </Link>
        </nav>

        <div className="flex items-center gap-2">
           <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Shopping Cart</span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Login</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
