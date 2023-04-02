import { getDriverList } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useDriverList = () => {
  return useQuery(["driverList"], getDriverList);
};
