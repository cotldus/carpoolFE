import axios, { AxiosResponse } from "axios";
import { config } from ".";
import { CreateUser, Driver } from "./interface";

export const createUser = async (userFormJson: CreateUser) => {
  await axios
    .post("http://139.59.228.30:8080/user/create", userFormJson, config)
    .then((res) => {
      console.log("HEADERS", res.headers);
      console.log(userFormJson);
    })
    .catch((e) => {
      console.log(e);
      console.log(userFormJson);
    });

  return Promise.resolve({
    status: 200,
  });
};
