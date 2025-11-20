
'use client';
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay"

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { events } from "@/lib/data";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// Helper to generate a slug from a title
const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const sponsoredEvents = events.filter(e => e.eventType === 'Corporate').slice(0,3);

export function HeroSection() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  )

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api])


  return (
    <section className="container py-8">
        <Carousel 
            setApi={setApi}
            plugins={[plugin.current]}
            className="w-full"
            opts={{
                loop: true,
            }}
        >
            <CarouselContent>
                {sponsoredEvents.map(event => (
                    <CarouselItem key={event.id}>
                        <div className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center text-white rounded-3xl overflow-hidden">
                            <Image
                                src={event.image.url}
                                alt={event.title}
                                fill
                                className="object-cover"
                                priority
                                data-ai-hint={event.image.hint}
                            />
                            <div className="absolute inset-0 bg-black/60" />
                            <div className="relative z-10 text-center px-4">
                                <Badge className="mb-4 bg-accent text-accent-foreground">Sponsored Event</Badge>
                                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-shadow-lg font-headline">
                                    {event.title}
                                </h1>
                                <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-100 mb-8">
                                    Join thousands in an unforgettable experience.
                                </p>
                                <Button asChild size="lg">
                                    <Link href={`/events/${slugify(event.title)}`}>Learn More & Register</Link>
                                </Button>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-8" />
            <CarouselNext className="right-8" />

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {sponsoredEvents.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={cn(
                            "h-2 w-2 rounded-full transition-all",
                            current === index ? "w-4 bg-white" : "bg-white/50"
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </Carousel>
    </section>
  );
}

