import { createCar } from "@/services";
import { Car } from "@/services/interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddCar = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newCar: Car) => createCar(newCar),
    onSuccess: (res, newCar) => {
      queryClient.setQueryData(["carList"], (carList?: Car[]) => {
        const newCarList = carList?.concat([newCar]) || [newCar];
        return newCarList;
      });
    },
  });
};
