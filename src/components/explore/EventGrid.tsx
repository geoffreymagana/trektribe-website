import { EventCard } from "@/components/shared/EventCard";
import type { Event } from "@/lib/types";

interface EventGridProps {
  events: Event[];
}

export function EventGrid({ events }: EventGridProps) {
  if (events.length === 0) {
    return (
        <div className="flex flex-col items-center justify-center h-96 border border-dashed rounded-lg">
            <h3 className="text-xl font-semibold">No Events Found</h3>
            <p className="text-muted-foreground">Try adjusting your filters to find more adventures.</p>
        </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
