import axios from "axios";
import { config } from ".";

export const getScheduleList = async <T>(mock: T): Promise<T> =>
  await axios
    .get("/scheduleList")
    .then((response) => response.data)
    .catch(() => mock);

export const submitSchedule = async (formJson: {
  [key: string]: FormDataEntryValue;
}) =>
  await axios
    .post("/schedule/submit", formJson, config)
    .then((res) => {
      console.log(res);
      console.log(formJson);
      return {
        data: {
          scheduleId: "828282",
        },
      };
    })
    .catch((e) => {
      console.log(e);
      console.log(formJson);
      return {
        data: {
          scheduleId: "828282",
        },
      };
    });

export const updateSchedule = async (formJson: {
  [key: string]: FormDataEntryValue;
}) => {
  await axios
    .patch(`/schedule/update/${formJson.id}`, formJson, config)
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
