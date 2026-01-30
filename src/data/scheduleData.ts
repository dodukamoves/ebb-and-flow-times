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

const getClassType = (name: string): "yoga" | "pilates" => {
  return name.toLowerCase().includes("pilates") ? "pilates" : "yoga";
};

export const studiosData: StudioData[] = [
  {
    name: "12 Rounds",
    totalClassesPerWeek: 2,
    schedule: [
      {
        day: "Tuesday",
        classes: [
          {
            time: "11:30",
            name: "Vinyasa Flow Yoga",
            duration: "60min",
            type: "yoga",
          },
        ],
      },
      {
        day: "Thursday",
        classes: [
          {
            time: "11:30",
            name: "Vinyasa Flow Yoga",
            duration: "60min",
            type: "yoga",
          },
        ],
      },
    ],
  },
  {
    name: "Oktopus Vake",
    totalClassesPerWeek: 2,
    schedule: [
      {
        day: "Tuesday",
        classes: [
          {
            time: "13:15",
            name: "Intensive Pilates",
            duration: "45min",
            type: "pilates",
          },
        ],
      },
      {
        day: "Thursday",
        classes: [
          {
            time: "13:15",
            name: "Yoga & Sadhu Board",
            duration: "60min",
            type: "yoga",
          },
        ],
      },
    ],
  },
  {
    name: "Vortex Saburtalo",
    totalClassesPerWeek: 8,
    schedule: [
      {
        day: "Tuesday",
        classes: [
          {
            time: "15:00",
            name: "Vinyasa Flow Yoga",
            duration: "60min",
            type: "yoga",
          },
          {
            time: "18:00",
            name: "Pilates",
            duration: "45min",
            type: "pilates",
          },
          {
            time: "19:00",
            name: "Pilates",
            duration: "45min",
            type: "pilates",
          },
          {
            time: "21:00",
            name: "Stretching Yoga",
            duration: "60min",
            type: "yoga",
          },
        ],
      },
      {
        day: "Thursday",
        classes: [
          {
            time: "15:00",
            name: "Vinyasa Flow Yoga",
            duration: "60min",
            type: "yoga",
          },
          {
            time: "18:00",
            name: "Pilates",
            duration: "45min",
            type: "pilates",
          },
          {
            time: "19:00",
            name: "Pilates",
            duration: "45min",
            type: "pilates",
          },
          {
            time: "21:00",
            name: "Stretching Yoga",
            duration: "60min",
            type: "yoga",
          },
        ],
      },
    ],
  },
  {
    name: "Vortex Dighomi",
    totalClassesPerWeek: 13,
    schedule: [
      {
        day: "Monday",
        classes: [
          {
            time: "08:00",
            name: "Vinyasa Flow Yoga",
            duration: "60min",
            type: "yoga",
          },
          {
            time: "09:00",
            name: "Vinyasa Flow Yoga",
            duration: "60min",
            type: "yoga",
          },
          {
            time: "11:00",
            name: "Pilates",
            duration: "45min",
            type: "pilates",
          },
        ],
      },
      {
        day: "Tuesday",
        classes: [
          {
            time: "08:00",
            name: "Pilates",
            duration: "45min",
            type: "pilates",
          },
          {
            time: "09:00",
            name: "Power Yoga",
            duration: "60min",
            type: "yoga",
          },
        ],
      },
      {
        day: "Wednesday",
        classes: [
          {
            time: "08:00",
            name: "Vinyasa Flow Yoga",
            duration: "60min",
            type: "yoga",
          },
          {
            time: "09:00",
            name: "Vinyasa Flow Yoga",
            duration: "60min",
            type: "yoga",
          },
          {
            time: "11:00",
            name: "Pilates",
            duration: "45min",
            type: "pilates",
          },
        ],
      },
      {
        day: "Thursday",
        classes: [
          {
            time: "08:00",
            name: "Pilates",
            duration: "45min",
            type: "pilates",
          },
          {
            time: "09:00",
            name: "Power Yoga",
            duration: "60min",
            type: "yoga",
          },
        ],
      },
      {
        day: "Friday",
        classes: [
          {
            time: "08:00",
            name: "Vinyasa Flow Yoga",
            duration: "60min",
            type: "yoga",
          },
          {
            time: "09:00",
            name: "Vinyasa Flow Yoga",
            duration: "60min",
            type: "yoga",
          },
          {
            time: "11:00",
            name: "Pilates",
            duration: "45min",
            type: "pilates",
          },
        ],
      },
    ],
  },
  {
    name: "Vortex Gldani",
    totalClassesPerWeek: 9,
    schedule: [
      {
        day: "Monday",
        classes: [
          {
            time: "18:00",
            name: "Pilates",
            duration: "45min",
            type: "pilates",
          },
          {
            time: "19:00",
            name: "Vinyasa Flow Yoga",
            duration: "60min",
            type: "yoga",
          },
          {
            time: "21:00",
            name: "Pilates",
            duration: "45min",
            type: "pilates",
          },
        ],
      },
      {
        day: "Wednesday",
        classes: [
          {
            time: "18:00",
            name: "Pilates",
            duration: "45min",
            type: "pilates",
          },
          {
            time: "19:00",
            name: "Vinyasa Flow Yoga",
            duration: "60min",
            type: "yoga",
          },
          {
            time: "21:00",
            name: "Pilates",
            duration: "45min",
            type: "pilates",
          },
        ],
      },
      {
        day: "Friday",
        classes: [
          {
            time: "18:00",
            name: "Pilates",
            duration: "45min",
            type: "pilates",
          },
          {
            time: "19:00",
            name: "Vinyasa Flow Yoga",
            duration: "60min",
            type: "yoga",
          },
          {
            time: "21:00",
            name: "Pilates",
            duration: "45min",
            type: "pilates",
          },
        ],
      },
    ],
  },
];
