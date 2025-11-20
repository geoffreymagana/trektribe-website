
"use client";

import { useState } from "react";
import { EventCard } from "@/components/shared/EventCard";
import { events } from "@/lib/data";
import { VercelTabs } from "@/components/shared/VercelTabs";

const categories = ["Hike", "Marathon", "Cycling", "Mountain Climb", "Impact"];

export function FeaturedEvents() {
  const [activeTab, setActiveTab] = useState(categories[0]);

  const filteredEvents = events
    .filter((event) => event.category === activeTab)
    .slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Featured Events
          </h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Join adventures hosted by our trusted organizers.
          </p>
        </div>

        <div className="flex justify-center mb-8">
            <VercelTabs
                tabs={categories}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
