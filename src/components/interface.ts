import { Car } from "./helper";

export type labelObject = { label?: string; value?: string };

export type journeyAssignmentPayload = {
  journeyId?: string;
  car?: Car;
  driver?: string;
  groups?: group[];
  groupPax?: number;
};

export type group = {
  groupid: string;
  pax: number;
} | undefined;

export type mockJourneyList = {
  scheduleId: string;
  date: string;
  time: number;
  totalPax: number;
  pickup: string[];
  dropoff: string[];
  assignment: journeyAssignmentPayload[];
};
