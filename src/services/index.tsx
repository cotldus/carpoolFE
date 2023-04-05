import { createCar, getCarList } from "./car";
import { getDriverList } from "./driver";
import { addJourney, getJourneyList, saveJourney } from "./journey";
import { getGroupsList } from "./passenger";
import { getScheduleList, submitSchedule, updateSchedule, deleteSchedule } from "./schedule";

export const config = {
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

export {
  createCar,
  getCarList,
  getDriverList,
  getGroupsList,
  saveJourney,
  getJourneyList,
  addJourney,
  getScheduleList,
  submitSchedule,
  updateSchedule,
  deleteSchedule
};
