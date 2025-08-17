import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-white">
        <div className="w-full py-20 md:py-28 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">PRIVACY POLICY</h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy is paramount. We've built our practices around transparency, security, and your control over your personal information.
            </p>
            <div className="mt-8 text-gray-400 text-sm">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="border-l-4 border-black pl-8">
                <h2 className="text-2xl font-bold font-headline tracking-wide uppercase mb-6">Information We Collect</h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    At QUALICAMS, we collect information you provide directly to us when you create an account, 
                    make a purchase, contact us, or otherwise engage with our services.
                  </p>
                  <div className="bg-gray-50 p-6 border border-gray-200">
                    <h3 className="font-semibold text-black mb-4">Data Categories:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span>Personal information (name, email address, phone number)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span>Payment information (credit card details, billing address)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span>Shipping and delivery information</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span>Communication preferences and history</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-black pl-8">
                <h2 className="text-2xl font-bold font-headline tracking-wide uppercase mb-6">How We Use Your Information</h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>We use the information we collect to provide, maintain, and improve our services:</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 border-2 border-black flex items-center justify-center text-xs font-bold">01</div>
                        <span>Process transactions and send related information</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 border-2 border-black flex items-center justify-center text-xs font-bold">02</div>
                        <span>Send technical notices and administrative messages</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 border-2 border-black flex items-center justify-center text-xs font-bold">03</div>
                        <span>Respond to comments, questions, and support requests</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 border-2 border-black flex items-center justify-center text-xs font-bold">04</div>
                        <span>Communicate about products, services, and events</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 border-2 border-black flex items-center justify-center text-xs font-bold">05</div>
                        <span>Monitor and analyze trends and usage patterns</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 border-2 border-black flex items-center justify-center text-xs font-bold">06</div>
                        <span>Detect, investigate, and prevent fraudulent activity</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-black pl-8">
                <h2 className="text-2xl font-bold font-headline tracking-wide uppercase mb-6">Information Sharing</h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg font-medium text-black">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent.
                  </p>
                  <p>Limited exceptions include:</p>
                  <div className="bg-black text-white p-6">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                        <span>Service providers who assist in operating our website and conducting business</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                        <span>When required by law or to protect our rights and safety</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                        <span>In connection with a merger, acquisition, or sale of assets</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-black pl-8">
                <h2 className="text-2xl font-bold font-headline tracking-wide uppercase mb-6">Data Security</h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    We implement industry-standard security measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction. Our security practices include 
                    encryption, secure data transmission, and regular security assessments.
                  </p>
                  <div className="bg-gray-50 p-6 border border-gray-200">
                    <p className="text-sm text-gray-500">
                      <strong>Important Note:</strong> While we strive to protect your personal information, 
                      no method of transmission over the internet or electronic storage is 100% secure. 
                      We cannot guarantee absolute security.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-black pl-8">
                <h2 className="text-2xl font-bold font-headline tracking-wide uppercase mb-6">Your Rights</h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>You have the following rights regarding your personal information:</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 border-2 border-black"></div>
                        <span className="font-medium">Access and update your personal information</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 border-2 border-black"></div>
                        <span className="font-medium">Request deletion of your personal information</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 border-2 border-black"></div>
                        <span className="font-medium">Opt out of marketing communications</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 border-2 border-black"></div>
                        <span className="font-medium">Request a copy of your data</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black text-white p-12 text-center">
                <h2 className="text-2xl font-bold font-headline tracking-wide uppercase mb-6">Contact Us</h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Questions about this Privacy Policy? We're committed to transparency and are here to help 
                  you understand how we protect your information.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:info@qualicams.com" 
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-colors font-semibold"
                  >
                    INFO@QUALICAMS.COM
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}