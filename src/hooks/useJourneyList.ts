import { getJourneyList } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useJourneyList = (scheduleId: string) => {
  return useQuery({
    queryKey: ["journeyList", scheduleId],
    queryFn: () => getJourneyList(scheduleId),
  });
};
