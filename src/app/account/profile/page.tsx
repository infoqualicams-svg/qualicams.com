
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function ProfilePage() {
  return (
    <>
    <Header/>
    <main className="flex-grow">
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
         <div className="mb-6">
            <Link href="/account" className="text-sm text-primary hover:underline">
                &larr; Back to Account
            </Link>
         </div>
        <Card>
          <CardHeader>
            <CardTitle>Edit Profile</CardTitle>
            <CardDescription>Update your personal information and password.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
                <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="John Doe"/>
                </div>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com"/>
                </div>
                 <Button>Save Changes</Button>
            </div>
           
            <Separator />

            <div className="space-y-4">
                 <h3 className="font-semibold">Change Password</h3>
                 <div>
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password"/>
                </div>
                <div>
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password"/>
                </div>
                <Button variant="outline">Update Password</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </main>
    <Footer/>
    </>
  );
}
