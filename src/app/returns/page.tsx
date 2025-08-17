
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
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/80 text-sm mb-8">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              30-DAY GUARANTEE • NO QUESTIONS ASKED
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-headline tracking-tight leading-tight">
              RETURN
              <br />
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">POLICY</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Complete satisfaction guaranteed with our transparent return process.
              <br />
              <span className="text-white font-medium">Simple process. Full refunds. Professional service.</span>
            </p>
          </div>
        </section>

        <section className="w-full py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="border-l-4 border-black pl-8 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-6">30-DAY HAPPINESS GUARANTEE</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We want you to be completely satisfied with your purchase from QUALICAMS. If you are not 100% satisfied, 
                  you can return your item(s) for a full refund within 30 days of the delivery date. No questions asked.
                </p>
              </div>

              <div className="space-y-12">
                <div className="border-l-4 border-black pl-8">
                  <h3 className="text-2xl md:text-3xl font-bold font-headline tracking-tight mb-6 uppercase">CONDITIONS FOR RETURN</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-6">
                      <div className="w-8 h-8 border-2 border-black flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-black" />
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        The item must be in the same condition that you received it, along with all original accessories (chargers, batteries, etc.).
                      </p>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-8 h-8 border-2 border-black flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-black" />
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Returns must be initiated within 30 days of the delivery date.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-black pl-8">
                  <h3 className="text-2xl md:text-3xl font-bold font-headline tracking-tight mb-6 uppercase">HOW TO START A RETURN</h3>
                  <div className="bg-gray-50 p-8 border border-gray-200">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      To start a return, please contact our support team at{" "}
                      <a href="mailto:info@qualicams.com" className="font-semibold text-black underline">
                        info@qualicams.com
                      </a>{" "}
                      with your order number and the reason for your return. We will provide you with a prepaid shipping 
                      label and instructions on how to send your item back to us.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1 p-4 border border-black">
                        <div className="font-semibold text-black mb-2">STEP 1</div>
                        <div className="text-sm text-gray-600">Contact support with order details</div>
                      </div>
                      <div className="flex-1 p-4 border border-black">
                        <div className="font-semibold text-black mb-2">STEP 2</div>
                        <div className="text-sm text-gray-600">Receive prepaid shipping label</div>
                      </div>
                      <div className="flex-1 p-4 border border-black">
                        <div className="font-semibold text-black mb-2">STEP 3</div>
                        <div className="text-sm text-gray-600">Ship item using our label</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-black pl-8">
                  <h3 className="text-2xl md:text-3xl font-bold font-headline tracking-tight mb-6 uppercase">REFUNDS</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Once we receive and inspect your return, we will process your refund to the original payment method 
                    within 5-7 business days. You will receive email confirmation at each step of the process.
                  </p>
                </div>
              </div>

              <div className="mt-16 bg-black text-white p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold font-headline tracking-tight mb-4 uppercase">READY TO START A RETURN?</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Our support team is ready to process your return quickly and efficiently. 
                  Professional service with complete transparency.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-colors font-semibold"
                  >
                    CONTACT SUPPORT
                  </a>
                  <a 
                    href="mailto:info@qualicams.com" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-black hover:bg-gray-100 transition-colors font-semibold"
                  >
                    EMAIL DIRECTLY
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
