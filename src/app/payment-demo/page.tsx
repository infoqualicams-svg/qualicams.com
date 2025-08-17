'use client';

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  PaymentIcons, 
  ExtendedPaymentIcons, 
  StripeStylePaymentIcons,
  CreditCardIcons,
  DigitalWalletIcons,
  VisaIcon,
  MastercardIcon,
  AmexIcon,
  DiscoverIcon,
  DinersIcon,
  UnionPayIcon,
  JCBIcon,
  MaestroIcon,
  PayPalIcon,
  ApplePayIcon,
  GooglePayIcon,
  KlarnaIcon
} from "@/components/ui/payment-icons";

export default function PaymentDemoPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-4">
                Official Payment Methods
              </h1>
              <p className="text-gray-600 text-lg">
                All payment methods from the Datatrans repository - exactly like Stripe checkout
              </p>
            </div>

            {/* Stripe Style - Matching the image */}
            <Card className="rounded-xl">
              <CardHeader>
                <CardTitle>Stripe Style Payment Icons (Like in Image)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <StripeStylePaymentIcons />
                </div>
              </CardContent>
            </Card>

            {/* Core Payment Icons */}
            <Card className="rounded-xl">
              <CardHeader>
                <CardTitle>Core Payment Icons (8 Methods - Cards + Digital Wallets)</CardTitle>
              </CardHeader>
              <CardContent>
                <PaymentIcons />
              </CardContent>
            </Card>

            {/* Credit Cards Only */}
            <Card className="rounded-xl">
              <CardHeader>
                <CardTitle>Credit Cards Only (6 Cards)</CardTitle>
              </CardHeader>
              <CardContent>
                <CreditCardIcons />
              </CardContent>
            </Card>

            {/* Digital Wallets Only */}
            <Card className="rounded-xl">
              <CardHeader>
                <CardTitle>Digital Wallets Only</CardTitle>
              </CardHeader>
              <CardContent>
                <DigitalWalletIcons />
              </CardContent>
            </Card>

            {/* Extended Payment Icons */}
            <Card className="rounded-xl">
              <CardHeader>
                <CardTitle>Extended Payment Icons (All Methods)</CardTitle>
              </CardHeader>
              <CardContent>
                <ExtendedPaymentIcons />
              </CardContent>
            </Card>

            {/* Individual Icons Grid */}
            <Card className="rounded-xl">
              <CardHeader>
                <CardTitle>All Individual Payment Icons</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                  <div className="text-center space-y-2">
                    <VisaIcon />
                    <p className="text-sm font-medium">Visa</p>
                  </div>
                  <div className="text-center space-y-2">
                    <MastercardIcon />
                    <p className="text-sm font-medium">Mastercard</p>
                  </div>
                  <div className="text-center space-y-2">
                    <AmexIcon />
                    <p className="text-sm font-medium">American Express</p>
                  </div>
                  <div className="text-center space-y-2">
                    <DiscoverIcon />
                    <p className="text-sm font-medium">Discover</p>
                  </div>
                  <div className="text-center space-y-2">
                    <DinersIcon />
                    <p className="text-sm font-medium">Diners Club</p>
                  </div>
                  <div className="text-center space-y-2">
                    <UnionPayIcon />
                    <p className="text-sm font-medium">UnionPay</p>
                  </div>
                  <div className="text-center space-y-2">
                    <JCBIcon />
                    <p className="text-sm font-medium">JCB</p>
                  </div>
                  <div className="text-center space-y-2">
                    <MaestroIcon />
                    <p className="text-sm font-medium">Maestro</p>
                  </div>
                  <div className="text-center space-y-2">
                    <PayPalIcon />
                    <p className="text-sm font-medium">PayPal</p>
                  </div>
                  <div className="text-center space-y-2">
                    <ApplePayIcon />
                    <p className="text-sm font-medium">Apple Pay</p>
                  </div>
                  <div className="text-center space-y-2">
                    <GooglePayIcon />
                    <p className="text-sm font-medium">Google Pay</p>
                  </div>
                  <div className="text-center space-y-2">
                    <KlarnaIcon />
                    <p className="text-sm font-medium">Klarna</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Usage Examples */}
            <Card className="rounded-xl">
              <CardHeader>
                <CardTitle>Usage in Different Contexts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Footer Style (All 8 Methods):</h3>
                  <PaymentIcons iconClassName="opacity-70 hover:opacity-100 transition-opacity" />
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Credit Cards Only (Traditional):</h3>
                  <CreditCardIcons iconClassName="opacity-70 hover:opacity-100 transition-opacity" />
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Digital Wallets Only (Modern):</h3>
                  <DigitalWalletIcons iconClassName="opacity-70 hover:opacity-100 transition-opacity" />
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Product Page Style:</h3>
                  <div className="bg-white p-4 border border-gray-100 rounded-xl text-center">
                    <p className="text-sm font-light text-gray-600 mb-2">Secure Payment</p>
                    <PaymentIcons className="flex items-center justify-center gap-2" iconClassName="opacity-60" />
                    <p className="text-xs text-gray-400 mt-2">SSL encrypted • PCI compliant</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Checkout Style (Large with Digital Wallets):</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <StripeStylePaymentIcons />
                  </div>
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