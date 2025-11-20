import Image from "next/image";
import { Card } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function MapSection() {
    const mapImage = PlaceHolderImages.find((img) => img.id === "explore-map");

  return (
    <Card className="w-full h-[80vh] overflow-hidden">
        {mapImage && (
            <div className="relative w-full h-full">
                <Image
                    src={mapImage.imageUrl}
                    alt={mapImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={mapImage.imageHint}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <p className="text-white text-2xl font-bold p-4 bg-black/50 rounded-lg">Map View Coming Soon</p>
                </div>
            </div>
        )}
    </Card>
  );
}
