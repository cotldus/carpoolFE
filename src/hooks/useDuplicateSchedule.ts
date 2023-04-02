import { submitSchedule } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDuplicateSchedule = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (previousSchedule: { [key: string]: any }) =>
      submitSchedule(previousSchedule),
    onSuccess: (res, previousSchedule) => {
      queryClient.setQueryData(["ScheduleList"], (scheduleList: any) => {
        return [
          ...(scheduleList as []),
          {
            ...previousSchedule,
            id: res.data.scheduleId,
          },
        ];
      });
    },
  });
};
