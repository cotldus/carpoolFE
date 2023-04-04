import {
  Journey,
  mockJourneyList as MockJourneyList,
  Schedule,
} from "../../../services/interface";

export const mockScheduleList: Schedule[] = [
  {
    scheduleId: "12",
    date: "2023-06-02",
    time: "19:00",
    totalPax: 16,
    pickup: ["Tmn Megah De Taste", "BT36 KFC"],
    dropoff: ["JE - Jurong East", "YS - Yishun", "PYLB - Paya Lebar"],
    journeyToAndFrom: "MY-SG",
  },
  {
    scheduleId: "456",
    date: "2023-02-26",
    time: "19:00",
    totalPax: 16,
    pickup: ["Tmn Megah De Taste", "BT36 KFC"],
    dropoff: ["JE - Jurong East", "YS - Yishun", "PYLB - Paya Lebar"],
    journeyToAndFrom: "MY-SG",
  },
  {
    scheduleId: "159",
    date: "2023-06-22",
    time: "10:30",
    totalPax: 24,
    pickup: ["Tmn Megah De Taste", "BT36 KFC"],
    dropoff: ["JE - Jurong East", "YS - Yishun", "PYLB - Paya Lebar"],
    journeyToAndFrom: "MY-SG",
  },
  {
    scheduleId: "156",
    date: "2023-06-21",
    time: "10:30",
    totalPax: 24,
    pickup: ["Tmn Megah De Taste", "BT36 KFC"],
    dropoff: ["JE - Jurong East", "YS - Yishun", "PYLB - Paya Lebar"],
    journeyToAndFrom: "MY-SG",
  },
  {
    scheduleId: "124",
    date: "2023-06-25",
    time: "10:30",
    totalPax: 67,
    pickup: ["Tmn Megah De Taste"],
    dropoff: ["JE - Jurong East", "YS - Yishun", "PYLB - Paya Lebar"],
    journeyToAndFrom: "MY-SG",
  },
  {
    scheduleId: "175",
    date: "2023-06-10",
    time: "10:30",
    totalPax: 67,
    pickup: ["Tmn Megah De Taste"],
    dropoff: ["JE - Jurong East", "YS - Yishun", "PYLB - Paya Lebar"],
    journeyToAndFrom: "MY-SG",
  },
];

export const submitJourney = {
  journeyId: "213",
  driver: "Ivan",
  car: "D1234HS",
  groupid: "5",
};

export const mockSchedule12Journeys: Journey[] = [
  {
    journeyId: "34",
    driver: "Ji-Eun (IU)",
    car: {
      carPlateNumber: "HD1234",
      maxPax: 10,
    },
    groups: [
      {
        groupid: "3",
        pax: 4,
      },
    ],
  },
  {
    journeyId: "28",
    driver: "",
    car: {
      carPlateNumber: "D1234HS",
      maxPax: 10,
    },
    groups: [
      {
        groupid: "5",
        pax: 2,
      },
    ],
  },
];
