import { getGroupsList } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useGroupsList = (scheduleId: string) => {
  return useQuery(["groupsList", scheduleId], () => getGroupsList(scheduleId));
};
