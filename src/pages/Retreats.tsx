import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Retreats() {
  const retreats = [
    {
      title: "Yoga at Ayia Napa",
      location: "Cyprus",
      description: "A transformative week of yoga, meditation, and wellness by the Mediterranean sea.",
    },
    {
      title: "Mountain Retreat",
      location: "Georgia",
      description: "Experience yoga in the stunning Caucasus mountains with breathtaking views.",
    },
    {
      title: "Beach Wellness Escape",
      location: "Greece",
      description: "Combine daily yoga practice with beach relaxation and Greek hospitality.",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Yoga & Pilates Retreats
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join transformative retreats in beautiful locations around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {retreats.map((retreat, idx) => (
            <Card key={idx} className="shadow-lg hover:shadow-xl transition-shadow border-none overflow-hidden group">
              <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-500"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {retreat.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  📍 {retreat.location}
                </p>
                <p className="text-muted-foreground mb-6">
                  {retreat.description}
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
