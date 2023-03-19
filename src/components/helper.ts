import { journeyAssignmentPayload, labelObject } from "./interface";

export type Car = {
  name: string;
  pax: number
}

export const dataLabelValueMapper = (data: Car[]) => {
  const labelValueMapped: labelObject[] = data.map((item) => ({
    label: `#${item.name} - ${item.pax} pax`,
    value: item.name,
  }));
  return labelValueMapped;
};

export const passengerMapper = (data: any[]) => {
  const labelValueMapped: labelObject[] = data.map((item) => ({
    label: `${item.groupid} - ${item.pax}`,
    value: item.groupid,
  }));
  return labelValueMapped;
};

export const driverMapper = (data: any[]) => {
  const labelValueMapped: labelObject[] = data.map((item) => ({
    label: item.name,
    value: item.name,
  }));
  return labelValueMapped;
};

export const createData = (
  scheduleId: string,
  date: string,
  time: number,
  pax: number,
  pickup: string[],
  dropoff: string[],
  journeyAssignment: journeyAssignmentPayload[]
) => {
  return {
    scheduleId,
    date,
    time,
    pax,
    pickup,
    dropoff,
    journeyAssignment,
  };
};
