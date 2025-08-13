
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const VisaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24" {...props}><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#3A424A" /><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFF" /><path d="M12.9 6.6c0-.5-.3-.8-.8-.8H8.3c-.4 0-.7.3-.7.6 0 .2.1.4.3.5l2.1 2.4-2.5 4.3c-.2.3-.2.5 0 .6.1.1.3.2.5.2h1.4c.4 0 .7-.2.9-.6l1.2-2.3 1.1-2.2c-.1-.1-.1-.2-.1-.4zm-3.9 5.2l-1.1-2h-.1l-1.7 3.5c-.1.3-.4.5-.7.5H4c-.5 0-.8-.3-.8-.7s.3-.8.8-.8l1.4-.2c.5 0 .8-.3.9-1l1.5-6.4c.1-.5.5-.8 1-.8h2.9c.5 0 .8.3.8.8s-.3.8-.8.8H9.3l-1.1 4.7h.1l1.7-2.3c.1-.2.2-.4.2-.6 0-.5-.3-.8-.8-.8H7.4c-.4 0-.7.3-.7.6s.3.8.8.8l.6.1.3 1.2zM22.6 6.6c0-.5-.3-.8-.8-.8h-3.4c-.5 0-.8.3-.8.8s.3.8.8.8h.9l-2.2 6.8c-.1.4-.4.6-.8.6H15c-.5 0-.8.3-.8.8s.3.8.8.8h3.4c.5 0 .8-.3.8-.8s-.3-.8-.8-.8h-.9l2.2-6.8c.1-.4.4-.6.8-.6h1.4c.5 0 .8-.3.8-.8zM31.2 6.6c0-.5-.3-.8-.8-.8H27c-.5 0-.8.3-.8.8s.3.8.8.8h.7l-1.3 3.4-1.6-3.4H24c-.5 0-.8.3-.8.8s.3.8.8.8h.6l1.5 3.4-1.5 3.4h-.6c-.5 0-.8.3-.8.8s.3.8.8.8h2.8c.5 0 .8-.3.8-.8l-.1-1.2.6-1.2c.2-.4.2-.6 0-.8l-1.5-2.8 1.9-4h.6c.5 0 .8-.3.8-.8z" fill="#1A1F71" /></svg>
)

export default function PaymentMethodsPage() {
  return (
    <>
    <Header/>
    <main className="flex-grow">
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
         <div className="mb-6">
            <Link href="/account" className="text-sm text-primary hover:underline">
                &larr; Back to Account
            </Link>
         </div>
         <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold font-headline">Payment Methods</h1>
            <Button>Add New Card</Button>
         </div>

        <div className="space-y-4">
            <Card>
                <CardContent className="p-4 flex justify-between items-center">
                   <div className="flex items-center gap-4">
                        <VisaIcon/>
                        <div>
                            <p className="font-semibold">Visa ending in 1234</p>
                            <p className="text-sm text-muted-foreground">Expires 08/2026</p>
                        </div>
                   </div>
                   <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">Remove</Button>
                </CardContent>
            </Card>
        </div>

      </div>
    </div>
    </main>
    <Footer/>
    </>
  );
}
