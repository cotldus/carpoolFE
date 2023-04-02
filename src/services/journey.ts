import { mockJourneyList } from "@/pages/api/mockData/mockJourneyList";
import axios from "axios";
import { config } from ".";
import { Journey, journeyAssignmentPayload } from "./interface";

export const saveJourney = async (
  journey: Journey,
  journeyId: string
) => {
  await axios
    .put(`/journey/save/${journeyId}`, journey, config)
    .then((res) => {
      console.log(res);
      console.log("save", journey);
    })
    .catch((e) => {
      console.log(e);
      console.log("save", journey);
    });

  return Promise.resolve({
    status: 200
  })
};

export const getJourneyList = async (scheduleId: string) =>
  await axios
    .get(`/journeyList/?scheduleId=${scheduleId}`)
    .then((res) => res.data)
    .catch(
      () =>
        mockJourneyList.find((journey) => journey.scheduleId === scheduleId)
          ?.assignment
    );

export const addJourney = (scheduleId: string) => {
  axios
    .patch(`/new/journey/${scheduleId}`)
    .then((response) => response.data)
    .catch((e) => null);
  return Promise.resolve({
    data: Math.floor(Math.random() * 100).toString(),
    status: 200,
  });
};
