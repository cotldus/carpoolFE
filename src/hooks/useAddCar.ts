import { createCar } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddCar = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newCar: { [key: string]: any }) => createCar(newCar),
    onSuccess: (res, newCar) => {
      queryClient.setQueryData(["carList"], (carList: any) => {
        const newCarList = carList.concat([
          {
            ...newCar,
            maxPax: parseInt(newCar.maxPax),
          },
        ]);
        return newCarList;
      });
    },
  });
};
