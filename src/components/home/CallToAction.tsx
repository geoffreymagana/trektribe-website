import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function CallToAction() {
    const ctaImage = PlaceHolderImages.find((img) => img.id === "cta-background");

  return (
    <section className="relative py-20 md:py-32">
        {ctaImage && (
            <Image
                src={ctaImage.imageUrl}
                alt={ctaImage.description}
                fill
                className="object-cover"
                data-ai-hint={ctaImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-primary/80" />
      <div className="container relative text-center text-primary-foreground">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 font-headline">
          Bring Your Community Outdoors.
          <br />
          Host an Event Today.
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-primary-foreground/80 mb-8">
          Share your passion, build your community, and make an impact. Our platform makes it easy.
        </p>
        <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/partner">Become an Organizer</Link>
        </Button>
      </div>
    </section>
  );
}
