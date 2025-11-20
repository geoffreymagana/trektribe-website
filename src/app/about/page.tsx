import Image from "next/image";
import { TeamProfiles } from "@/components/about/TeamProfiles";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
    const storyImage = PlaceHolderImages.find((img) => img.id === "about-story");

    return (
        <div>
            <section className="py-16 md:py-24">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-headline">About TrekTribe</h1>
                    <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                        Connecting people with nature, community, and purpose.
                    </p>
                </div>
            </section>
            
            <section className="pb-16 md:pb-24">
                <div className="container">
                    <Card className="overflow-hidden">
                        <div className="grid md:grid-cols-2 items-center">
                            {storyImage && (
                                <div className="relative h-64 md:h-full min-h-[300px]">
                                    <Image
                                        src={storyImage.imageUrl}
                                        alt={storyImage.description}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={storyImage.imageHint}
                                    />
                                </div>
                            )}
                            <div className="p-8 md:p-12">
                                <h2 className="text-3xl font-bold mb-4 font-headline">Our Story</h2>
                                <p className="text-muted-foreground space-y-4">
                                    <span>TrekTribe was born from a simple idea: the outdoors is better together. Our founder, an avid hiker and community organizer, saw a gap between people wanting to explore and the lack of accessible, purpose-driven events.</span>
                                    <span>We set out to build more than just an event platform. We wanted to create a movement—a tribe of adventurers, conservationists, and change-makers dedicated to experiencing the world and leaving it better than they found it. Today, TrekTribe is a thriving ecosystem for outdoor enthusiasts and organizations alike.</span>
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-card">
                 <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 text-center md:text-left">
                        <div>
                            <h3 className="text-2xl font-bold mb-4 font-headline">Our Mission</h3>
                            <p className="text-muted-foreground">To make outdoor adventure and environmental stewardship accessible to everyone, fostering a global community that connects with nature and each other.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 font-headline">Our Vision</h3>
                            <p className="text-muted-foreground">A world where people are healthier, communities are stronger, and our planet is protected, all through the power of shared outdoor experiences.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <TeamProfiles />

        </div>
    );
}
