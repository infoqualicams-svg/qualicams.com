import Link from "next/link";
import { Camera, Award, Truck, HeartHandshake } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-card text-muted-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
                 <Link href="/" className="flex items-center gap-2 font-bold text-lg font-headline text-foreground">
                    <Camera className="h-6 w-6 text-primary" />
                    ReFocus
                 </Link>
                 <p className="mt-2 text-sm">
                    High-quality refurbished electronics, tested and guaranteed.
                 </p>
            </div>
            <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h4 className="font-semibold text-foreground mb-3">Shop</h4>
                    <ul className="space-y-2">
                        <li><Link href="/products" className="hover:text-primary">All Products</Link></li>
                        <li><Link href="/products?category=dslr" className="hover:text-primary">DSLR Cameras</Link></li>
                        <li><Link href="/products?category=mirrorless" className="hover:text-primary">Mirrorless</Link></li>
                        <li><Link href="/products?category=lenses" className="hover:text-primary">Lenses</Link></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-semibold text-foreground mb-3">About</h4>
                    <ul className="space-y-2">
                        <li><Link href="#" className="hover:text-primary">Our Story</Link></li>
                        <li><Link href="#" className="hover:text-primary">Careers</Link></li>
                        <li><Link href="#" className="hover:text-primary">Press</Link></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-semibold text-foreground mb-3">Support</h4>
                    <ul className="space-y-2">
                        <li><Link href="#" className="hover:text-primary">Contact Us</Link></li>
                        <li><Link href="#" className="hover:text-primary">FAQ</Link></li>
                        <li><Link href="#" className="hover:text-primary">Returns</Link></li>
                    </ul>
                </div>
                <div>
                     <h4 className="font-semibold text-foreground mb-3">Why ReFocus?</h4>
                     <ul className="space-y-2">
                        <li className="flex items-center gap-2"><Award className="w-4 h-4 text-primary"/> Expert Tested</li>
                        <li className="flex items-center gap-2"><Truck className="w-4 h-4 text-primary"/> Fast Shipping</li>
                        <li className="flex items-center gap-2"><HeartHandshake className="w-4 h-4 text-primary"/> 30-Day Returns</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="mt-8 border-t pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>
            © {currentYear} ReFocus Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
