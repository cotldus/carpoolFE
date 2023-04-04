export type labelObject = { label?: string; value?: string; category?: string };

export type Journey = {
  journeyId?: string;
  car?: Car;
  driver?: string;
  groups?: group[];
  pax?: number;
};

export type journeyAssignmentPayload = {
  journeyId?: string;
  car?: Car;
  driver?: string;
  groups?: group[];
  groupPax?: number;
};

export type group =
  | {
      groupid: string;
      pax: number;
    }
  | undefined;

export type mockJourneyList = {
  scheduleId: string;
  date: string;
  time: number;
  totalPax: number;
  pickup: string[];
  dropoff: string[];
  assignment: journeyAssignmentPayload[];
};

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
};

export type ShowSchedule = {
  scheduleId: string;
  date: string;
  time: string;
  dropoff: string;
  totalPax: number;
  pickup: string;
};
