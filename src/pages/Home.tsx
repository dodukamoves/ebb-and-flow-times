import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroBg from "@/assets/hero-bg.jpg";
import { Star, Users, Award } from "lucide-react";

export default function Home() {
  const stats = [
    { icon: Star, value: "4.9 ⭐", label: "Average Rating" },
    { icon: Award, value: "30+", label: "Successful Collaborations" },
    { icon: Users, value: "3.5k+", label: "Happy Students" },
  ];

  const partners = [
    "Fitpass", "Vortex", "Sevsamora", "TBC Concept", "Oktopus", "Escapers"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            შენი ჯანსაღი თავდაჯერებული სხეული აქ იწყება
          </h1>
          <p className="text-lg sm:text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
            ონლაინ გაკვეთილები, იოგა და პილატეს რიტრეტები — ყველა ერთ ადგილზე.
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6">
            დაიწყე ახლა
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <Card key={idx} className="text-center border-none shadow-sm">
                <CardContent className="pt-8 pb-8">
                  <stat.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
            Watch My Free Flows on YouTube
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((idx) => (
              <div key={idx} className="aspect-video bg-muted rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  YouTube Video {idx}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-10">
            Trusted by Leading Brands
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            {partners.map((partner, idx) => (
              <div key={idx} className="text-lg font-semibold text-muted-foreground">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
