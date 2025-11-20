import { Check, Info, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PricingSection } from "@/components/pricing/PricingSection";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const tiers = [
  {
    name: "Free",
    price: {
      monthly: "Free",
      yearly: "Free",
    },
    description: "All the essentials to get you started, at no cost.",
    features: [
      "List unlimited events",
      "Ticketing & registration",
      "1 organizer seat",
      "Marketing & communication tools",
      "Online help center",
    ],
    cta: "Get Started",
    ctaVariant: "outline",
    fee: "Free for free events",
  },
  {
    name: "Pro",
    price: {
      monthly: "$29",
      yearly: "$290",
    },
    description: "For professionals who require more power and flexibility.",
    features: [
      "Everything in Free, plus:",
      "Custom branding & checkout",
      "Multiple ticket types",
      "Up to 5 organizer seats",
      "Email & chat support",
      "Advanced analytics",
    ],
    cta: "Start Your Pro Trial",
    ctaVariant: "default",
    featured: true,
    fee: "From 3.5% + $0.59 per ticket",
  },
  {
    name: "Enterprise",
    price: {
      monthly: "Custom",
      yearly: "Custom",
    },
    description: "For large-scale events and corporate needs.",
    features: [
      "Everything in Pro, plus:",
      "Unlimited seats",
      "Corporate dashboard & tools",
      "Sponsor marketplace access",
      "API access & integrations",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    ctaVariant: "outline",
    fee: "Custom pricing",
  },
];

const faqs = [
    {
        question: "What if my event is free?",
        answer: "If your event is free, there are no fees to publish on TrekTribe and no Ticketing Fees for your attendees."
    },
    {
        question: "What support do I get with TrekTribe?",
        answer: "All organizers have access to our comprehensive Help Center. Free event organizers have access to email support. For paid ticket events, we offer both email and 24/7 chat support. Large events on our Enterprise plan receive dedicated phone support and strategic advising."
    },
    {
        question: "What is TrekTribe Pro?",
        answer: "TrekTribe Pro is a subscription add-on that offers powerful tools like custom branding, multiple ticket types, and advanced analytics to help you grow your events."
    }
]

const comparisonData = {
    headers: ["TrekTribe", "Eventbrite", "eTix", "See Tickets", "Dice", "Universe"],
    features: [
        { 
            name: "Consumer audience reach",
            values: ["100M+", "90M", "20M", "15M", "10M", "5M"]
        },
        { 
            name: "AI-powered tools",
            values: [true, true, false, false, false, false]
        },
        { 
            name: "Email and social media ad tools with smart audiences",
            values: [true, true, false, false, false, false]
        },
        { 
            name: "Advertise to ticket buyers on the platform",
            values: [true, true, false, false, false, false]
        },
        { 
            name: "Self-service + Create an event in seconds",
            values: [true, true, false, false, false, false]
        }
    ]
}

const pricingImage1 = PlaceHolderImages.find(p => p.id === 'pricing-1');
const pricingImage2 = PlaceHolderImages.find(p => p.id === 'pricing-2');

export default function PricingPage() {
  return (
    <div>
        <section className="py-16 md:py-24 bg-card text-center">
            <div className="container">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 font-headline">
                    Publish your events for <span className="text-primary uppercase underline">FREE</span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
                    Create your event on TrekTribe for free. We only charge a small fee when you sell a paid ticket. It’s that simple.
                </p>
                <Button asChild size="lg">
                    <Link href="/partner">Get Started</Link>
                </Button>
            </div>
        </section>

        {pricingImage1 && (
            <section className="bg-background">
                <div className="container py-16 md:py-24">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                         <div className="relative h-80 rounded-lg overflow-hidden">
                            <Image src={pricingImage1.imageUrl} alt={pricingImage1.description} fill className="object-cover" data-ai-hint={pricingImage1.imageHint}/>
                        </div>
                        <div className="max-w-md">
                             <h2 className="text-3xl font-bold font-headline mb-4">The most trusted events platform.</h2>
                             <p className="text-muted-foreground text-lg">Whether you're organizing a small community hike or a large corporate marathon, our platform provides the tools and support you need to create a successful event.</p>
                        </div>
                    </div>
                </div>
            </section>
        )}

        {pricingImage2 && (
             <section className="bg-card">
                <div className="container py-16 md:py-24">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                         <div className="relative h-80 rounded-lg overflow-hidden md:order-2">
                            <Image src={pricingImage2.imageUrl} alt={pricingImage2.description} fill className="object-cover" data-ai-hint={pricingImage2.imageHint}/>
                        </div>
                        <div className="max-w-md md:order-1">
                             <h2 className="text-3xl font-bold font-headline mb-4">Flexible pricing for any event.</h2>
                             <p className="text-muted-foreground text-lg">We grow with you. Start for free and unlock more powerful features as your events scale. Our pricing is transparent and designed for organizers of all sizes.</p>
                        </div>
                    </div>
                </div>
            </section>
        )}
        
        <PricingSection
            title="Find the plan that’s right for you"
            subtitle="Choose the plan that fits your needs. All plans include unlimited events."
            tiers={tiers}
        />

        <section className="py-16 md:py-24 bg-card">
            <div className="container max-w-5xl">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Partner with the Best</h2>
                     <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
                        See how TrekTribe compares to other platforms and why we're the leading choice for outdoor event organizers.
                     </p>
                 </div>
                 <Card>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[300px]">Features</TableHead>
                                {comparisonData.headers.map(header => (
                                    <TableHead key={header} className={`text-center ${header === 'TrekTribe' ? 'text-primary font-bold' : ''}`}>{header}</TableHead>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {comparisonData.features.map(feature => (
                                <TableRow key={feature.name}>
                                    <TableCell className="font-medium">{feature.name}</TableCell>
                                    {feature.values.map((value, index) => (
                                        <TableCell key={index} className="text-center">
                                            {typeof value === 'boolean' ? (
                                                value ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <X className="h-5 w-5 text-red-500 mx-auto" />
                                            ) : (
                                                <span className={`${index === 0 ? 'font-bold text-primary' : ''}`}>{value}</span>
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                 </Card>
                 <div className="text-center mt-8">
                     <Button size="lg">Get Started</Button>
                 </div>
            </div>
        </section>

        <section className="py-16 md:py-24 border-t">
            <div className="container max-w-4xl">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Frequently Asked Questions</h2>
                 </div>
                 <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-lg font-semibold">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">
                            {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                <div className="text-center mt-12">
                    <Button asChild size="lg">
                        <Link href="/partner">Get Started for Free</Link>
                    </Button>
                </div>
            </div>
        </section>
    </div>
  );
}
