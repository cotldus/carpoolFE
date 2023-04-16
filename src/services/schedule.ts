import { mockScheduleList } from "@/pages/api/mockData/mockJourneyList";
import axios, { AxiosResponse } from "axios";
import { config } from ".";
import { Schedule } from "./interface";

export const getScheduleList = async () =>
  await axios
    .get("/scheduleList")
    .then((response: AxiosResponse<Schedule[]>) => response.data)
    .catch(() => mockScheduleList);

export const submitSchedule = async (formJson: Schedule) => {
  await axios
    .post("/schedule/submit", formJson, config)
    .then((res) => {
      console.log(res);
      console.log(formJson);
      return {
        data: {
          scheduleId: Math.floor(Math.random() * 100).toString(),
        },
      };
    })
    .catch((e) => {
      console.log(e);
      console.log(formJson);
      return {
        data: {
          scheduleId: Math.floor(Math.random() * 100).toString(),
        },
      };
    });
  return Promise.resolve({
    status: 200,
    data: {
      scheduleId: Math.floor(Math.random() * 100).toString(),
    },
  });
};

export const updateSchedule = async (formJson: Schedule) => {
  await axios
    .patch(`/schedule/update/${formJson.scheduleId}`, formJson, config)
    .then((res) => {
      console.log(res);
      console.log(formJson);
    })
    .catch((e) => {
      console.log(e);
      console.log(formJson);
    });

  return Promise.resolve({
    status: 200,
  });
};
export const deleteSchedule = async (id: string) => {
  await axios
    .delete(`/schedule/delete/${id}`, config)
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });

  return Promise.resolve({
    status: 200,
  });
};
