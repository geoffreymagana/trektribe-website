'use server';

/**
 * @fileOverview AI-powered event search flow.
 *
 * This flow allows users to search for events using natural language.
 *
 * - aiSearchForEvents - A function that handles the event search process.
 * - AISearchForEventsInput - The input type for the aiSearchForEvents function.
 * - AISearchForEventsOutput - The return type for the aiSearchForEvents function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { events } from '@/lib/data';
import type { Partner } from '@/lib/types';

const AISearchForEventsInputSchema = z.object({
  query: z.string().describe('The user query for searching events.'),
});
export type AISearchForEventsInput = z.infer<typeof AISearchForEventsInputSchema>;

const PartnerSchema = z.object({
    name: z.string(),
    avatarUrl: z.string(),
    isVerified: z.boolean().optional(),
    username: z.string().optional(),
});

const EventSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string().describe("A date for the event, like 'Saturday, November 25th'"),
  location: z.string(),
  category: z.enum(["Hike", "Marathon", "Cycling", "Mountain Climb", "Impact"]),
  difficulty: z.enum(["Beginner", "Intermediate", "Advanced"]),
  cause: z.string().optional(),
  partners: z.array(PartnerSchema).optional().describe("A list of partners hosting the event."),
});

const AISearchForEventsOutputSchema = z.object({
  events: z.array(EventSchema).describe('A list of event objects that match the query.'),
});

export type AISearchForEventsOutput = z.infer<typeof AISearchForEventsOutputSchema>;
export type AIEvent = z.infer<typeof EventSchema>;


export async function aiSearchForEvents(input: AISearchForEventsInput): Promise<AISearchForEventsOutput> {
  return aiSearchForEventsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiSearchForEventsPrompt',
  input: {schema: AISearchForEventsInputSchema},
  output: {schema: AISearchForEventsOutputSchema},
  prompt: `You are an AI event search assistant for an app called TrekTribe. The user will provide a query and you will return a list of event objects that match the query. The event description should be concise. Each event should have a title, description, date, location, category, difficulty and any associated partners.

Use the following list of existing events as a reference for the kind of events available. Base your response on these events if they match the query.

Existing Events:
${JSON.stringify(events, null, 2)}

User Query: {{{query}}}`,
});

const aiSearchForEventsFlow = ai.defineFlow(
  {
    name: 'aiSearchForEventsFlow',
    inputSchema: AISearchForEventsInputSchema,
    outputSchema: AISearchForEventsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
