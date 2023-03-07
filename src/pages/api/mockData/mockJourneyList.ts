export const mockJourneyList = [
  {
    journeyId: "12",
    date: "26/02/23",
    time: 1900,
    totalPax: 16,
    pickup: ["Tmn Megah De Taste", "BT36 KFC"],
    dropoff: ["JE - Jurong East", "YS - Yishun", "PYLB - Paya Lebar"],
    assignment: [
      {
        driver: "Ji-Eun (IU)",
        car: "HD1234",
        groupId: "3",
        groupPax: 4,
      },
      {
        driver: "",
        car: "D1234HS",
        groupId: "5",
        groupPax: 2,
      },
    ],
  },
  {
    journeyId: "456",
    date: "26/02/23",
    time: 1900,
    totalPax: 16,
    pickup: ["Tmn Megah De Taste", "BT36 KFC"],
    dropoff: ["JE - Jurong East", "YS - Yishun", "PYLB - Paya Lebar"],
    assignment: [],
  },
];

export const submitJourney = {
  journeyId: "213",
  driver: "Ivan",
  car: "D1234HS",
  groupId: "5",
};
