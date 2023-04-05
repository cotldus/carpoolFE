import { Journey } from "@/services/interface";
import {
    addJourney as addJourneyService, deleteJourney as deleteJourneyService, getJourneyList as getJourneyListService,
    saveJourney as saveJourneyService
} from "@/services/journey";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useJourney = (scheduleId: string) => {
  const queryClient = useQueryClient();

  const addJourney = useMutation({
    mutationFn: () => addJourneyService(scheduleId),
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

  const getJourneyList = useQuery({
    queryKey: ["journeyList", scheduleId],
    queryFn: () => getJourneyListService(scheduleId),
  });

  const saveJourney = useMutation({
    mutationFn: (updatedJourney: Journey) => saveJourneyService(updatedJourney),
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

  const deleteJourney = useMutation({
    mutationFn: (id: string) => deleteJourneyService(id),
    onSuccess: (res, id) => {
      queryClient.setQueryData(
        ["journeyList", scheduleId],
        (journeyList?: Journey[]) => {
          return journeyList?.filter(
            (journey: Journey) => journey.journeyId !== id
          );
        }
      );
    },
  });

  return {
    addJourney,
    getJourneyList,
    saveJourney,
    deleteJourney,
  };
};
