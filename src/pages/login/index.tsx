import { useFormik } from "formik";
import "../../styles/globals.css";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import { ROUTES } from "@/constants";
import TextboxWithSelection from "@/utils/TextboxWithSelection";
import { DropdownWithIcon } from "@/utils/DropdownWithIcon";
import { useEffect, useState } from "react";

function Login() {
  const router = useRouter();
  const config = {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  const [countryCode, setCountryCode]= useState(65);
  useEffect(() => {console.log("TEST", countryCode)}, [countryCode])
  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    await axios
      .post(
        "/auth",
        {
          email,
          password,
        },
        config
      )
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      login(values);
      // alert(JSON.stringify(values, null, 2));
      router.push(ROUTES.ADMIN);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <section className="flex justify-center items-center h-screen bg-gray-800">
        <div className="max-w-md w-full bg-gray-900 rounded p-6 space-y-4">
          <div className="flex justify-center items-center">
            <Image
              src="/cab.svg"
              alt="cab"
              width={50}
              height={50}
              className=""
            />
          </div>
          <div className="mb-4">
            <p className="text-gray-400">Sign In</p>
            <h2 className="text-xl font-bold text-white">Carpool Hero</h2>
          </div>
          <div>
            {/* <input
              className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            /> */}
            <TextboxWithSelection IconSelection={<DropdownWithIcon value={countryCode} setValue={setCountryCode}/>}/>
          </div>
          <div>
            <input
              className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
            >
              Sign In
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <a className="text-sm text-blue-600 hover:underline" href="#">
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
}
export default Login;
