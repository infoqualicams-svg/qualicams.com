'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="rounded-xl shadow-sm">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-4xl md:text-5xl font-bold font-headline tracking-tight">
              Terms of Service
            </CardTitle>
            <p className="text-gray-600 mt-4">Last updated: December 2024</p>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold font-headline tracking-tight mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using QualiCams ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-headline tracking-tight mb-4">2. Product Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All products sold on QualiCams are certified refurbished camera equipment. We strive to provide accurate product descriptions, 
                specifications, and images. However, we do not warrant that product descriptions or other content is accurate, complete, 
                reliable, current, or error-free.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>All cameras undergo our rigorous 52-point inspection process</li>
                <li>Products include a 6-month QualiCams warranty</li>
                <li>Cosmetic condition is clearly described for each item</li>
                <li>All essential accessories are included unless otherwise noted</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-headline tracking-tight mb-4">3. Pricing and Payment</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All prices are displayed in USD and are subject to change without notice. We reserve the right to modify or discontinue 
                products at any time. Payment is processed securely through Stripe.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Prices include our refurbishment and certification costs</li>
                <li>Tax will be calculated based on your shipping address</li>
                <li>We accept all major credit cards and digital payment methods</li>
                <li>Payment is required at the time of purchase</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-headline tracking-tight mb-4">4. Shipping and Delivery</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We offer shipping to select countries worldwide. Shipping costs and delivery times vary based on your location and 
                selected shipping method.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Standard shipping: 2-5 business days</li>
                <li>Express shipping: 1-2 business days</li>
                <li>Free shipping on orders over $500</li>
                <li>International shipping available to select countries</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-headline tracking-tight mb-4">5. Returns and Refunds</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We offer a 30-day return policy on all products. Items must be returned in their original condition with all 
                included accessories and packaging.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>30-day return window from delivery date</li>
                <li>Items must be in original condition</li>
                <li>Original packaging and accessories required</li>
                <li>Refunds processed within 5-7 business days</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-headline tracking-tight mb-4">6. Warranty</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All products come with our comprehensive 6-month QualiCams warranty covering defects in materials and workmanship. 
                This warranty is in addition to any remaining manufacturer warranty.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>6-month comprehensive warranty included</li>
                <li>Covers all functional defects and malfunctions</li>
                <li>Free repair or replacement at our discretion</li>
                <li>Warranty void if product is damaged by misuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-headline tracking-tight mb-4">7. User Accounts</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you create an account with us, you must provide accurate and complete information. You are responsible for 
                safeguarding your account credentials.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide accurate registration information</li>
                <li>Maintain the security of your password</li>
                <li>Notify us of any unauthorized account access</li>
                <li>You are responsible for all activities under your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-headline tracking-tight mb-4">8. Prohibited Uses</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may not use our service for any unlawful purpose or to solicit others to perform unlawful acts. You may not 
                violate any international, federal, provincial, or state regulations, rules, or laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-headline tracking-tight mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                In no case shall QualiCams, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, 
                service providers, or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, 
                special, or consequential damages of any kind.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-headline tracking-tight mb-4">10. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="text-gray-700">
                  <strong>Email:</strong> info@qualicams.com<br />
                  <strong>Phone:</strong> 1-800-QUALICAMS<br />
                  <strong>Address:</strong> 123 Camera Street, Photo City, PC 12345
                </p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}