import { dataLabelValueMapper } from "@/components/helper";
import { mockCarplateList } from "@/pages/api/mockData/mockCarplateList";
import axios, { AxiosResponse } from "axios";
import { config } from ".";
import { Car } from "./interface";

export const createCar = async (formJson: Car) => {
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

  return Promise.resolve({
    status: 200,
  });
};

export const getCarList = async () =>
  await axios
    .get("/carList")
    .then((res: AxiosResponse<Car[]>) => dataLabelValueMapper(res.data))
    .catch(() => dataLabelValueMapper(mockCarplateList));
