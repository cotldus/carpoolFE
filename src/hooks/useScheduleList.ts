import { getScheduleList } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useScheduleList = () => {
  return useQuery({
    queryKey: ["ScheduleList"],
    queryFn: () => getScheduleList(),
  });
};
