
import Image from "next/image";
import { teamMembers } from "@/lib/data";

const leadership = teamMembers.filter(member => member.department === 'Leadership');
const engineering = teamMembers.filter(member => member.department === 'Engineering');
const community = teamMembers.filter(member => member.department === 'Community');


export function TeamProfiles() {
  return (
     <section className="py-12 md:py-32">
            <div className="mx-auto max-w-3xl px-8 lg:px-0">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl font-bold md:text-5xl font-headline">Our Team</h2>
                    <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
                        The passionate individuals dedicated to bringing TrekTribe to life.
                    </p>
                </div>
                
                {leadership.length > 0 && (
                    <div>
                        <h3 className="mb-6 text-lg font-medium">Leadership</h3>
                        <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                            {leadership.map((member) => (
                                <div key={member.id}>
                                    <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                        <Image className="aspect-square rounded-full object-cover" src={member.image.url} alt={member.name} height={460} width={460} loading="lazy" data-ai-hint={member.image.hint} />
                                    </div>
                                    <span className="mt-2 block text-sm font-semibold">{member.name}</span>
                                    <span className="text-destructive block text-xs">{member.role}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {engineering.length > 0 && (
                     <div className="mt-6">
                        <h3 className="mb-6 text-lg font-medium">Engineering</h3>
                        <div data-rounded="full" className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                            {engineering.map((member) => (
                                 <div key={member.id}>
                                    <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                        <Image className="aspect-square rounded-full object-cover" src={member.image.url} alt={member.name} height={460} width={460} loading="lazy" data-ai-hint={member.image.hint} />
                                    </div>
                                    <span className="mt-2 block text-sm font-semibold">{member.name}</span>
                                    <span className="text-destructive block text-xs">{member.role}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {community.length > 0 && (
                    <div className="mt-6">
                        <h3 className="mb-6 text-lg font-medium">Community & Partnerships</h3>
                        <div data-rounded="full" className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                            {community.map((member) => (
                                 <div key={member.id}>
                                    <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                        <Image className="aspect-square rounded-full object-cover" src={member.image.url} alt={member.name} height={460} width={460} loading="lazy" data-ai-hint={member.image.hint}/>
                                    </div>
                                    <span className="mt-2 block text-sm font-semibold">{member.name}</span>
                                    <span className="text-destructive block text-xs">{member.role}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
  );
}
