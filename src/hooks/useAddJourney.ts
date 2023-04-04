import { addJourney } from "@/services";
import { Journey } from "@/services/interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useAddJourney = (scheduleId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => addJourney(scheduleId),
    onSuccess: (res) => {
      queryClient.setQueryData(
        ["journeyList", scheduleId],
        (journeyList?: Journey[]) => {
          return [
            ...(journeyList as []),
            {
              driver: "",
              car: {
                carPlateNumber: "",
                maxPax: 0,
              },
              groups: [],
              journeyId: res.data.journeyId,
            },
          ];
        }
      );
    },
  });
};
