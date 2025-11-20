
"use client";

import { useState, useEffect, useRef } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Target } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Search, MapPin } from "lucide-react";
import { format } from "date-fns";
import type { DateRange } from "react-day-picker";
import type { Event } from "@/lib/types";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";

interface HorizontalFiltersProps {
  allEvents: Event[];
  setFilteredEvents: (events: Event[]) => void;
}

const activityTypes = ["Hike", "Marathon", "Cycling", "Mountain Climb", "Impact"];
const difficulties = ["Beginner", "Intermediate", "Advanced"];
const eventTypes = ["Community", "Corporate"];

export function HorizontalFilters({ allEvents, setFilteredEvents }: HorizontalFiltersProps) {
  const [date, setDate] = useState<DateRange | undefined>();
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [snacksAvailable, setSnacksAvailable] = useState<boolean | null>(null);
  const [selectedEventType, setSelectedEventType] = useState<string | null>(null);
  const [openPopover, setOpenPopover] = useState<string | null>(null);
  
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const applyFilters = () => {
      let updatedEvents = [...allEvents];

      if (date?.from) {
        updatedEvents = updatedEvents.filter(event => 
          new Date(event.date) >= date.from! && (!date.to || new Date(event.date) <= date.to!)
        );
      }

      if (selectedActivities.length > 0) {
        updatedEvents = updatedEvents.filter(event => selectedActivities.includes(event.category));
      }
      
      if (selectedDifficulties.length > 0) {
        updatedEvents = updatedEvents.filter(event => selectedDifficulties.includes(event.difficulty));
      }

      if (snacksAvailable !== null) {
          updatedEvents = updatedEvents.filter(event => event.snacks === snacksAvailable);
      }

      if (selectedEventType) {
          updatedEvents = updatedEvents.filter(event => event.eventType === selectedEventType);
      }

      setFilteredEvents(updatedEvents);
    };

    applyFilters();
  }, [date, selectedActivities, selectedDifficulties, snacksAvailable, selectedEventType, allEvents, setFilteredEvents]);

  const handleActivityChange = (activity: string) => {
    setSelectedActivities(prev => 
      prev.includes(activity) ? prev.filter(a => a !== activity) : [...prev, activity]
    );
  };
  
  const handleDifficultyChange = (difficulty: string) => {
    setSelectedDifficulties(prev =>
      prev.includes(difficulty) ? prev.filter(d => d !== difficulty) : [...prev, difficulty]
    );
  };
  
  const getActivitiesLabel = () => {
    if (selectedActivities.length === 0) return "Add activities";
    if (selectedActivities.length === 1) return selectedActivities[0];
    return `${selectedActivities.length} activities`;
  }
  
  const getDifficultiesLabel = () => {
    if (selectedDifficulties.length === 0) return "Select difficulty";
    if (selectedDifficulties.length === 1) return selectedDifficulties[0];
    return `${selectedDifficulties.length} levels`;
  }
  
  const getDateLabel = () => {
      if (date?.from) {
        if (date.to) {
          return `${format(date.from, "LLL dd")} - ${format(date.to, "LLL dd")}`
        }
        return format(date.from, "LLL dd, y")
      }
      return "Add dates";
  }

  const getSnacksLabel = () => {
      if (snacksAvailable === null) return "Any";
      return snacksAvailable ? "Provided" : "Not Provided";
  }

  const getEventTypeLabel = () => {
      if (!selectedEventType) return "Any";
      return selectedEventType;
  }

  return (
    <div ref={popoverRef} className="flex items-center justify-center p-2 rounded-full border bg-card shadow-md">
      <Popover open={openPopover === 'activity'} onOpenChange={(isOpen) => setOpenPopover(isOpen ? 'activity' : null)}>
        <PopoverTrigger asChild>
          <Button variant="ghost" className="rounded-full h-12 px-6 text-left font-normal flex-col items-start">
            <span className="text-xs font-bold">Activity</span>
            <span className="text-sm text-muted-foreground">{getActivitiesLabel()}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-4">
          <div className="space-y-4">
             <h4 className="font-semibold">Activity Type</h4>
             <div className="space-y-2">
                {activityTypes.map(type => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox id={`activity-${type}`} checked={selectedActivities.includes(type)} onCheckedChange={() => handleActivityChange(type)} />
                    <Label htmlFor={`activity-${type}`} className="flex items-center gap-2">
                      {type}
                    </Label>
                  </div>
                ))}
              </div>
          </div>
        </PopoverContent>
      </Popover>

      <Separator orientation="vertical" className="h-8" />
      
      <Popover open={openPopover === 'date'} onOpenChange={(isOpen) => setOpenPopover(isOpen ? 'date' : null)}>
        <PopoverTrigger asChild>
          <Button variant="ghost" className="rounded-full h-12 px-6 text-left font-normal flex-col items-start">
            <span className="text-xs font-bold">When</span>
            <span className="text-sm text-muted-foreground">{getDateLabel()}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="range"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      <Separator orientation="vertical" className="h-8" />

      <Popover open={openPopover === 'difficulty'} onOpenChange={(isOpen) => setOpenPopover(isOpen ? 'difficulty' : null)}>
        <PopoverTrigger asChild>
          <Button variant="ghost" className="rounded-full h-12 px-6 text-left font-normal flex-col items-start">
            <span className="text-xs font-bold">Difficulty</span>
            <span className="text-sm text-muted-foreground">{getDifficultiesLabel()}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-4">
          <div className="space-y-4">
             <h4 className="font-semibold">Difficulty Level</h4>
             <div className="space-y-2">
                {difficulties.map(level => (
                  <div key={level} className="flex items-center space-x-2">
                    <Checkbox id={`difficulty-${level}`} checked={selectedDifficulties.includes(level)} onCheckedChange={() => handleDifficultyChange(level)} />
                    <Label htmlFor={`difficulty-${level}`}>{level}</Label>
                  </div>
                ))}
              </div>
          </div>
        </PopoverContent>
      </Popover>

       <Separator orientation="vertical" className="h-8" />
      
      <Popover open={openPopover === 'snacks'} onOpenChange={(isOpen) => setOpenPopover(isOpen ? 'snacks' : null)}>
        <PopoverTrigger asChild>
          <Button variant="ghost" className="rounded-full h-12 px-6 text-left font-normal flex-col items-start">
            <span className="text-xs font-bold">Snacks</span>
            <span className="text-sm text-muted-foreground">{getSnacksLabel()}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-4">
             <h4 className="font-semibold">Snacks</h4>
            <RadioGroup value={snacksAvailable === null ? "any" : snacksAvailable ? "provided" : "not-provided"} onValueChange={(value) => {
                if (value === "any") setSnacksAvailable(null);
                else if (value === "provided") setSnacksAvailable(true);
                else setSnacksAvailable(false);
            }}>
                <div className="flex items-center space-x-2 pt-2">
                    <RadioGroupItem value="any" id="snacks-any" />
                    <Label htmlFor="snacks-any">Any</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="provided" id="snacks-provided" />
                    <Label htmlFor="snacks-provided">Provided</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="not-provided" id="snacks-not-provided" />
                    <Label htmlFor="snacks-not-provided">Not Provided</Label>
                </div>
            </RadioGroup>
        </PopoverContent>
      </Popover>
      
       <Separator orientation="vertical" className="h-8" />

        <Popover open={openPopover === 'eventType'} onOpenChange={(isOpen) => setOpenPopover(isOpen ? 'eventType' : null)}>
            <PopoverTrigger asChild>
            <Button variant="ghost" className="rounded-full h-12 px-6 text-left font-normal flex-col items-start">
                <span className="text-xs font-bold">Event Type</span>
                <span className="text-sm text-muted-foreground">{getEventTypeLabel()}</span>
            </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-4">
                 <h4 className="font-semibold">Event Type</h4>
                <RadioGroup value={selectedEventType || "any"} onValueChange={(value) => setSelectedEventType(value === "any" ? null : value)}>
                     <div className="flex items-center space-x-2 pt-2">
                        <RadioGroupItem value="any" id="type-any" />
                        <Label htmlFor="type-any">Any</Label>
                    </div>
                    {eventTypes.map(type => (
                        <div key={type} className="flex items-center space-x-2">
                            <RadioGroupItem value={type} id={`type-${type}`} />
                            <Label htmlFor={`type-${type}`}>{type}</Label>
                        </div>
                    ))}
                </RadioGroup>
            </PopoverContent>
        </Popover>

      <Separator orientation="vertical" className="h-8" />

        <Button variant="ghost" className="rounded-full h-12 px-6 text-left font-normal flex-col items-start text-muted-foreground">
            <span className="text-xs font-bold">Proximity</span>
            <span>Near me</span>
        </Button>
      
       <Button size="icon" className="rounded-full w-10 h-10 ml-2">
            <Search className="h-5 w-5" />
       </Button>

    </div>
  );
}

    