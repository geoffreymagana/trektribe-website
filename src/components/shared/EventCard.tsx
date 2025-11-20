
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Event } from "@/lib/types";

interface EventCardProps {
  event: Event;
}

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="group">
      <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <CardHeader className="p-0">
          <Link href={`/events/${slugify(event.title)}`} className="block">
            <div className="relative h-48 w-full">
              <Image
                src={event.image.url}
                alt={event.title}
                fill
                className="object-cover"
                data-ai-hint={event.image.hint}
              />
              <div className="absolute top-2 right-2">
                <Badge variant="secondary">{event.category}</Badge>
              </div>
            </div>
          </Link>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          {event.partners && event.partners.length > 0 && (
            <div className="flex items-center gap-2 mb-2">
                <div className="flex -space-x-3">
                    {event.partners.slice(0, 2).map(p => (
                        <Link key={p.name} href={`/org/${slugify(p.name)}`} className="hover:z-10">
                            <Image src={p.avatarUrl} alt={p.name} width={24} height={24} className="rounded-full border-2 border-card"/>
                        </Link>
                    ))}
                </div>
                <div className="text-xs text-muted-foreground font-semibold truncate">
                    Hosted by {event.partners.map((p, i) => {
                      const verificationBadge = p.isVerified ? (
                        p.verificationType === 'gold' 
                            ? 'https://img.icons8.com/color/96/verified-badge.png' 
                            : 'https://img.icons8.com/fluency/96/instagram-verification-badge.png'
                      ) : null;
                      return (
                        <span key={p.name}>
                          <Link href={`/org/${slugify(p.name)}`} className="hover:underline text-foreground">
                              {p.name}
                          </Link>
                          {verificationBadge && <img src={verificationBadge} alt="verification badge" className="w-3 h-3 inline-block ml-0.5"/>}
                          {i < event.partners!.length - 1 ? ' & ' : ''}
                        </span>
                      )
                    })}
                </div>
            </div>
          )}
           <Link href={`/events/${slugify(event.title)}`} className="block">
            <CardTitle className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
              {event.title}
            </CardTitle>
          </Link>
          <div className="text-sm text-muted-foreground space-y-2">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(event.date).toLocaleDateString("en-US", { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{event.location}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
            <div className="flex gap-2">
                <Badge variant="outline">{event.difficulty}</Badge>
                {event.cause && <Badge variant="outline">{event.cause}</Badge>}
            </div>
        </CardFooter>
      </Card>
    </div>
  );
}
