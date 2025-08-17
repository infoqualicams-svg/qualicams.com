
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

const faqs = [
    {
        question: "What does 'refurbished' mean?",
        answer: "Refurbished means the product has been returned, inspected, repaired if necessary, and tested to meet original specifications. It's a fully functional product at a lower price."
    },
    {
        question: "What condition are the products in?",
        answer: "We have three condition grades: 'Excellent' (like new), 'Good' (light cosmetic wear), and 'Fair' (visible signs of use). All are 100% functional. Each product page details the specific condition."
    },
    {
        question: "What is your warranty policy?",
        answer: "We offer a warranty on all our products, ranging from 3 months to 1 year depending on the item's condition. The specific warranty period is listed on each product page."
    },
    {
        question: "What is your return policy?",
        answer: "We offer a 30-day happiness guarantee. If you're not satisfied with your purchase for any reason, you can return it for a full refund within 30 days. You can find more details on our Returns page."
    },
     {
        question: "How long does shipping take?",
        answer: "We offer free and fast shipping on all orders. Typically, orders are processed within 1 business day and delivered within 3-5 business days."
    }
]


export default function FaqPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/80 text-sm mb-8">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              INSTANT ANSWERS • EXPERT GUIDANCE
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-headline tracking-tight leading-tight">
              FREQUENTLY
              <br />
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">ASKED</span>
              <br />
              QUESTIONS
            </h1>
            <p className="mt-8 text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Quick answers to common questions about our refurbished equipment.
              <br />
              <span className="text-white font-medium">Professional guidance. Transparent policies. Clear information.</span>
            </p>
          </div>
        </section>

        <section className="w-full py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-4">KNOWLEDGE BASE</h2>
                <p className="text-gray-600 text-lg">Can't find what you're looking for? Contact our support team directly.</p>
              </div>
              
              <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 bg-gray-50 transition-all duration-300 hover:border-black hover:shadow-lg">
                      <details className="group">
                        <summary className="flex items-center justify-between p-6 cursor-pointer">
                          <h3 className="text-lg font-bold text-black group-open:text-black">{faq.question}</h3>
                          <div className="w-8 h-8 border-2 border-black flex items-center justify-center group-open:rotate-45 transition-transform">
                            <div className="w-4 h-0.5 bg-black absolute"></div>
                            <div className="w-0.5 h-4 bg-black absolute group-open:opacity-0 transition-opacity"></div>
                          </div>
                        </summary>
                        <div className="px-6 pb-6">
                          <div className="pt-4 border-t border-gray-200">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      </details>
                    </div>
                  ))}
              </div>

              <div className="mt-16 bg-black text-white p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold font-headline tracking-tight mb-4 uppercase">STILL NEED HELP?</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Our support team is ready to assist with any questions not covered here. 
                  Professional guidance from photography equipment experts.
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
