import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedEvents } from "@/components/home/FeaturedEvents";
import { HowItWorks } from "@/components/home/HowItWorks";
import { SDGImpactStrip } from "@/components/home/SDGImpactStrip";
import { CallToAction } from "@/components/home/CallToAction";
import { Testimonials } from "@/components/shared/Testimonials";
import { AIDemoBox } from "@/components/ai/AIDemoBox";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <section className="py-16 md:py-24">
        <div className="container">
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
      </section>
      <FeaturedEvents />
      <HowItWorks />
      <Testimonials />
      <SDGImpactStrip />
      <CallToAction />
    </div>
  );
}
