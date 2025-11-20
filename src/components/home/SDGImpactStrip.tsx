import { HeartPulse, MapPinHouse, Snowflake, Mountain, Handshake } from "lucide-react";

const sdgGoals = [
  { icon: HeartPulse, label: "Good Health & Well-being", sdg: "SDG 3" },
  { icon: MapPinHouse, label: "Sustainable Cities", sdg: "SDG 11" },
  { icon: Snowflake, label: "Climate Action", sdg: "SDG 13" },
  { icon: Mountain, label: "Life on Land", sdg: "SDG 15" },
  { icon: Handshake, label: "Partnerships", sdg: "SDG 17" },
];

export function SDGImpactStrip() {
  return (
    <section className="bg-primary text-primary-foreground py-12">
      <div className="container text-center">
        <h3 className="text-2xl font-bold mb-2">Committed to Global Goals</h3>
        <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Every event on TrekTribe contributes to the UN Sustainable Development Goals.
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {sdgGoals.map((goal) => (
            <div key={goal.label} className="flex flex-col items-center gap-2 text-center w-24">
              <goal.icon className="h-8 w-8" />
              <span className="text-xs font-semibold leading-tight">{goal.label}</span>
              <span className="text-xs text-primary-foreground/60">{goal.sdg}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
