import { AIDemoBox } from "@/components/ai/AIDemoBox";

export default function AISearchPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-headline" style={{color: 'hsl(var(--foreground))'}}>
          TrekTribe AI Search
        </h1>
        <p className="text-lg text-muted-foreground">
          Your personal adventure assistant. Describe your perfect day out, and
          we'll find the events to match.
        </p>
      </div>
      <AIDemoBox />
    </div>
  );
}
