'use client';

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { events } from "@/lib/data";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay"

// Helper to generate a slug from a title
const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

export function PromotedEventsBanner() {
  // Let's assume the first 4 events are promoted for this demo
  const promotedEvents = events.slice(0, 4);
  
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <section className="py-12 bg-primary/5">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold font-headline flex items-center gap-2">
                <Star className="h-6 w-6 text-primary" />
                Promoted Events
            </h2>
             <Link href="/explore?promoted=true" className="text-sm font-semibold text-primary hover:underline">
                View All
            </Link>
        </div>
        <Carousel 
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="w-full"
        >
          <CarouselContent>
            {promotedEvents.map((event) => (
              <CarouselItem key={event.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden group">
                     <CardContent className="p-0">
                        <Link href={`/events/${slugify(event.title)}`} className="block">
                            <div className="relative h-56 w-full">
                                <Image
                                    src={event.image.url}
                                    alt={event.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    data-ai-hint={event.image.hint}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                                    <Star className="h-3 w-3 mr-1"/>
                                    Promoted
                                </Badge>
                                <div className="absolute bottom-0 left-0 p-4">
                                     <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{event.title}</h3>
                                     <p className="text-sm text-white/80">{event.location}</p>
                                </div>
                            </div>
                        </Link>
                     </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
