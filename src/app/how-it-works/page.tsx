import { CheckCircle, Users, BarChart, Zap, Bot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const organizerFeatures = [
    {
        icon: Zap,
        title: "Create in Minutes",
        description: "Our intuitive event builder lets you create and publish a stunning event page in minutes. No technical skills required.",
    },
    {
        icon: Bot,
        title: "AI-Powered Tools",
        description: "Leverage AI to write compelling event descriptions, generate marketing copy, and even create promotional posters automatically.",
    },
    {
        icon: Users,
        title: "Reach Your Audience",
        description: "Tap into a built-in audience of outdoor enthusiasts. Use our marketing tools to promote your event on social media and to our community.",
    },
    {
        icon: BarChart,
        title: "Track Your Success",
        description: "Get detailed analytics on ticket sales, attendee demographics, and marketing performance to optimize every event.",
    },
];

const attendeeFeatures = [
    {
        icon: Zap,
        title: "Discover Unique Adventures",
        description: "Explore a curated selection of outdoor events, from local hikes to international marathons, all in one place.",
    },
    {
        icon: Bot,
        title: "Smart AI Search",
        description: "Use natural language to find exactly what you're looking for. Search for 'beginner hikes near me with snacks' and get instant results.",
    },
    {
        icon: Users,
        title: "Join the Community",
        description: "Connect with fellow adventurers, join group challenges, and share your experiences with a vibrant and supportive tribe.",
    },
    {
        icon: CheckCircle,
        title: "Seamless Booking",
        description: "Register for events, purchase tickets, and manage your bookings with a simple and secure checkout process.",
    },
];

export default function HowItWorksPage() {
    return (
        <div>
            <section className="py-16 md:py-24 text-center bg-card">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-headline">How TrekTribe Works</h1>
                    <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                        Whether you're organizing an adventure or looking for one, we make it simple, seamless, and powerful.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl font-bold font-headline mb-6">For Organizers</h2>
                            <div className="space-y-8">
                                {organizerFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-6">
                                        <div className="bg-primary/10 p-3 rounded-full">
                                            <feature.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                                            <p className="text-muted-foreground">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Button asChild className="mt-8">
                                <Link href="/partner">Start Organizing</Link>
                            </Button>
                        </div>
                        <div className="order-1 lg:order-2 relative h-80 md:h-96 rounded-lg overflow-hidden">
                             <Image 
                                src="https://picsum.photos/seed/organizer-features/800/600" 
                                alt="An organizer planning an event on a laptop" 
                                fill 
                                className="object-cover"
                                data-ai-hint="event planning"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-card">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
                             <Image 
                                src="https://picsum.photos/seed/attendee-features/800/600" 
                                alt="A group of hikers enjoying a view" 
                                fill 
                                className="object-cover"
                                data-ai-hint="group hiking"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold font-headline mb-6">For Attendees</h2>
                             <div className="space-y-8">
                                {attendeeFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-6">
                                        <div className="bg-primary/10 p-3 rounded-full">
                                            <feature.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                                            <p className="text-muted-foreground">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                             <Button asChild className="mt-8">
                                <Link href="/explore">Find an Adventure</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
