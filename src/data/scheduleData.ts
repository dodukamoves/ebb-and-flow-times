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

export interface StudioData {
  name: string;
  schedule: DaySchedule[];
  totalClassesPerWeek: number;
}

const yoga = (time: string, name: string, duration = "60min"): ClassSession => ({
  time, name, duration, type: "yoga",
});

const pilates = (time: string, name: string, duration = "45min"): ClassSession => ({
  time, name, duration, type: "pilates",
});

const saburtaloClasses: ClassSession[] = [
  yoga("15:00", "Vinyasa Flow Yoga"),
  pilates("16:00", "Full Body Pilates"),
  yoga("17:00", "Yoga Mix"),
  pilates("18:00", "Power Pilates"),
  pilates("19:00", "Core & Mobility Pilates"),
  yoga("21:00", "Stretching Yoga"),
];

const dighomiMWF: ClassSession[] = [
  yoga("08:00", "Morning Strength Yoga"),
  yoga("09:00", "Vinyasa Flow Yoga"),
  pilates("11:00", "Pilates Power Flow"),
  yoga("13:00", "Stretching Yoga"),
];

const dighomiTTh: ClassSession[] = [
  pilates("11:00", "Full Body Pilates"),
  yoga("12:00", "Stretching Yoga"),
];

const gldaniClasses: ClassSession[] = [
  pilates("16:00", "Pilates Power Flow"),
  yoga("17:00", "Power Yoga"),
  pilates("18:00", "Full Body Pilates"),
  yoga("19:00", "Vinyasa Flow Yoga"),
  pilates("21:00", "Core & Mobility"),
];

export const studiosData: StudioData[] = [
  {
    name: "Vortex Saburtalo",
    totalClassesPerWeek: 12,
    schedule: [
      { day: "Tuesday", classes: saburtaloClasses },
      { day: "Thursday", classes: saburtaloClasses },
    ],
  },
  {
    name: "Vortex Dighomi",
    totalClassesPerWeek: 16,
    schedule: [
      { day: "Monday", classes: dighomiMWF },
      { day: "Tuesday", classes: dighomiTTh },
      { day: "Wednesday", classes: dighomiMWF },
      { day: "Thursday", classes: dighomiTTh },
      { day: "Friday", classes: dighomiMWF },
    ],
  },
  {
    name: "Vortex Gldani",
    totalClassesPerWeek: 15,
    schedule: [
      { day: "Monday", classes: gldaniClasses },
      { day: "Wednesday", classes: gldaniClasses },
      { day: "Friday", classes: gldaniClasses },
    ],
  },
];
