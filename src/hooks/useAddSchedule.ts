import { submitSchedule } from "@/services/schedule";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddSchedule = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newSchedule: { [key: string]: any }) =>
      submitSchedule(newSchedule),
    onSuccess: (res, newSchedule) => {
      queryClient.setQueryData(["ScheduleList"], (scheduleList: any) => {
        return scheduleList.concat([
          {
            ...newSchedule,
            id: res.data.scheduleId,
          },
        ]);
      });
    },
  });
};
