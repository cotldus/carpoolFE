import { mockSchedule12Journeys } from "@/pages/api/mockData/mockJourneyList";
import axios, { AxiosResponse } from "axios";
import { config } from ".";
import { Journey } from "./interface";

export const saveJourney = async (journey: Journey) => {
  await axios
    .put(`/journey/save/${journey.journeyId}`, journey, config)
    .then((res) => {
      console.log(res);
      console.log("save", journey);
    })
    .catch((e) => {
      console.log(e);
      console.log("save", journey);
    });

  return Promise.resolve({
    status: 200,
  });
};

export const getJourneyList = async (scheduleId: string) =>
  await axios
    .get(`/journeyList/?scheduleId=${scheduleId}`)
    .then((res: AxiosResponse<Journey[]>) => res.data)
    .catch(() => (scheduleId === "12" ? mockSchedule12Journeys : []));

export const addJourney = (scheduleId: string) => {
  axios
    .patch(`/journey/new/${scheduleId}`)
    .then((response: AxiosResponse<{ journeyId: string }>) => response.data)
    .catch((e) => null);
  return Promise.resolve({
    data: {
      journeyId: Math.floor(Math.random() * 100).toString(),
    },
    status: 200,
  });
};

export const deleteJourney = async (id: string) => {
  await axios
    .delete(`/journey/delete/${id}`, config)
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
