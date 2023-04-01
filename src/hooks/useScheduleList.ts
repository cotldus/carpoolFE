import { getScheduleList } from "@/services";
import { mockGetScheduleList } from "@/services/mocks";
import { useQuery } from "@tanstack/react-query";

export const useScheduleList = <T>(mock?: T) => {
  return useQuery({
    queryKey: ["ScheduleList"],
    queryFn: () => getScheduleList(mock),
  });
};
