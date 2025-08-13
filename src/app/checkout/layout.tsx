
import Link from 'next/link';
import { Camera } from 'lucide-react';

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background text-foreground">
        <header className="border-b bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                     <div className="flex">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl font-headline">
                          <Camera className="h-6 w-6 text-primary" />
                          ReFocus
                        </Link>
                     </div>
                </div>
            </div>
        </header>
      <main>{children}</main>
    </div>
  );
}

    