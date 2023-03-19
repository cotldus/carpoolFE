import "../../styles/globals.css";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import { countryOptions, ROUTES } from "@/constants";
import TextboxWithSelection from "@/utils/TextboxWithSelection";
import { DropdownWithIcon } from "@/utils/DropdownWithIcon";
import { useEffect, useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import en from "../../locales/en-US";
import cn from "../../locales/zh-CN";
import { signIn } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";

export type Inputs = {
  phoneNumber: number;
  password: string;
};

function Login() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en-US" ? en : cn;
  const config = {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  const [countryCode, setCountryCode] = useState(countryOptions[0].countryCode);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => onHandleSubmit(data);

  const onHandleSubmit = async (data: Inputs) => {
    console.log("Sign in as: ", data);
    const res = await signIn("credentials", {
      phoneNumber: data.phoneNumber,
      password: data.password,
      redirect: false,
    });
    console.log("Login status: ", res);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            <TextboxWithSelection
              SeperateSelection={
                <DropdownWithIcon
                  defaultValue={countryCode}
                  setValue={setCountryCode}
                  selectionList={countryOptions}
                  className="px-2 border-r"
                />
              }
              placeholder={t.phone_number}
              register={register("phoneNumber")}
              name={"phoneNumber"}
              control={control}
            />
          </div>
          <div>
            <TextField
              sx={{ boxShadow: "none", "& fieldset": { border: "none" } }}
              className="w-full text-sm bg-white focus:outline-none border border-gray-200 rounded text-gray-600 flex"
              id="password-input"
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div>
            <button
              type="submit"
              className="inline-block w-full rounded px-6 pt-2.5 pb-2 text-md font-medium uppercase leading-normal text-white  bg-blue-600 hover:bg-blue-700 transition duration-200"
            >
              Sign In
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <a
                className="text-sm text-blue-600 hover:underline"
                href="#signup"
              >
                New? Sign Up Here!
              </a>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
}
export default Login;
