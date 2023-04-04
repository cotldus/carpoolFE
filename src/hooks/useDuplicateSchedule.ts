import { submitSchedule } from "@/services";
import { Schedule } from "@/services/interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDuplicateSchedule = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (previousSchedule: Schedule) =>
      submitSchedule(previousSchedule),
    onSuccess: (res, previousSchedule) => {
      queryClient.setQueryData(
        ["ScheduleList"],
        (scheduleList?: Schedule[]) => {
          const newSchedule = {
            ...previousSchedule,
            scheduleId: res.data.scheduleId,
          };
          return [...(scheduleList as []), newSchedule];
        }
      );
    },
  });
};
