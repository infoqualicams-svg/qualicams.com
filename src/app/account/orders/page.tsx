
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function OrdersPage() {
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
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-6">Order History</h1>
        <Card className="rounded-xl">
          <CardHeader>
            <CardDescription>You have not placed any orders yet.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/products">Start Shopping</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
    </main>
    <Footer/>
    </>
  );
}
