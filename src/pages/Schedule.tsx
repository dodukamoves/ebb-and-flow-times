import { StudioSchedule } from "@/components/StudioSchedule";
import { studiosData } from "@/data/scheduleData";
import oktopusLogo from "@/assets/oktopus-logo.png";
import vortexLogo from "@/assets/vortex-logo.png";

export default function Schedule() {
  const logos = {
    "Oktopus Vake": oktopusLogo,
    "Vortex Saburtalo": vortexLogo,
    "Vortex Dighomi": vortexLogo,
    "Vortex Gldani": vortexLogo,
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <header className="text-center mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Yoga & Pilates Classes Schedule
          </h1>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yoga"></div>
              <span className="text-sm text-muted-foreground">Yoga</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-pilates"></div>
              <span className="text-sm text-muted-foreground">Pilates</span>
            </div>
          </div>
        </header>

        <div className="space-y-4">
          {studiosData.map((studio) => (
            <StudioSchedule
              key={studio.name}
              name={studio.name}
              logo={logos[studio.name as keyof typeof logos]}
              schedule={studio.schedule}
              totalClassesPerWeek={studio.totalClassesPerWeek}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
