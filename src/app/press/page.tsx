import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Badge } from "@/components/ui/badge";
import { Calendar, Download, ExternalLink } from "lucide-react";
import Link from "next/link";

const pressReleases = [
  {
    title: "QualiCams Raises $15M Series A to Expand Refurbished Electronics Marketplace",
    date: "2024-01-15",
    category: "Funding",
    excerpt: "Funding will accelerate growth and expand into new product categories while maintaining commitment to sustainability.",
    featured: true
  },
  {
    title: "QualiCams Partners with Major Camera Manufacturers for Trade-In Program",
    date: "2023-11-20",
    category: "Partnership",
    excerpt: "New partnership allows customers to trade in old equipment directly through manufacturer channels."
  },
  {
    title: "Company Reaches Milestone of 50,000 Devices Refurbished",
    date: "2023-09-10",
    category: "Milestone",
    excerpt: "Achievement represents significant environmental impact and demonstrates growing demand for sustainable electronics."
  },
  {
    title: "QualiCams Launches AI-Powered Quality Inspection System",
    date: "2023-07-05",
    category: "Product",
    excerpt: "New technology improves inspection accuracy and reduces processing time for refurbished devices."
  },
  {
    title: "CEO Featured in Forbes 30 Under 30 for Retail & E-commerce",
    date: "2023-05-15",
    category: "Recognition",
    excerpt: "Recognition highlights innovative approach to sustainable electronics commerce."
  }
];

const mediaKit = [
  {
    title: "Company Logo Pack",
    description: "High-resolution logos in various formats (PNG, SVG, EPS)",
    type: "ZIP"
  },
  {
    title: "Brand Guidelines",
    description: "Complete brand identity guidelines and usage instructions",
    type: "PDF"
  },
  {
    title: "Company Fact Sheet",
    description: "Key company information, statistics, and leadership bios",
    type: "PDF"
  },
  {
    title: "Product Images",
    description: "High-quality product photography and lifestyle images",
    type: "ZIP"
  }
];

const awards = [
  "2024 - Best Sustainable E-commerce Platform - Green Tech Awards",
  "2023 - Startup of the Year - Austin Business Journal",
  "2023 - Excellence in Customer Service - E-commerce Association",
  "2022 - Best Refurbishment Process - Electronics Recycling Awards"
];

export default function PressPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-headline">
              Press & Media
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
              Latest news, press releases, and media resources from QualiCams. 
              Making quality photography equipment accessible while reducing electronic waste.
            </p>
          </div>
        </section>

        {/* Press Releases */}
        <section className="w-full py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
                              <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-8">Latest News</h2>
              
              <div className="space-y-6">
                {pressReleases.map((release, index) => (
                  <Card key={index} className={`hover:shadow-lg transition-shadow ${release.featured ? 'border-primary/20 bg-primary/5' : ''}`}>
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant={release.featured ? "default" : "secondary"}>
                              {release.category}
                            </Badge>
                            {release.featured && (
                              <Badge variant="outline">Featured</Badge>
                            )}
                          </div>
                          <CardTitle className="text-xl mb-2">{release.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2 text-sm">
                            <Calendar className="w-4 h-4" />
                            {new Date(release.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </CardDescription>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/contact">
                            Read More
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{release.excerpt}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Media Kit */}
        <section className="w-full py-12 md:py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
                              <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-8 text-center">Media Kit</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {mediaKit.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          <CardDescription>{item.description}</CardDescription>
                        </div>
                        <Badge variant="outline">{item.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" size="sm" className="w-full rounded-xl" asChild>
                        <Link href="/contact">
                          <Download className="w-4 h-4 mr-2" />
                          Request Download
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="text-center p-8 rounded-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Need Something Else?</CardTitle>
                  <CardDescription className="text-lg">
                    Looking for interviews, additional materials, or have other media inquiries?
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild size="lg">
                    <Link href="mailto:info@qualicams.com">Contact Our Press Team</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="w-full py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
                              <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-8 text-center">
                Awards & Recognition
              </h2>
              
              <Card>
                <CardContent className="p-8">
                  <div className="grid gap-4">
                    {awards.map((award, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-lg">{award}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-12 md:py-20 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
                              <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-4">
                Media Contact
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                For press inquiries, interview requests, or additional information, 
                please contact our communications team.
              </p>
              <div className="space-y-4">
                <div>
                  <strong>Sarah Chen</strong><br />
                  <span className="text-muted-foreground">Head of Communications</span><br />
                  <a href="mailto:info@qualicams.com" className="text-primary underline">info@qualicams.com</a><br />
                  <span className="text-muted-foreground">(555) 123-4567</span>
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