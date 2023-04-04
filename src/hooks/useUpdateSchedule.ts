import { Schedule } from "@/services/interface";
import { updateSchedule } from "@/services/schedule";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateSchedule = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (updatedSchedule: Schedule) => updateSchedule(updatedSchedule),
    onSuccess: (res, updatedSchedule) => {
      queryClient.setQueryData(["ScheduleList"], (scheduleList?: Schedule[]) => {
        return scheduleList?.map((schedule: Schedule) =>
          schedule.scheduleId === updatedSchedule.scheduleId
            ? updatedSchedule
            : schedule
        );
      });
    },
  });
};
