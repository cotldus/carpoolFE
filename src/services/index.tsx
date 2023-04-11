import { createCar, getCarList } from "./car";
import { getDriverList } from "./driver";
import { addJourney, getJourneyList, saveJourney } from "./journey";
import { getGroupsList } from "./passenger";
import {
  getScheduleList,
  submitSchedule,
  updateSchedule,
  deleteSchedule,
} from "./schedule";
import { createUser } from "./user";

export const config = {
  headers: {
    "key": "Access-Control-Allow-Headers",
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, PUT, POST",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Credentials": true,
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
  deleteSchedule,
  createUser,
};
