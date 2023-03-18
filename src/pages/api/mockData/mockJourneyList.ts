import { mockJourneyList as MockJourneyList } from "../../../components/interface";
export const mockJourneyList: MockJourneyList[] = [
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
        car: {
          name: "HD1234",
          pax: 10,
        },
        groups: [
          {
            groupid: "3",
            pax: 4,
          },
        ],
      },
      {
        driver: "",
        car: {
          name: "D1234HS",
          pax: 10,
        },
        groups: [
          {
            groupid: "5",
            pax: 2,
          },
        ],
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
  groupid: "5",
};
