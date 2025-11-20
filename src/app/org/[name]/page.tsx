

import { notFound } from "next/navigation";
import { events } from "@/lib/data";
import { EventCard } from "@/components/shared/EventCard";
import Image from "next/image";
import { partners as allPartners } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const formatFollowCount = (count: number): string => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(0)}K`;
    return count.toString();
}

export default function OrganizationProfilePage({ params }: { params: { name: string } }) {
    const partnerSlug = params.name;
    const partner = allPartners.find(p => slugify(p.name) === partnerSlug);

    if (!partner) {
        notFound();
    }

    const partnerEvents = events.filter(event => 
        event.partners?.some(p => p.name === partner.name)
    );

    const upcomingEvents = partnerEvents.filter(e => new Date(e.date) >= new Date());
    const pastEvents = partnerEvents.filter(e => new Date(e.date) < new Date());

    const verificationBadge = partner.isVerified ? (
        partner.verificationType === 'gold' 
            ? 'https://img.icons8.com/color/96/verified-badge.png' 
            : 'https://img.icons8.com/fluency/96/instagram-verification-badge.png'
    ) : null;

    return (
        <div className="container py-12 md:py-16">
            <div className="relative h-48 md:h-64 w-full rounded-lg overflow-hidden">
                 <Image 
                    src={`https://picsum.photos/seed/${partnerSlug}/1200/400`}
                    alt={`${partner.name} banner`}
                    fill
                    className="object-cover"
                    data-ai-hint="abstract banner"
                />
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-end text-center md:text-left gap-4 md:gap-8 mt-[-4rem] md:mt-[-5rem] px-8">
                 <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border-4 border-background shadow-lg shrink-0">
                    <Image 
                        src={partner.avatarUrl} 
                        alt={partner.name} 
                        fill 
                        className="object-cover"
                    />
                </div>
                <div className="flex-grow flex flex-col md:flex-row justify-between items-center w-full gap-4">
                    <div className="mt-4 md:mt-0">
                         <div className="flex items-center gap-2 justify-center md:justify-start">
                            <h1 className="text-3xl md:text-4xl font-extrabold font-headline">{partner.name}</h1>
                            {verificationBadge && (
                                 <img src={verificationBadge} alt="verification badge" className="w-8 h-8"/>
                            )}
                        </div>
                        <p className="text-sm text-muted-foreground font-mono">@{partner.username}</p>
                    </div>
                     <div className="shrink-0 w-full md:w-auto">
                        <Button className="w-full md:w-auto">Follow</Button>
                    </div>
                </div>
            </div>
            
            <div className="mt-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
                <div className="md:col-span-2">
                    <p className="text-lg text-muted-foreground max-w-2xl">
                       Explore all the adventures hosted by {partner.name}. Join us to make a difference and discover the great outdoors.
                    </p>
                </div>
                
                <div className="md:col-span-3 text-sm text-muted-foreground">
                    <div className="flex flex-wrap items-center gap-4">
                        {partner.accountType && <Badge variant="outline" className="rounded-md px-3 py-1">{partner.accountType}</Badge>}
                        {partner.dateJoined && (
                            <div className="flex items-center gap-1.5">
                                <CalendarDays className="h-4 w-4" />
                                <span>Joined {new Date(partner.dateJoined).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="md:col-span-3 text-sm text-muted-foreground">
                     <div className="flex items-center gap-4">
                        {partner.followerCount && <span><span className="font-bold text-foreground">{formatFollowCount(partner.followerCount)}</span> Followers</span>}
                        {partner.followingCount && <span><span className="font-bold text-foreground">{formatFollowCount(partner.followingCount)}</span> Following</span>}
                    </div>
                </div>
            </div>
            
            <div className="mt-12">
                <Tabs defaultValue="upcoming" className="w-full">
                    <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                        <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                        <TabsTrigger value="past">Past Events</TabsTrigger>
                    </TabsList>
                    <TabsContent value="upcoming" className="mt-8">
                        {upcomingEvents.length > 0 ? (
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {upcomingEvents.map((event) => (
                                    <EventCard key={event.id} event={event} />
                                ))}
                            </div>
                        ) : (
                             <div className="flex flex-col items-center justify-center h-64 border border-dashed rounded-lg text-center p-8">
                                <h3 className="text-xl font-semibold">No Upcoming Events</h3>
                                <p className="text-muted-foreground mt-2">Check back soon for new adventures from {partner.name}!</p>
                            </div>
                        )}
                    </TabsContent>
                    <TabsContent value="past" className="mt-8">
                         {pastEvents.length > 0 ? (
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {pastEvents.map((event) => (
                                    <EventCard key={event.id} event={event} />
                                ))}
                            </div>
                        ) : (
                             <div className="flex flex-col items-center justify-center h-64 border border-dashed rounded-lg text-center p-8">
                                <h3 className="text-xl font-semibold">No Past Events</h3>
                                <p className="text-muted-foreground mt-2">{partner.name} is just getting started on our platform!</p>
                            </div>
                        )}
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}

