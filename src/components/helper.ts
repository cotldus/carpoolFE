import { Car, Driver } from "@/services/interface";
import {
  group, labelObject
} from "../services/interface";

export const calculatePax = (groups: group[]) =>
  groups.reduce((prev, curr) => prev + (curr?.pax || 0), 0) || 0;

export const dataLabelValueMapper = (data: Car[]) => {
  const labelValueMapped: labelObject[] = data?.map((item) => ({
    label: `#${item.carPlateNumber} - ${item.maxPax} pax`,
    value: item.carPlateNumber,
  }));
  return labelValueMapped;
};

export const stringLabelValueMapper = (values: string[]) => values.map(value => ({
  label: value,
  value
}))

export const passengerMapper = (data: group[]) => {
  const labelValueMapped: labelObject[] = data.map((item) => ({
    label: `${item?.groupid} - ${item?.pax}`,
    value: item?.groupid,
  }));
  return labelValueMapped;
};

export const driverMapper = (data: Driver[]) => {
  const labelValueMapped: labelObject[] = data.map((item) => ({
    label: item.name,
    value: item.name,
  }));
  return labelValueMapped;
};
