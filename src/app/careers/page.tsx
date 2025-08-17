import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Heart, Zap, Target } from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness programs"
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Flexible hours, remote work options, and unlimited PTO policy"
  },
  {
    icon: Zap,
    title: "Growth & Learning",
    description: "$2,000 annual learning budget and mentorship programs"
  },
  {
    icon: Target,
    title: "Impact & Purpose",
    description: "Work on meaningful projects that make photography more accessible"
  },
  {
    icon: Users,
    title: "Great Team",
    description: "Collaborative culture with passionate photographers and tech enthusiasts"
  }
];

const openings = [
  {
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    description: "Join our engineering team to build the future of refurbished electronics commerce."
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Remote / San Francisco",
    type: "Full-time",
    description: "Drive product strategy and roadmap for our marketplace platform."
  },
  {
    title: "Quality Assurance Specialist",
    department: "Operations",
    location: "Austin, TX",
    type: "Full-time",
    description: "Ensure every device meets our rigorous 52-point quality standards."
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote",
    type: "Full-time",
    description: "Help our customers succeed and build lasting relationships."
  },
  {
    title: "Marketing Coordinator",
    department: "Marketing",
    location: "Remote / San Francisco",
    type: "Full-time",
    description: "Create compelling content and campaigns to grow our photographer community."
  }
];

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-headline">
              Join Our Mission
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
              Help us make quality photography equipment accessible to everyone while building a more sustainable future. 
              We're looking for passionate people who share our vision.
            </p>
          </div>
        </section>

        {/* Culture Section */}
        <section className="w-full py-12 md:py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Why Work at QualiCams?
              </h2>
              <p className="text-lg text-muted-foreground">
                We're more than a company – we're a community of photographers, technologists, and dreamers 
                working together to democratize photography.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="text-center p-6">
                  <div className="flex justify-center items-center mb-4">
                    <div className="bg-primary/10 text-primary rounded-full p-3">
                      <benefit.icon className="w-6 h-6"/>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="w-full py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-4">
                  Open Positions
                </h2>
                <p className="text-lg text-muted-foreground">
                  We're always looking for talented people to join our team. 
                  Don't see the perfect role? We'd still love to hear from you.
                </p>
              </div>
              
              <div className="space-y-6">
                {openings.map((job, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl">{job.title}</CardTitle>
                          <CardDescription className="flex items-center gap-4 mt-2">
                            <span className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {job.department}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </span>
                            <Badge variant="secondary">{job.type}</Badge>
                          </CardDescription>
                        </div>
                        <Button asChild>
                          <Link href="/contact">Apply Now</Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{job.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* No Perfect Role CTA */}
              <Card className="mt-12 text-center p-8 bg-gray-50 border-gray-200 rounded-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Don't See the Perfect Role?</CardTitle>
                  <CardDescription className="text-lg">
                    We're always interested in connecting with talented individuals who share our passion.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild size="lg">
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-12 md:py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
                              <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight mb-8">
                Our Commitment to Diversity
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We believe that diverse teams build better products. QualiCams is committed to creating an 
                inclusive environment where everyone can do their best work, regardless of background, 
                identity, or experience level.
              </p>
              <p className="text-lg text-muted-foreground">
                We are an equal opportunity employer and welcome applications from all qualified candidates.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}