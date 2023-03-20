import { passengerMapper } from "@/components/helper";
import { mockGroupList } from "@/pages/api/mockData/mockGroupList";
import axios from "axios";

export const getGroupsList = async (scheduleId: string) =>
  await axios
    .get(`/groupsList?scheduleId=${scheduleId}`)
    .then((res) => res.data)
    .catch(() => passengerMapper(mockGroupList));
