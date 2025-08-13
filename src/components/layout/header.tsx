"use client";

import Link from "next/link";
import { Camera, ShoppingCart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg font-headline">
          <Camera className="h-6 w-6 text-primary" />
          ReFocus
        </Link>
        <nav className="ml-10 hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/products" className="transition-colors hover:text-primary">
            Products
          </Link>
          <Link href="/generate-description" className="flex items-center gap-2 transition-colors hover:text-primary">
            <Sparkles className="h-4 w-4" />
            AI Generator
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Shopping Cart</span>
          </Button>
          <Button>Login</Button>
        </div>
      </div>
    </header>
  );
}
