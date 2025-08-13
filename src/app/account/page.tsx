
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";

export default function AccountPage() {
  return (
    <>
    <Header/>
    <main className="flex-grow">
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold font-headline">My Account</h1>
          <p className="text-muted-foreground mt-2">Manage your account settings and view your order history.</p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>You have not placed any orders yet.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <Link href="/products">Start Shopping</Link>
                </Button>
              </CardContent>
            </Card>
             <Card>
              <CardHeader>
                <CardTitle>Account Details</CardTitle>
                 <CardDescription>Review and update your personal information.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div>
                    <h4 className="font-semibold">Name</h4>
                    <p className="text-muted-foreground">John Doe</p>
                 </div>
                 <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">john.doe@example.com</p>
                 </div>
                 <Button variant="outline" asChild>
                    <Link href="/account/profile">Edit Profile</Link>
                 </Button>
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-1">
             <Card>
               <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
               <CardContent className="flex flex-col space-y-2">
                 <Button variant="ghost" className="justify-start" asChild><Link href="/account/orders">Order History</Link></Button>
                 <Button variant="ghost" className="justify-start" asChild><Link href="/account/addresses">Manage Addresses</Link></Button>
                 <Button variant="ghost" className="justify-start" asChild><Link href="/account/payment-methods">Payment Methods</Link></Button>
                 <Button variant="destructive" className="justify-start">Log Out</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </main>
    <Footer/>
    </>
  );
}
