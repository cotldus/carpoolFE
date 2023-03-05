import { CarPoolInterval } from "@/pages/admin/interface";
import { useState } from "react";
import { useRouter } from "next/router";
import { ROUTES } from "@/constants";

enum NAVIGATE_TO {
  ADMIN = "admin",
  DRIVER = "driver",
  PASSENGER = "passenger",
}

export default function Navbar() {
  const router = useRouter();
  const initPage: string = Object.entries(ROUTES).find(route => route[1] === router.pathname)?.at(1) || "";
  const [carPoolInterval, setCarPoolInterval] = useState<NAVIGATE_TO>(
    NAVIGATE_TO[initPage]
  );
  return (
    <div className="sm:flex sm:flex-col sm:align-center">
      <div className="relative self-center mt-6 bg-zinc-900 rounded-lg p-0.5 flex sm:mt-8 border border-zinc-800">
        <button
          onClick={() => {
            setCarPoolInterval(NAVIGATE_TO.PASSENGER);
            router.push(ROUTES.PASSENGER);
          }}
          type="button"
          className={`${
            carPoolInterval === NAVIGATE_TO.PASSENGER
              ? "relative w-2/3 bg-zinc-700 border-zinc-800 shadow-sm text-white"
              : "ml-0.5 relative w-2/3 border border-transparent text-zinc-400"
          } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-grey-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
        >
          Passenger
        </button>
        <button
          onClick={() => {
            setCarPoolInterval(NAVIGATE_TO.DRIVER);
            router.push(ROUTES.DRIVER);
          }}
          type="button"
          className={`${
            carPoolInterval === "driver"
              ? "relative w-2/3 bg-zinc-700 border-zinc-800 shadow-sm text-white"
              : "ml-0.5 relative w-2/3 border border-transparent text-zinc-400"
          } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-grey-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
        >
          Driver
        </button>
        <button
          onClick={() => {
            setCarPoolInterval(NAVIGATE_TO.ADMIN);
            router.push(ROUTES.ADMIN);
          }}
          type="button"
          className={`${
            carPoolInterval === NAVIGATE_TO.ADMIN
              ? "relative w-2/3 bg-zinc-700 border-zinc-800 shadow-sm text-white"
              : "ml-0.5 relative w-2/3 border border-transparent text-zinc-400"
          } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-grey-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
        >
          Adminstrator
        </button>
      </div>
    </div>
  );
}
