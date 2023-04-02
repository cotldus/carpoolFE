import { Journey } from "@/pages/api/mockData/mockJourneyList";
import { saveJourney } from "@/services";
import { updateSchedule } from "@/services/schedule";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useSaveJourney = (scheduleId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      updatedJourney,
      journeyId,
    }: {
      updatedJourney: {[key: string]: any};
      journeyId: string;
    }) => saveJourney(updatedJourney, journeyId),
    onSuccess: (res, { updatedJourney, journeyId }) => {
      queryClient.setQueryData(
        ["journeyList", scheduleId],
        (journeyList: any) => {
          return journeyList?.map((journey: Journey) =>
            journey.journeyId === journeyId ? updatedJourney : journey
          );
        }
      );
    },
  });
};
