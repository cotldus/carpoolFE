import { deleteSchedule } from "@/services/schedule";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteSchedule = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteSchedule(id),
    onSuccess: (res, id) => {
      queryClient.setQueryData(["ScheduleList"], (scheduleList: any) => {
        return scheduleList?.filter((schedule: any) => schedule.id !== id);
      });
    },
  });
};
