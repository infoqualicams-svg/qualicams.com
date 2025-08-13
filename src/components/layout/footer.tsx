import Link from "next/link";
import { Camera, Award, Truck, HeartHandshake } from "lucide-react";

const VisaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24" {...props}><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#3A424A" /><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFF" /><path d="M12.9 6.6c0-.5-.3-.8-.8-.8H8.3c-.4 0-.7.3-.7.6 0 .2.1.4.3.5l2.1 2.4-2.5 4.3c-.2.3-.2.5 0 .6.1.1.3.2.5.2h1.4c.4 0 .7-.2.9-.6l1.2-2.3 1.1-2.2c-.1-.1-.1-.2-.1-.4zm-3.9 5.2l-1.1-2h-.1l-1.7 3.5c-.1.3-.4.5-.7.5H4c-.5 0-.8-.3-.8-.7s.3-.8.8-.8l1.4-.2c.5 0 .8-.3.9-1l1.5-6.4c.1-.5.5-.8 1-.8h2.9c.5 0 .8.3.8.8s-.3.8-.8.8H9.3l-1.1 4.7h.1l1.7-2.3c.1-.2.2-.4.2-.6 0-.5-.3-.8-.8-.8H7.4c-.4 0-.7.3-.7.6s.3.8.8.8l.6.1.3 1.2zM22.6 6.6c0-.5-.3-.8-.8-.8h-3.4c-.5 0-.8.3-.8.8s.3.8.8.8h.9l-2.2 6.8c-.1.4-.4.6-.8.6H15c-.5 0-.8.3-.8.8s.3.8.8.8h3.4c.5 0 .8-.3.8-.8s-.3-.8-.8-.8h-.9l2.2-6.8c.1-.4.4-.6.8-.6h1.4c.5 0 .8-.3.8-.8zM31.2 6.6c0-.5-.3-.8-.8-.8H27c-.5 0-.8.3-.8.8s.3.8.8.8h.7l-1.3 3.4-1.6-3.4H24c-.5 0-.8.3-.8.8s.3.8.8.8h.6l1.5 3.4-1.5 3.4h-.6c-.5 0-.8.3-.8.8s.3.8.8.8h2.8c.5 0 .8-.3.8-.8l-.1-1.2.6-1.2c.2-.4.2-.6 0-.8l-1.5-2.8 1.9-4h.6c.5 0 .8-.3.8-.8z" fill="#1A1F71" /></svg>
)

const MastercardIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24" {...props}><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#3A424A"/><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFF"/><circle cx="15" cy="12" r="7" fill="#EB001B"/><circle cx="23" cy="12" r="7" fill="#F79E1B"/><path d="M22 12c0 4.1-2.9 7-6.9 7h-1.2c-3.7 0-6.8-2.6-6.8-6.3 0-3.3 2.4-6.3 6.1-6.3h1.8C19.1 6.4 22 8.9 22 12z" fill="#FF5F00"/></svg>
)

const AmexIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24" {...props}><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#3A424A"/><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#006FCF"/><path fill="#FFF" d="M12.9 8.2H9.8v1.8h2.8v1.7H9.8v2.1h3.1v1.8H8V6.4h4.9zM15.3 15.6h1.8V8.1h-1.8zM20.6 8.2h-1.7l-2.1 7.4h1.8l.3-1.3h2.3l.3 1.3h1.8l-2.1-7.4zm-.2 4.5h-1.3l.6-2.6zM29.2 11.2c0-1.8-1.2-2.9-3.2-2.9h-3.4v7.4h1.8v-2.7h1.2l1.6 2.7h2l-2-3.1c.9-.3 1.2-1 1.2-1.8zm-3.2-.8h-1.6v-1.3h1.6c.7 0 1.1.3 1.1.8s-.4.5-1.1.5z"/></svg>
)

const PayPalIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24" {...props}><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#3A424A"/><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFF"/><path d="M24.4 8.7c.2-1.5-1-2.6-2.5-2.6H17l-.8 4.9c0 .4.2.7.6.7h2.8l-.4 2.3c-.1.4-.5.7-.9.7h-1.9c-.4 0-.7.3-.8.7l-.4 2.3c-.1.4.2.7.6.7h2.2c1.5 0 2.7-1.2 2.7-2.7 0-.4-.1-.8-.2-1.2l.2-1c.1-.5.6-1 1.1-1h.8c.6 0 1.1-.5 1.1-1.1l.1-1.2s0-.1 0 0z" fill="#009CDE"/><path d="M23.1 8.2c0-.3-.2-.5-.4-.5h-1c-.8 0-1.4.6-1.5 1.4l-.4 2.3c0 .3.2.5.4.5h1.7c.8 0 1.4-.6 1.5-1.4l.2-1.2s0-.1 0-.1zm-1.8 5.9c-.1 0-.1-.1-.1-.1l.3-1.8c0-.3.3-.5.5-.5h.3c.6 0 1 .4 1 1l-.2 1.2c-.1.6-.6 1.1-1.2 1.1h-.6zM28.3 8.3c-.2-1.5-1.5-2.5-3-2.5h-5.4l-.8 4.9c0 .4.2.7.6.7h2.8l-.4 2.3c-.1.4-.5.7-.9.7H19c-.4 0-.7.3-.8.7l-.4 2.3c-.1.4.2.7.6.7h2.2c1.5 0 2.7-1.2 2.7-2.7 0-.4-.1-.8-.2-1.2l.2-1c.1-.5.6-1 1.1-1h.8c.6 0 1.1-.5 1.1-1.1l.1-1.2z" fill="#003087"/></svg>
)

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
             <div className="flex items-center gap-2">
                <VisaIcon />
                <MastercardIcon />
                <AmexIcon />
                <PayPalIcon />
            </div>
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
