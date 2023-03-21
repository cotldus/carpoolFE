import { addJourney } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddJourney = (scheduleId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => addJourney(scheduleId),
    onSuccess: (res) => {
      queryClient.setQueryData(
        ["journeyList", scheduleId],
        (journeyList: any) => {
          return [
            ...(journeyList as []),
            {
              driver: "",
              car: {
                name: "",
                pax: 0,
              },
              groups: [],
              journeyId: res.data,
            },
          ];
        }
      );
    },
  });
};
