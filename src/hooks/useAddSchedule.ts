import { Schedule } from "@/services/interface";
import { submitSchedule } from "@/services/schedule";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddSchedule = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newSchedule: Schedule) => submitSchedule(newSchedule),
    onSuccess: (res, newSchedule) => {
      const addSchedule = [
        {
          ...newSchedule,
          scheduleId: res.data.scheduleId,
        },
      ];
      queryClient.setQueryData(
        ["ScheduleList"],
        (scheduleList?: Schedule[]) => {
          return scheduleList?.concat(addSchedule) || addSchedule;
        }
      );
    },
  });
};
