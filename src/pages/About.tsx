import { Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export default function About() {
  const highlights = [
    "Works at: Oktopus Fitness, Vortex Fitness, Sevsamora",
    "Over 10 retreats led (150+ participants)",
    "7+ brand collaborations including Fitpass, TBC Concept, Escapers",
    "Certified RYT 500 Yoga Alliance Instructor",
    "Over 3,000+ classes taught"
  ];

  return (
    <div className="min-h-screen bg-background py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroBg}
                alt="Doduka Gureshidze"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Bio */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              About Doduka
            </h1>
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm a certified Yoga and Pilates Instructor with 3+ years of experience 
              and over 3,000 lessons taught. I combine the strength of Pilates with the 
              mindfulness of Yoga, guiding students in studios, private sessions, and 
              retreats with a focus on safe practice, alignment, and wellbeing.
            </p>

            <div className="space-y-3 pt-4">
              {highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-foreground/80">{highlight}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-6">
              <Button
                asChild
                variant="default"
                className="bg-primary hover:bg-primary/90"
              >
                <a
                  href="https://instagram.com/doduka_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  Instagram
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
              >
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
