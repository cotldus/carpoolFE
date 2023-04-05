import { createCar } from "@/services";
import { Car } from "@/services/interface";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCarList } from "@/services";

export const useCar = () => {
  const queryClient = useQueryClient();

  const addCar = useMutation({
    mutationFn: (newCar: Car) => createCar(newCar),
    onSuccess: (res, newCar) => {
      queryClient.setQueryData(["carList"], (carList?: Car[]) => {
        const newCarList = carList?.concat([newCar]) || [newCar];
        return newCarList;
      });
    },
  });

  const retrieveCarList = useQuery(["carList"], getCarList);

  return {
    addCar,
    retrieveCarList
  };
};
