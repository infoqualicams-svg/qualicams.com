
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function AddressesPage() {
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
            <h1 className="text-3xl font-bold font-headline">Manage Addresses</h1>
            <Button>Add New Address</Button>
         </div>

        <div className="grid md:grid-cols-2 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Default Shipping Address</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>John Doe</p>
                    <p>123 Main St</p>
                    <p>Anytown, USA 12345</p>
                </CardContent>
                <CardFooter className="gap-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">Remove</Button>
                </CardFooter>
            </Card>
        </div>

      </div>
    </div>
    </main>
    <Footer/>
    </>
  );
}
