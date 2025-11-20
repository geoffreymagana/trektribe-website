"use client";

import { useState } from "react";
import { EventGrid } from "@/components/explore/EventGrid";
import { HorizontalFilters } from "@/components/explore/HorizontalFilters";
import { MapSection } from "@/components/explore/MapSection";
import { Button } from "@/components/ui/button";
import { Map, List } from "lucide-react";
import { events } from "@/lib/data";
import type { Event } from "@/lib/types";

export function ExplorePage() {
  const [view, setView] = useState("list");
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);

  return (
    <div className="container max-w-screen-2xl py-8">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold font-headline">Explore Events</h1>
      </div>
      <div className="flex justify-center items-center mb-6 gap-4">
            <HorizontalFilters allEvents={events} setFilteredEvents={setFilteredEvents} />
            <Button variant="outline" onClick={() => setView(view === "list" ? "map" : "list")}>
              {view === "list" ? <Map className="mr-2 h-4 w-4" /> : <List className="mr-2 h-4 w-4" />}
              {view === 'list' ? 'Map' : 'List'}
            </Button>
        </div>

      <div className="mt-8">
          {view === 'list' ? <EventGrid events={filteredEvents} /> : <MapSection />}
      </div>
    </div>
  );
}
