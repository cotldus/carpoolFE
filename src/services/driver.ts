import { driverMapper } from "@/components/helper";
import { mockDriverList } from "@/pages/api/mockData/mockDriverList";
import axios from "axios";

export const getDriverList = async () =>
  await axios
    .get("/driverList")
    .then((res) => res.data)
    .catch(() => driverMapper(mockDriverList));
