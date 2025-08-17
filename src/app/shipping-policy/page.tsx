'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Package, Clock, Globe } from 'lucide-react';

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="rounded-xl shadow-sm">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-4xl md:text-5xl font-bold font-headline tracking-tight">
              Shipping Policy
            </CardTitle>
            <p className="text-gray-600 mt-4">Fast, secure, and reliable shipping worldwide</p>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none space-y-8">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Truck className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold font-headline tracking-tight">Shipping Options</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We offer multiple shipping options to meet your needs, from standard delivery to express shipping 
                for urgent orders.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Standard Shipping</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>2-5 business days</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Package className="w-4 h-4" />
                      <span>$15.00 flat rate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Truck className="w-4 h-4" />
                      <span>Free on orders $500+</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">Express Shipping</h3>
                  <ul className="space-y-2 text-green-700">
                    <li className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>1-2 business days</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Package className="w-4 h-4" />
                      <span>$25.00 flat rate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Truck className="w-4 h-4" />
                      <span>Priority handling</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold font-headline tracking-tight">Shipping Destinations</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We ship to customers worldwide. Shipping costs and delivery times may vary based on your location.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">United States</h4>
                  <p className="text-sm text-gray-600">All 50 states</p>
                  <p className="text-sm text-gray-600">2-5 business days</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Canada</h4>
                  <p className="text-sm text-gray-600">All provinces</p>
                  <p className="text-sm text-gray-600">3-7 business days</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">International</h4>
                  <p className="text-sm text-gray-600">EU, UK, AU, JP</p>
                  <p className="text-sm text-gray-600">5-10 business days</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-headline tracking-tight mb-4">Processing Time</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All orders are processed within 1-2 business days. Orders placed after 2 PM EST will be processed 
                the next business day.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Monday-Friday processing (excluding holidays)</li>
                <li>Quality inspection before shipping</li>
                <li>Secure packaging for camera equipment</li>
                <li>Tracking number provided once shipped</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-headline tracking-tight mb-4">Packaging & Protection</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We take special care in packaging all camera equipment to ensure it arrives in perfect condition.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Professional packaging materials designed for electronics</li>
                <li>Bubble wrap and foam protection for delicate components</li>
                <li>Moisture protection for all shipments</li>
                <li>Discrete packaging (no external branding)</li>
                <li>Insurance included on all shipments</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-headline tracking-tight mb-4">Order Tracking</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Once your order ships, you'll receive a tracking number via email to monitor your package's progress.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Real-time tracking updates</li>
                <li>Email notifications for key milestones</li>
                <li>SMS updates available upon request</li>
                <li>Delivery confirmation required</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-headline tracking-tight mb-4">International Shipping</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For international orders, additional customs and duties may apply, which are the responsibility of the recipient.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Customs forms completed accurately</li>
                <li>Duties and taxes calculated at destination</li>
                <li>Extended delivery times for customs processing</li>
                <li>Some restrictions may apply to certain countries</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-headline tracking-tight mb-4">Shipping Restrictions</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We cannot ship to PO boxes, APO/FPO addresses, or certain international destinations due to carrier restrictions.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Residential and business addresses only</li>
                <li>Valid street address required</li>
                <li>Some remote areas may have extended delivery times</li>
                <li>Contact us for special shipping arrangements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-headline tracking-tight mb-4">Damaged or Lost Packages</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If your package arrives damaged or is lost in transit, please contact us immediately. All shipments 
                are insured and we will work to resolve the issue quickly.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Report damage within 48 hours of delivery</li>
                <li>Photos required for damage claims</li>
                <li>Full insurance coverage on all orders</li>
                <li>Replacement or refund provided promptly</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-headline tracking-tight mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                Questions about shipping? Our customer service team is here to help.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="text-gray-700">
                  <strong>Email:</strong> info@qualicams.com<br />
                  <strong>Phone:</strong> 1-800-QUALICAMS<br />
                  <strong>Hours:</strong> Monday-Friday, 9 AM - 6 PM EST<br />
                  <strong>Emergency:</strong> info@qualicams.com
                </p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}