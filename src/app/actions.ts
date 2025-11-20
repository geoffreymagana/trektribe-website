"use server";

import { aiSearchForEvents, AISearchForEventsOutput, AIEvent } from "@/ai/flows/ai-search-for-events";
import { z } from "zod";

const searchSchema = z.object({
  query: z.string().min(10, { message: "Query must be at least 10 characters." }),
});

export type SearchState = {
  message: string;
  events?: AIEvent[];
  fieldErrors?: Record<string, string[] | undefined>;
};

export async function searchEventsAction(
  prevState: SearchState,
  formData: FormData
): Promise<SearchState> {
  const validatedFields = searchSchema.safeParse({
    query: formData.get("query"),
  });

  if (!validatedFields.success) {
    return {
      message: "Please fix the errors below.",
      fieldErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result: AISearchForEventsOutput = await aiSearchForEvents({ query: validatedFields.data.query });

    if (result.events && result.events.length > 0) {
        return { message: "Here are some events we found for you:", events: result.events };
    } else {
        return { message: "We couldn't find any events matching your query. Please try being more specific." };
    }
  } catch (error) {
    console.error(error);
    return { message: "An unexpected error occurred. Please try again later." };
  }
}
