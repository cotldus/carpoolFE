import { ReactElement, useState } from "react";
import "../../styles/globals.css";
import { Button } from "@mui/material";
import DatePickers from "@/utils/datepicker";
import TimePickers from "@/utils/timepicker";
import { InputActionMeta } from "react-select";
import Layout from "../../components/Layout";
import React from "react";
import Select from "react-select";
import AdminTable from "@/components/AdminTable";

function Admin() {
  const [carPlate, setCarPlate] = useState({ value: "", label: "" });
  const [driver, setDriver] = useState({ value: "", label: "" });
  const CarPlateList = [
    { label: "QAA 4567" },
    { label: "GSF 1234 C" },
    { label: "FSH 1235 C" },
    { label: "JD 1345" },
    { label: "DJF 4565 C" },
  ].map((suggestion) => ({
    value: suggestion.label,
    label: suggestion.label,
  }));
  const driverList = [
    { label: "Ronald MacDonald" },
    { label: "Anwar Ibrahim" },
    { label: "Ivan The Terrible" },
    { label: "Bobby MacFly" },
    { label: "Lee Ji-eun" },
  ].map((suggestion) => ({
    value: suggestion.label,
    label: suggestion.label,
  }));

  return (
    <div>
      <div className="flex justify-center">
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-1 w-4/5 ">
          <div className="md:flex md:flex-col md:align-center">
            <div className="rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900 overflow-visible">
              <div className="p-6">
                <h2 className="text-2xl leading-6 font-semibold text-white">
                  Assigning slots
                </h2>
                <p className="mt-4 text-zinc-300 pb-10">
                  Description - At the front it has two bumpers and a modified
                  grille and it is very difficult to miss. The 905cc boxer
                  engine was also re-designed and was slightly redesigned
                  cylinder heads and the{" "}
                </p>
                <div className="sm:grid sm:grid-cols-2 sm:mx-0 xl:grid-cols-2 xl:mx-0 pt-4">
                  <div className="pr-3">
                    <label
                      placeholder="date_departure"
                      className="block mb-2 text-sm font-medium text-zinc-300 dark:text-white"
                    >
                      Pick-Up Location:
                    </label>
                    <input
                      type="text"
                      id="passenger_pax"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="0"
                      required
                    />
                  </div>
                  <div>
                    <label
                      placeholder="time_departure"
                      className="block mb-2 text-sm font-medium text-zinc-300 dark:text-white"
                    >
                      Drop-off location:
                    </label>
                    <input
                      type="text"
                      id="passenger_pax"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="0"
                      required
                    />
                  </div>
                </div>
                <div className="sm:grid sm:grid-cols-2 sm:mx-0 xl:grid-cols-2 xl:mx-0 pt-4">
                  <div className="pr-3">
                    <label
                      placeholder="date_departure"
                      className="block mb-2 text-sm font-medium text-zinc-300 dark:text-white"
                    >
                      Depature date:
                    </label>
                    <DatePickers />
                  </div>
                  <div>
                    <label
                      placeholder="time_departure"
                      className="block mb-2 text-sm font-medium text-zinc-300 dark:text-white"
                    >
                      Depature time:
                    </label>
                    <TimePickers />
                  </div>
                </div>
                <div className="pt-4">
                  <label
                    placeholder="passenger_pax"
                    className="block mb-2 text-sm font-medium text-zinc-300 dark:text-white"
                  >
                    Number of Pax:
                  </label>
                  <input
                    type="text"
                    id="passenger_pax"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="0"
                    required
                  />
                </div>
                <div className="sm:grid sm:grid-cols-2 sm:mx-0 xl:grid-cols-2 xl:mx-0 pt-4">
                  <div className="pr-3">
                    <label
                      placeholder="date_departure"
                      className="block mb-2 text-sm font-medium text-zinc-300 dark:text-white"
                    >
                      Car Plate Assignment:
                    </label>
                    <Select
                      value={carPlate}
                      onChange={() => undefined}
                      options={CarPlateList}
                      inputValue={""}
                      className="relative !z-10"
                    />
                  </div>
                  <div>
                    <label
                      placeholder="time_departure"
                      className="block mb-2 text-sm font-medium text-zinc-300 dark:text-white"
                    >
                      Driver:
                    </label>
                    <Select
                      value={driver}
                      onChange={() => undefined}
                      options={driverList}
                      inputValue={""}
                      className="relative z-10"
                    />
                  </div>
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
      </div>
      <div className="flex justify-center">
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-1 w-4/5 ">
          <AdminTable />
        </div>
      </div>
    </div>
  );
}

Admin.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Admin;
