
'use client';

import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const { user, logout, loading } = useAuth();
  const router = useRouter();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  // Show loading state
  if (loading) {
    return (
      <>
        <Header/>
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-gray-500">Loading...</p>
            </div>
          </div>
        </main>
        <Footer/>
      </>
    );
  }

  // Show nothing while redirecting
  if (!user) {
    return null;
  }
  return (
    <>
    <Header/>
    <main className="flex-grow">
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">
            Welcome back, {user.displayName || 'Customer'}!
          </h1>
          <p className="text-muted-foreground mt-2">
            {user.email} • Manage your account settings and view your order history.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
                    <Card className="rounded-xl">
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
                     <Card className="rounded-xl">
          <CardHeader>
            <CardTitle>Account Details</CardTitle>
            <CardDescription>Review and update your personal information.</CardDescription>
          </CardHeader>
              <CardContent className="space-y-4">
                 <div>
                    <h4 className="font-semibold">Name</h4>
                    <p className="text-muted-foreground">{user.displayName || 'Not set'}</p>
                 </div>
                 <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">{user.email}</p>
                 </div>
                 <div>
                    <h4 className="font-semibold">Member Since</h4>
                    <p className="text-muted-foreground">
                      {user.metadata.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : 'Recently'}
                    </p>
                 </div>
                 <Button variant="outline" asChild>
                    <Link href="/account/profile">Edit Profile</Link>
                 </Button>
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-1">
                     <Card className="rounded-xl">
          <CardHeader>
            <CardTitle>Actions</CardTitle>
          </CardHeader>
               <CardContent className="flex flex-col space-y-2">
                 <Button variant="ghost" className="justify-start" asChild><Link href="/account/orders">Order History</Link></Button>
                 <Button variant="ghost" className="justify-start" asChild><Link href="/account/addresses">Manage Addresses</Link></Button>
                 <Button variant="ghost" className="justify-start" asChild><Link href="/account/payment-methods">Payment Methods</Link></Button>
                 <Button variant="destructive" className="justify-start" onClick={logout}>Log Out</Button>
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
