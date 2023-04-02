import { updateSchedule } from "@/services/schedule";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateSchedule = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (updatedSchedule: { [key: string]: any }) =>
      updateSchedule(updatedSchedule),
    onSuccess: (res, updatedSchedule) => {
      queryClient.setQueryData(["ScheduleList"], (scheduleList: any) => {
        return scheduleList?.map((schedule: { [key: string]: any }) =>
          schedule.id === updatedSchedule.id ? updatedSchedule : schedule
        );
      });
    },
  });
};
