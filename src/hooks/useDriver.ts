import { getDriverList as getDriverListService } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useDriver = () => {
  const getDriverList = useQuery(["driverList"], getDriverListService);
  return { getDriverList };
};
