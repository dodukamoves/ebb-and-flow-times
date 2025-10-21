import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ClassSession {
  time: string;
  name: string;
  duration: string;
  type: "yoga" | "pilates";
}

interface DaySchedule {
  day: string;
  classes: ClassSession[];
}

interface StudioScheduleProps {
  name: string;
  logo: string;
  schedule: DaySchedule[];
  totalClassesPerWeek: number;
}

export const StudioSchedule = ({
  name,
  logo,
  schedule,
  totalClassesPerWeek,
}: StudioScheduleProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="schedule" className="border-none">
        <div className="bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-border">
          <AccordionTrigger className="px-6 py-5 hover:no-underline group">
            <div className="flex items-center gap-4 w-full">
              <div className="w-14 h-14 rounded-xl bg-background flex items-center justify-center flex-shrink-0 shadow-sm p-2">
                <img
                  src={logo}
                  alt={`${name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {name}
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {totalClassesPerWeek} classes/week
                </p>
              </div>
            </div>
          </AccordionTrigger>
          
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4 mt-2">
              {schedule.map((day) => (
                <div key={day.day} className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                    {day.day}
                  </h4>
                  <div className="space-y-2">
                    {day.classes.map((classItem, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                          classItem.type === "yoga"
                            ? "bg-yoga/10 border border-yoga/20"
                            : "bg-pilates/10 border border-pilates/20"
                        }`}
                      >
                        <span className="text-sm font-medium text-foreground min-w-[60px]">
                          {classItem.time}
                        </span>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">
                            {classItem.name}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {classItem.duration}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </div>
      </AccordionItem>
    </Accordion>
  );
};
