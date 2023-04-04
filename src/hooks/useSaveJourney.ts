import { saveJourney } from "@/services";
import { Journey } from "@/services/interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useSaveJourney = (scheduleId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (updatedJourney: Journey) => saveJourney(updatedJourney),
    onSuccess: (res, updatedJourney) => {
      queryClient.setQueryData(
        ["journeyList", scheduleId],
        (journeyList: any) => {
          return journeyList?.map((journey: Journey) =>
            journey.journeyId === updatedJourney.journeyId
              ? updatedJourney
              : journey
          );
        }
      );
    },
  });
};
