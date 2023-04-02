import { dataLabelValueMapper } from "@/components/helper";
import { mockCarplateList } from "@/pages/api/mockData/mockCarplateList";
import axios from "axios";
import { config } from ".";

export const createCar = async (formJson: {
  [key: string]: FormDataEntryValue;
}) =>
  await axios
    .post("/car/create", formJson, config)
    .then((res) => {
      console.log(res);
      console.log(formJson);
    })
    .catch((e) => {
      console.log(e);
      console.log(formJson);
    });

export const getCarList = async () =>
  await axios
    .get("/carList")
    .then((res) => res.data)
    .catch(() => dataLabelValueMapper(mockCarplateList));
