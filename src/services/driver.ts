import { driverMapper } from "@/components/helper";
import { mockDriverList } from "@/pages/api/mockData/mockDriverList";
import axios, { AxiosResponse } from "axios";
import { Driver } from "./interface";

export const getDriverList = async () =>
  await axios
    .get("/driverList")
    .then((res: AxiosResponse<Driver[]>) => driverMapper(res.data))
    .catch(() => driverMapper(mockDriverList));
