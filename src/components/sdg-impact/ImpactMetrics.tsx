import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const metrics = [
  { title: "Total Events Hosted", value: "1,200+" },
  { title: "Causes Supported", value: "85" },
  { title: "Community Kilometers", value: "50,000+" },
  { title: "Volunteer Hours Logged", value: "8,500+" },
];

export function ImpactMetrics() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Impact in Numbers</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Together, we're making a measurable difference.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <Card key={metric.title} className="text-center border-none shadow-none bg-transparent">
              <CardHeader>
                <CardTitle className="text-muted-foreground font-medium text-base">
                  {metric.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-5xl font-extrabold text-primary">
                  {metric.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
