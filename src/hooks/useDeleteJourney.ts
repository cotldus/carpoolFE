import { deleteJourney } from "@/services/journey";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteJourney = (scheduleId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteJourney(id),
    onSuccess: (res, id) => {
      queryClient.setQueryData(
        ["journeyList", scheduleId],
        (journeyList: any) => {
          return journeyList?.filter((journey: any) => journey.id !== id);
        }
      );
    },
  });
};
