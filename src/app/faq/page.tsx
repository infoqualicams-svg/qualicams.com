
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
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold font-headline">Frequently Asked Questions</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Find quick answers to common questions below. If you can't find what you're looking for, please don't hesitate to contact us.
              </p>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                     <AccordionItem key={index} value={`item-${index + 1}`}>
                        <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
