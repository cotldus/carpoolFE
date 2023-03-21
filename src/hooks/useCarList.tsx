import { getCarList } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useCarList = () => {
  return useQuery(["carList"], getCarList);
};
