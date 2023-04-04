import { passengerMapper } from "@/components/helper";
import { mockGroupList } from "@/pages/api/mockData/mockGroupList";
import axios, { AxiosResponse } from "axios";
import { group } from "./interface";

export const getGroupsList = async (scheduleId: string) =>
  await axios
    .get(`/groupsList?scheduleId=${scheduleId}`)
    .then((res: AxiosResponse<group[]>) => passengerMapper(res.data))
    .catch(() => passengerMapper(mockGroupList));
