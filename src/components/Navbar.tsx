import { CarPoolInterval } from "@/pages/admin/interface";
import { useState } from "react";

export default function Navbar() {
    const [carPoolInterval, setCarPoolInterval] =
    useState<CarPoolInterval>("passenger");
    
    return(
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
    )
}