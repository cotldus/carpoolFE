import axios from "axios";
import { config } from ".";
import { mockGetScheduleList } from "./mocks";

export const getScheduleList = async () =>
  await axios
    .get("/scheduleList")
    .then((response) => response.data)
    .catch(() => mockGetScheduleList);

export const submitSchedule = async (formJson: {
  [key: string]: FormDataEntryValue;
}) =>
  await axios
    .post("/schedule", formJson, config)
    .then((res) => {
      console.log(res);
      console.log(formJson);
    })
    .catch((e) => {
      console.log(e);
      console.log(formJson);
    });
