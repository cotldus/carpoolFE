export type labelObject = { label?: string; value?: string; category?: string };

export enum JourneyFields {
  JOURNEYID = "journeyId",
  CAR = "car",
  DRIVER = "driver",
  GROUPS = "groups",
  PAX = "pax",
}

export type Journey = {
  [JourneyFields.JOURNEYID]?: string;
  [JourneyFields.CAR]?: Car;
  [JourneyFields.DRIVER]?: string;
  [JourneyFields.GROUPS]?: group[];
  [JourneyFields.PAX]?: number;
};

export type group =
  | {
      groupid: string;
      pax: number;
    }
  | undefined;

export type Car = {
  carPlateNumber: string;
  maxPax: number;
};

export interface CarPlateList {
  inputValue?: string;
  label: string;
  value?: string;
}

export type Driver = {
  name: string;
};

export type Schedule = {
  scheduleId: string;
  date: string;
  time: string;
  dropoff: string[];
  totalPax: number;
  pickup: string[];
  journeyToAndFrom?: string;
};

export type ShowSchedule = {
  scheduleId: string;
  date: string;
  time: string;
  dropoff: labelObject[];
  totalPax: number;
  pickup: labelObject[];
};
