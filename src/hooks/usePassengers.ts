import { getGroupsList as getGroupsListService } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const usePassengers = (scheduleId: string) => {
  const getGroupsList = useQuery(["groupsList", scheduleId], () =>
    getGroupsListService(scheduleId)
  );
  return { getGroupsList };
};
