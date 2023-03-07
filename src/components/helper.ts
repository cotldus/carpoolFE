import { journeyAssignmentPayload, labelObject } from "./interface";

export const dataLabelValueMapper = (data: any[]) => {
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
  journeyId: string,
  date: string,
  time: number,
  pax: number,
  pickup: string[],
  dropoff: string[],
  journeyAssignment: journeyAssignmentPayload[]
) => {
  return {
    journeyId,
    date,
    time,
    pax,
    pickup,
    dropoff,
    journeyAssignment,
  };
};
