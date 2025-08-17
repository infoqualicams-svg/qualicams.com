'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cookie, Settings, BarChart, Target } from 'lucide-react';

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="rounded-xl shadow-sm">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-4xl md:text-5xl font-bold font-headline tracking-tight">
              Cookie Policy
            </CardTitle>
            <p className="text-gray-600 mt-4">How we use cookies to improve your experience</p>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none space-y-8">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Cookie className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold font-headline tracking-tight">What Are Cookies?</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies are small text files that are stored on your device when you visit our website. They help us 
                provide you with a better browsing experience by remembering your preferences and understanding how you use our site.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Cookies cannot harm your device and do not contain personal information unless you explicitly provide it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-headline tracking-tight mb-4">Types of Cookies We Use</h2>
              
              <div className="grid gap-6 mt-6">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Settings className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-blue-900">Essential Cookies</h3>
                  </div>
                  <p className="text-blue-700 mb-3">
                    These cookies are necessary for the website to function properly. They enable core functionality 
                    such as security, network management, and accessibility.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-blue-700 text-sm">
                    <li>Authentication and login status</li>
                    <li>Shopping cart contents</li>
                    <li>Security tokens</li>
                    <li>Load balancing</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <div className="flex items-center gap-3 mb-3">
                    <BarChart className="w-5 h-5 text-green-600" />
                    <h3 className="text-lg font-semibold text-green-900">Analytics Cookies</h3>
                  </div>
                  <p className="text-green-700 mb-3">
                    These cookies help us understand how visitors interact with our website by collecting and 
                    reporting information anonymously.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-green-700 text-sm">
                    <li>Page views and navigation patterns</li>
                    <li>Time spent on pages</li>
                    <li>Popular products and categories</li>
                    <li>Error tracking and performance monitoring</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="w-5 h-5 text-purple-600" />
                    <h3 className="text-lg font-semibold text-purple-900">Marketing Cookies</h3>
                  </div>
                  <p className="text-purple-700 mb-3">
                    These cookies are used to deliver advertisements that are relevant to you and your interests. 
                    They also help limit the number of times you see an ad.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-purple-700 text-sm">
                    <li>Personalized product recommendations</li>
                    <li>Targeted advertising</li>
                    <li>Social media integration</li>
                    <li>Conversion tracking</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Settings className="w-5 h-5 text-orange-600" />
                    <h3 className="text-lg font-semibold text-orange-900">Preference Cookies</h3>
                  </div>
                  <p className="text-orange-700 mb-3">
                    These cookies remember your preferences and settings to provide you with a personalized experience.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-orange-700 text-sm">
                    <li>Language preferences</li>
                    <li>Currency settings</li>
                    <li>Display preferences</li>
                    <li>Recent searches and viewed products</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-headline tracking-tight mb-4">Third-Party Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We also use cookies from trusted third-party services to enhance your experience:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Google Analytics:</strong> To understand website usage and improve our services</li>
                <li><strong>Stripe:</strong> For secure payment processing during checkout</li>
                <li><strong>Social Media:</strong> For social sharing buttons and embedded content</li>
                <li><strong>Customer Support:</strong> For live chat functionality and support tools</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-headline tracking-tight mb-4">Cookie Duration</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies have different lifespans depending on their purpose:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device for a set period (up to 2 years)</li>
                <li><strong>Essential Cookies:</strong> Active only during your session</li>
                <li><strong>Analytics Cookies:</strong> Typically last 2 years</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-headline tracking-tight mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have control over which cookies you accept. You can manage your preferences through:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3">Browser Settings</h4>
                <p className="text-gray-700 mb-3">
                  Most browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li>Block all cookies</li>
                  <li>Block third-party cookies only</li>
                  <li>Delete existing cookies</li>
                  <li>Receive notifications when cookies are set</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl mt-4">
                <h4 className="font-semibold text-blue-900 mb-3">Cookie Consent Banner</h4>
                <p className="text-blue-700">
                  When you first visit our site, you'll see a cookie consent banner where you can choose which 
                  types of cookies to accept. You can change these preferences at any time.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-headline tracking-tight mb-4">Impact of Disabling Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While you can disable cookies, please note that this may affect your browsing experience:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You may need to re-enter information on each visit</li>
                <li>Some website features may not work properly</li>
                <li>Your shopping cart may not persist between sessions</li>
                <li>You may see less relevant advertisements</li>
                <li>Website performance analytics will be affected</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-headline tracking-tight mb-4">Updates to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, 
                or our business practices. We will notify you of any significant changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-headline tracking-tight mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have questions about our use of cookies, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="text-gray-700">
                  <strong>Email:</strong> info@qualicams.com<br />
                  <strong>Phone:</strong> 1-800-QUALICAMS<br />
                  <strong>Address:</strong> 123 Camera Street, Photo City, PC 12345<br />
                  <strong>Data Protection Officer:</strong> info@qualicams.com
                </p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}