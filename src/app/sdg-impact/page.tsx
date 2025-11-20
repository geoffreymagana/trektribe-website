import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ImpactMetrics } from "@/components/sdg-impact/ImpactMetrics";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartPulse, MapPinHouse, Snowflake, Mountain, Handshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const sdgGoals: { title: string; description: string; icon: LucideIcon, sdg: string }[] = [
    {
        title: "Good Health & Well-being",
        sdg: "SDG 3",
        description: "Promoting active lifestyles and mental wellness through outdoor activities, contributing to healthier and happier communities.",
        icon: HeartPulse,
    },
    {
        title: "Sustainable Cities & Communities",
        sdg: "SDG 11",
        description: "Making cities more inclusive, safe, and resilient by fostering community connections and promoting the use of public green spaces.",
        icon: MapPinHouse,
    },
    {
        title: "Climate Action",
        sdg: "SDG 13",
        description: "Raising awareness about environmental issues through impact-themed events and promoting eco-friendly practices among our community.",
        icon: Snowflake,
    },
    {
        title: "Life on Land",
        sdg: "SDG 15",
        description: "Supporting conservation efforts by organizing events like tree planting and trail clean-ups, directly contributing to ecosystem restoration.",
        icon: Mountain,
    },
    {
        title: "Partnerships for the Goals",
        sdg: "SDG 17",
        description: "Collaborating with NGOs, corporate partners, and local communities to amplify our impact and work towards a sustainable future together.",
        icon: Handshake,
    },
];

export default function SdgImpactPage() {
    const sdgImage = PlaceHolderImages.find((img) => img.id === "sdg-main");

    return (
        <div>
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white">
                {sdgImage && (
                    <Image
                        src={sdgImage.imageUrl}
                        alt={sdgImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={sdgImage.imageHint}
                    />
                )}
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold font-headline">Adventure with Purpose</h1>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-100 mt-4">
                        We believe every step taken in nature can be a step towards a better world. Discover how TrekTribe champions the UN Sustainable Development Goals.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Commitment to the SDGs</h2>
                         <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
                            TrekTribe is built on the principle of positive impact. Our platform and community activities are aligned with the following key Sustainable Development Goals.
                         </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sdgGoals.map((goal) => (
                            <Card key={goal.title} className="bg-card">
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <goal.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <CardTitle>{goal.title}</CardTitle>
                                        <p className="text-sm font-semibold text-primary">{goal.sdg}</p>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{goal.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
            <ImpactMetrics />

        </div>
    );
}
