

import { events } from "@/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin, Calendar, Tag, Zap, Utensils, Mountain, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Event } from "@/lib/types";
import Link from "next/link";

// Helper to generate a slug from a title
const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

export default function EventDetailsPage({ params }: { params: { id: string } }) {
  // The 'id' param from the URL is actually a slug
  const slug = params.id;

  // Try to find the event by matching the slug with a slugified title
  const event = events.find(
    (e) => slugify(e.title) === slug
  );

  // If no static event is found, we assume it's an AI-generated event
  // and create a mock event object.
  const displayEvent: Event | null = event ? event : {
    id: slug,
    title: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()), // De-slugify for title
    category: "Hike", // Default
    date: new Date().toISOString(),
    location: "Kenya", // Default
    image: { id: "ai-event-placeholder", url: `https://picsum.photos/seed/${slug}/800/600`, hint: "adventure landscape" },
    difficulty: "Intermediate", // Default
    eventType: "Community", // Default
  };

  if (!displayEvent) {
    notFound();
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
        <div className="md:col-span-3">
          <div className="relative h-[300px] md:h-[500px] w-full rounded-lg overflow-hidden mb-6">
            <Image
              src={displayEvent.image.url}
              alt={displayEvent.title}
              fill
              className="object-cover"
              data-ai-hint={displayEvent.image.hint}
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 font-headline">
            {displayEvent.title}
          </h1>

          {displayEvent.partners && displayEvent.partners.length > 0 && (
            <div className="flex items-center gap-2 mb-4">
                <div className="flex -space-x-4">
                    {displayEvent.partners.map(p => (
                        <Link key={p.name} href={`/org/${slugify(p.name)}`} className="hover:z-10">
                            <Image src={p.avatarUrl} alt={p.name} width={32} height={32} className="rounded-full border-2 border-background"/>
                        </Link>
                    ))}
                </div>
                <div className="text-sm text-muted-foreground font-semibold">
                    Hosted by {displayEvent.partners.map((p, i) => {
                      const verificationBadge = p.isVerified ? (
                        p.verificationType === 'gold' 
                            ? 'https://img.icons8.com/color/96/verified-badge.png' 
                            : 'https://img.icons8.com/fluency/96/instagram-verification-badge.png'
                      ) : null;
                      return(
                        <span key={p.name}>
                          <Link href={`/org/${slugify(p.name)}`} className="hover:underline text-foreground">
                              {p.name}
                          </Link>
                          {verificationBadge && <img src={verificationBadge} alt="verification badge" className="w-4 h-4 inline-block ml-0.5"/>}
                          {i < displayEvent.partners!.length - 1 ? ' & ' : ''}
                        </span>
                      )
                    })}
                </div>
            </div>
          )}

          <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>{new Date(displayEvent.date).toLocaleDateString("en-US", { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{displayEvent.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="h-5 w-5 text-primary" />
              <span>{displayEvent.category}</span>
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join us for an unforgettable experience at the {displayEvent.title}. This event is perfect for those looking to explore the beautiful landscapes of Kenya while connecting with a vibrant community. Whether you're a seasoned adventurer or new to the outdoors, there's something for everyone. Get ready to create lasting memories!
          </p>
        </div>

        <div className="md:col-span-2">
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Event Details</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Zap className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-semibold mr-2">Difficulty:</span>
                  <Badge variant="outline">{displayEvent.difficulty}</Badge>
                </div>
                {displayEvent.distance && (
                   <div className="flex items-center">
                    <Mountain className="h-5 w-5 mr-3 text-primary" />
                    <span className="font-semibold mr-2">Distance:</span>
                    <span>{displayEvent.distance} km</span>
                  </div>
                )}
                {displayEvent.cause && (
                  <div className="flex items-center">
                     <Target className="h-5 w-5 mr-3 text-primary" />
                    <span className="font-semibold mr-2">Impact Cause:</span>
                    <Badge variant="secondary">{displayEvent.cause}</Badge>
                  </div>
                )}
                 <div className="flex items-center">
                  <Utensils className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-semibold mr-2">Snacks:</span>
                  <span>{displayEvent.snacks ? "Provided" : "Not Provided"}</span>
                </div>
                 <div className="flex items-center">
                  <Tag className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-semibold mr-2">Type:</span>
                  <span>{displayEvent.eventType}</span>
                </div>
              </div>
              <Button size="lg" className="w-full mt-6">
                Register for Event
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

