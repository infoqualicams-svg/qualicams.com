
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { CheckCircle } from "lucide-react";

export default function ReturnsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold font-headline">Return Policy</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                We stand by our products with a 30-Day Happiness Guarantee.
              </p>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle>Our 30-Day Happiness Guarantee</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-muted-foreground">
                    <p>
                        We want you to be thrilled with your purchase from ReFocus. If you are not 100% satisfied, you can return your item(s) for a full refund within 30 days of the delivery date. No questions asked.
                    </p>
                    <div>
                        <h4 className="font-semibold text-foreground mb-2">Conditions for Return:</h4>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                <span>The item must be in the same condition that you received it, along with all original accessories (chargers, batteries, etc.).</span>
                            </li>
                             <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                <span>Returns must be initiated within 30 days of the delivery date.</span>
                            </li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-semibold text-foreground mb-2">How to Start a Return:</h4>
                        <p>
                            To start a return, please contact our support team at <a href="mailto:support@refocus.com" className="text-primary underline">support@refocus.com</a> with your order number and the reason for your return. We will provide you with a prepaid shipping label and instructions on how to send your item back to us.
                        </p>
                    </div>
                     <div>
                        <h4 className="font-semibold text-foreground mb-2">Refunds</h4>
                        <p>
                           Once we receive and inspect your return, we will process your refund to the original payment method within 5-7 business days.
                        </p>
                    </div>
                    <div className="text-center pt-4">
                        <Button asChild>
                            <a href="/contact">Contact Support to Start a Return</a>
                        </Button>
                    </div>
                </CardContent>
            </Card>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
