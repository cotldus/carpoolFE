import { useState } from "react";
import { CarPoolInterval } from "./interface.d.ts";
import "../../styles/globals.css";
import { Button } from "@mui/material";

export default function Admin() {
  const [carPoolInterval, setCarPoolInterval] =
    useState<CarPoolInterval>("passenger");

  return (
    <main>
      <div className="sm:flex sm:flex-col sm:align-center">
        <div className="relative self-center mt-6 bg-zinc-900 rounded-lg p-0.5 flex sm:mt-8 border border-zinc-800">
          <button
            onClick={() => setCarPoolInterval("passenger")}
            type="button"
            className={`${
              carPoolInterval === "passenger"
                ? "relative w-2/3 bg-zinc-700 border-zinc-800 shadow-sm text-white"
                : "ml-0.5 relative w-2/3 border border-transparent text-zinc-400"
            } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-grey-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
          >
            Passenger
          </button>
          <button
            onClick={() => setCarPoolInterval("driver")}
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
            onClick={() => setCarPoolInterval("admin")}
            type="button"
            className={`${
              carPoolInterval === "admin"
                ? "relative w-2/3 bg-zinc-700 border-zinc-800 shadow-sm text-white"
                : "ml-0.5 relative w-2/3 border border-transparent text-zinc-400"
            } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-grey-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
          >
            Adminstrator
          </button>
        </div>
      </div>
      <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
        <div className="sm:flex sm:flex-col sm:align-center">
          <div className="rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900">
            <div className="p-6">
              <h2 className="text-2xl leading-6 font-semibold text-white">
                Assigning slots
              </h2>
              <p className="mt-4 text-zinc-300 pb-10">Description - At the front it has two bumpers and a modified grille and it is very difficult to miss. The 905cc boxer engine was also re-designed and was slightly redesigned cylinder heads and the </p>
              <div>
                <label
                  placeholder="passenger_pax"
                  className="block mb-2 text-sm font-medium text-zinc-300 dark:text-white"
                >
                  Number of Pax:
                </label>
                <input
                  type="text"
                  id="passenger_pax"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="0"
                  required
                />
              </div>
              <Button
                type="button"
                onClick={() => undefined}
                className="mt-8 block w-full rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-900"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
