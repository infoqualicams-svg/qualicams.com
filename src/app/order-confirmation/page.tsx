'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Package, CreditCard, Truck } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function OrderConfirmationContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-12 flex items-center justify-center">
        <Card className="w-full max-w-lg text-center p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg">
          <CardHeader>
            <div className="mx-auto bg-green-100 rounded-2xl p-4 w-fit">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>
            <CardTitle className="mt-4 text-3xl font-bold">Payment Successful!</CardTitle>
            <CardDescription className="mt-2 text-gray-600">
              Thank you for your purchase. Your order has been confirmed and is being processed.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {sessionId && (
              <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                <p className="text-sm text-gray-600 mb-2">Order Reference:</p>
                <p className="font-mono text-xs text-gray-800 break-all">{sessionId}</p>
              </div>
            )}

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Package className="w-4 h-4 text-blue-600" />
                <span>Order confirmation email sent</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <CreditCard className="w-4 h-4 text-green-600" />
                <span>Payment processed securely</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Truck className="w-4 h-4 text-purple-600" />
                <span>Ships within 1-2 business days</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button asChild className="bg-black text-white hover:bg-gray-900 rounded-xl">
                <Link href="/products">Continue Shopping</Link>
              </Button>
              <Button variant="outline" asChild className="border-black text-black hover:bg-black hover:text-white rounded-xl">
                <Link href="/account/orders">View Orders</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-black"></div>
      </div>
    }>
      <OrderConfirmationContent />
    </Suspense>
  );
}