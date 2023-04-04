import { CarPlateList } from "./interface";

export const driverList = [
  { label: "Ronald MacDonald" },
  { label: "Anwar Ibrahim" },
  { label: "Ivan The Terrible" },
  { label: "Bobby MacFly" },
  { label: "Lee Ji-eun" },
].map((suggestion) => ({
  value: suggestion.label,
  label: suggestion.label,
}));

export const carplateList: readonly CarPlateList[] = [
  { label: "ABC123", value: "ABC123" },
  { label: "DEF456", value: "DEF456" },
  { label: "GHI789", value: "GHI789" },
  { label: "JKL012", value: "JKL012" },
  { label: "MNO345", value: "MNO345" },
  { label: "PQR678", value: "PQR678" },
  { label: "STU901", value: "STU901" },
  { label: "VWX234z", value: "VWX234" },
  { label: "YZA567", value: "YZA567" },
  { label: "BCD890", value: "BCD890" },
  { label: "EFG123", value: "EFG123" },
  { label: "HIJ456", value: "HIJ456" },
  { label: "KLM789", value: "KLM789" },
  { label: "NOP012", value: "NOP012" },
  { label: "QRS345", value: "QRS345" },
  { label: "TUV678", value: "TUV678" },
  { label: "WXY901", value: "WXY901" },
  { label: "ZAB234", value: "ZAB234" },
  { label: "CDE567", value: "CDE567" },
  { label: "FGH890", value: "FGH890" },
];
