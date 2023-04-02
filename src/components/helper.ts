import { Car } from "@/services/interface";
import { group, journeyAssignmentPayload, labelObject } from "../services/interface";

export const calculatePax = (groups: group[]) =>
  groups.reduce((prev, curr) => prev + (curr?.pax || 0), 0) || 0;

export const dataLabelValueMapper = (data: Car[]) => {
  const labelValueMapped: labelObject[] = data.map((item) => ({
    label: `#${item.carPlateNumber} - ${item.maxPax} pax`,
    value: item.carPlateNumber,
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
