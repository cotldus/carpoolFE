import { Schedule } from "@/services/interface";
import {
  submitSchedule as submitScheduleService,
  getScheduleList as getScheduleListService,
  updateSchedule,
  deleteSchedule as deleteScheduleService,
} from "@/services/index";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";

export const useSchedule = () => {
  const queryClient = useQueryClient();

  const submitSchedule = useMutation({
    mutationFn: (newSchedule: Schedule) => submitScheduleService(newSchedule),
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

  const duplicateSchedule = useMutation({
    mutationFn: (previousSchedule: Schedule) =>
      submitScheduleService(previousSchedule),
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

  const getScheduleList = useQuery({
    queryKey: ["ScheduleList"],
    queryFn: () => getScheduleListService(),
  });

  const editSchedule = useMutation({
    mutationFn: (updatedSchedule: Schedule) => updateSchedule(updatedSchedule),
    onSuccess: (res, updatedSchedule) => {
      queryClient.setQueryData(
        ["ScheduleList"],
        (scheduleList?: Schedule[]) => {
          return scheduleList?.map((schedule: Schedule) =>
            schedule.scheduleId === updatedSchedule.scheduleId
              ? updatedSchedule
              : schedule
          );
        }
      );
    },
  });

  const deleteSchedule = useMutation({
    mutationFn: (id: string) => deleteScheduleService(id),
    onSuccess: (res, id) => {
      queryClient.setQueryData(
        ["ScheduleList"],
        (scheduleList?: Schedule[]) => {
          return (
            scheduleList?.filter(
              (schedule: Schedule) => schedule.scheduleId !== id
            ) || []
          );
        }
      );
    },
  });

  return {
    submitSchedule,
    duplicateSchedule,
    getScheduleList,
    editSchedule,
    deleteSchedule,
  };
};
