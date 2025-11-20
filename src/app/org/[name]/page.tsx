
import { notFound } from "next/navigation";
import { events } from "@/lib/data";
import { EventCard } from "@/components/shared/EventCard";
import Image from "next/image";
import { partners as allPartners } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

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

    return (
        <div className="container py-12 md:py-16">
            <div className="relative h-48 md:h-64 w-full rounded-t-lg overflow-hidden">
                 <Image 
                    src={`https://picsum.photos/seed/${partnerSlug}/1200/400`}
                    alt={`${partner.name} banner`}
                    fill
                    className="object-cover"
                    data-ai-hint="abstract banner"
                />
            </div>
            <div className="bg-card rounded-b-lg p-8 relative">
                <div className="flex flex-col items-center md:flex-row md:items-end gap-8 mb-12 -mt-24 md:-mt-28">
                    <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-card shadow-lg">
                        <Image 
                            src={partner.avatarUrl} 
                            alt={partner.name} 
                            fill 
                            className="object-cover"
                        />
                    </div>
                    <div className="text-center md:text-left pb-2">
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                            <h1 className="text-3xl md:text-4xl font-extrabold font-headline">{partner.name}</h1>
                            {partner.isVerified && (
                                 <img src="https://img.icons8.com/fluency/48/instagram-verification-badge.png" alt="verification badge" className="w-8 h-8"/>
                            )}
                        </div>
                        <p className="text-lg text-muted-foreground mt-2 max-w-2xl">
                           Explore all the adventures hosted by {partner.name}. Join us to make a difference and discover the great outdoors.
                        </p>
                    </div>
                </div>

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
