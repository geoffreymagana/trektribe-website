import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Search, Bot, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "1. Browse Events",
    description: "Explore a wide range of outdoor activities curated for every skill level and interest.",
    image: PlaceHolderImages.find((img) => img.id === "how-it-works-1"),
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "2. Personalize with AI",
    description: "Use our smart search to find exactly what you're looking for, from snack availability to event themes.",
    image: PlaceHolderImages.find((img) => img.id === "how-it-works-2"),
  },
  {
    icon: <PartyPopper className="h-8 w-8 text-primary" />,
    title: "3. Join the Adventure",
    description: "Book your spot, connect with the community, and get ready for an unforgettable experience.",
    image: PlaceHolderImages.find((img) => img.id === "how-it-works-3"),
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">How It Works</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Finding your next adventure is as easy as 1-2-3.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Card key={step.title} className="text-center border-none shadow-none bg-transparent">
              <CardHeader className="flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  {step.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
