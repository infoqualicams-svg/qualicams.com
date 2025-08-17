
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { VisaIcon } from "@/components/ui/payment-icons";

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
            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">Payment Methods</h1>
            <Button>Add New Card</Button>
         </div>

        <div className="space-y-4">
                    <Card className="rounded-xl">
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
