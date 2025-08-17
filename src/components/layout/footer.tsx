import Link from "next/link";
import { Camera, Award, Truck, HeartHandshake } from "lucide-react";
import { PaymentIcons } from "@/components/ui/payment-icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
         <footer className="w-full border-t border-black/10 bg-black text-white">
       <div className="container mx-auto px-4 py-16">
         <div className="grid md:grid-cols-4 gap-12">
             <div className="md:col-span-1">
                 <Link href="/" className="font-bold text-2xl font-headline tracking-tight">
                    QUALICAMS
                 </Link>
                 <p className="mt-4 text-gray-300 leading-relaxed">
                    Professional grade refurbished cameras and lenses. Meticulously tested, authentically restored.
                 </p>
             </div>
             <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-12">
                 <div>
                    <h4 className="font-semibold text-white mb-6 uppercase tracking-wide text-sm">COLLECTIONS</h4>
                    <ul className="space-y-3">
                        <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">All Products</Link></li>
                        <li><Link href="/products?category=dslr" className="text-gray-300 hover:text-white transition-colors">DSLR Cameras</Link></li>
                        <li><Link href="/products?category=mirrorless" className="text-gray-300 hover:text-white transition-colors">Mirrorless</Link></li>
                        <li><Link href="/products?category=lenses" className="text-gray-300 hover:text-white transition-colors">Lenses</Link></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-semibold text-white mb-6 uppercase tracking-wide text-sm">COMPANY</h4>
                    <ul className="space-y-3">
                        <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">Our Story</Link></li>
                        <li><Link href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
                        <li><Link href="/press" className="text-gray-300 hover:text-white transition-colors">Press</Link></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-semibold text-white mb-6 uppercase tracking-wide text-sm">SUPPORT</h4>
                    <ul className="space-y-3">
                        <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
                        <li><Link href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
                        <li><Link href="/returns" className="text-gray-300 hover:text-white transition-colors">Returns</Link></li>
                        <li><Link href="/shipping-policy" className="text-gray-300 hover:text-white transition-colors">Shipping</Link></li>
                        <li><Link href="/sell" className="text-gray-300 hover:text-white transition-colors">Sell Your Gear</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        {/* Legal Links Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
              <Link href="/shipping-policy" className="text-gray-400 hover:text-white transition-colors">Shipping Policy</Link>
              <Link href="/returns" className="text-gray-400 hover:text-white transition-colors">Return Policy</Link>
            </div>
            <div className="flex items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span className="text-sm">Certified Authentic</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4" />
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="h-4 w-4" />
                <span className="text-sm">30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment & Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm">
          <PaymentIcons className="flex items-center gap-3 mb-4 md:mb-0 flex-wrap" iconClassName="opacity-70 hover:opacity-100 transition-opacity" />
          <p className="text-gray-400">
            © {currentYear} QUALICAMS Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
