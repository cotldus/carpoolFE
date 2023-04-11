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

export enum CarFields {
  CARPLATE_NUMBER = "carPlateNumber",
  MAX_PAX = "maxPax",
}

export type Car = {
  [CarFields.CARPLATE_NUMBER]: string;
  [CarFields.MAX_PAX]: number;
};

export interface CarPlateList {
  inputValue?: string;
  label: string;
  value?: string;
}

export type Driver = {
  name: string;
};

export enum ScheduleFields {
  SCHEDULEID = "scheduleId",
  DATE = "date",
  TIME = "time",
  DROPOFF = "dropoff",
  TOTALPAX = "totalPax",
  PICKUP = "pickup",
  DIRECTION = "journeyToAndFrom",
}

export type Schedule = {
  [ScheduleFields.SCHEDULEID]: string;
  [ScheduleFields.DATE]: string;
  [ScheduleFields.TIME]: string;
  [ScheduleFields.DROPOFF]: string[];
  [ScheduleFields.TOTALPAX]: number;
  [ScheduleFields.PICKUP]: string[];
  [ScheduleFields.DIRECTION]?: string;
};

export type ScheduleForm = {
  [ScheduleFields.SCHEDULEID]: string;
  [ScheduleFields.DATE]: string;
  [ScheduleFields.TIME]: string;
  [ScheduleFields.DROPOFF]: string;
  [ScheduleFields.TOTALPAX]: number;
  [ScheduleFields.PICKUP]: string;
};

export enum User {
  USER_NAME = "username",
  PASSWORD = "password",
  CONTACT_NUMBER = "contact_number",
  ROLE = "role",
}

export type CreateUser = {
  [User.USER_NAME]: string;
  [User.PASSWORD]: string;
  [User.CONTACT_NUMBER]: string;
  [User.ROLE]: string;
};
