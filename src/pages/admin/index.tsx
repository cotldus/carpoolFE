
import { useState } from "react";
import {CarPoolInterval} from "./interface.d.ts";
import style from "./admin.module.css";

export default function Admin() {
    const [carPoolInterval, setCarPoolInterval] =
    useState<CarPoolInterval>('passenger');

    return (
      <main>
        <div className="relative self-center mt-6 bg-zinc-900 rounded-lg p-0.5 flex sm:mt-8 border border-zinc-800">
            <button
              onClick={() => setCarPoolInterval('passenger')}
              type="button"
              className={`${
                carPoolInterval === 'month'
                  ? ''
                  : ''
              } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
            >
              Passenger
            </button>
            <button
              onClick={() => setCarPoolInterval('driver')}
              type="button"
              className={`${
                carPoolInterval === 'driver'
                  ? ''
                  : ''
              } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
            >
              Driver
            </button>
          </div>
      </main>
    )
  }
  