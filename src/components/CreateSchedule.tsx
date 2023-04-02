import { countryOptions } from "@/constants";
import { submitSchedule } from "@/services";
import { AutoCompleteFieldInput } from "@/utils/AutoCompleteFieldInput";
import DatePickers from "@/utils/datepicker";
import { DropdownWithIcon } from "@/utils/DropdownWithIcon";
import TimePickers from "@/utils/timepicker";
import { Button, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";

const onSubmit = async (e: any) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const formJson = Object.fromEntries(formData.entries());
  await submitSchedule(formJson);
};
interface newSchedule {
  to?: string;
  from?: string;
  pickUpLocation?: string[];
  dropOffLocation?: string[];
}

export const CreateSchedule = () => {
  const [newSchedule, setNewSchedule] = useState<newSchedule>({to: "SG", from: "MY"});
  const countryOptionsFilter = countryOptions.filter(item => item.countryAbrv !== "GB")

  const onHandleTo = (value: string) => {
    setNewSchedule({
      ...newSchedule,
      to: value,
      from:value === "SG" ? "MY" : "SG",
    });
  };
  const onHandleFrom = (value: string) => {
    setNewSchedule({
      ...newSchedule,
      from: value,
      to: value === "SG" ? "MY" : "SG",
    });
  };
  useEffect(() => {
    console.log(newSchedule);
  }, [newSchedule]);

  return (
    <form method="post" onSubmit={onSubmit}>
      <div className=" sm:space-y-0 sm:grid sm:grid-cols-1 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-1 w-full ">
        <div className="md:flex md:flex-col md:align-center">
          <div className="overflow-visible">
            <div className="p-6">
              <h2 className="text-2xl leading-6 font-semibold">
                Create new schedule
              </h2>
              <div className="sm:grid sm:grid-cols-5 sm:mx-0 xl:grid-cols-5 xl:mx-0 pt-4">
                <div className="sm:pr-3 item1 col-span-4">
                  <label
                    placeholder="date_departure"
                    className="dialog-text-font-1"
                  >
                    Pick-Up Location:
                  </label>
                  <AutoCompleteFieldInput name="pickup" />
                </div>
                <div className="item2 col-span-1">
                  <label placeholder="country" className="dialog-text-font-1">
                    From:
                  </label>
                  <DropdownWithIcon
                    key={"country-select-from"}
                    defaultValue={newSchedule?.from}
                    setValue={onHandleFrom}
                    selectionList={countryOptionsFilter}
                    withPhoneNumber={false}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-5 xl:mx-0 pt-4">
                <div className="sm:pr-3 item1 col-span-4">
                  <label
                    placeholder="time_departure"
                    className="dialog-text-font-1"
                  >
                    Drop-off location:
                  </label>
                  <AutoCompleteFieldInput name="departure" />
                </div>
                <div className="item2 col-span-1">
                  <label placeholder="country" className="dialog-text-font-1">
                    To:
                  </label>
                  <DropdownWithIcon
                    key={"country-select-to"}
                    defaultValue={newSchedule?.to}
                    setValue={onHandleTo}
                    selectionList={countryOptionsFilter}
                    withPhoneNumber={false}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-2 sm:mx-0 xl:grid-cols-2 xl:mx-0 pt-4">
                <div className="sm:pr-3">
                  <label
                    placeholder="date_departure"
                    className="dialog-text-font-1"
                  >
                    Depature date:
                  </label>
                  <DatePickers name="date" />
                </div>
                <div>
                  <label
                    placeholder="time_departure"
                    className="dialog-text-font-1"
                  >
                    Depature time:
                  </label>
                  <TimePickers name="time" />
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-2 sm:mx-0 xl:grid-cols-2 xl:mx-0 pt-4">
                <div className="sm:pr-3">
                  <label
                    placeholder="passenger_pax"
                    className="dialog-text-font-1"
                  >
                    Number of Pax:
                  </label>
                  <input
                    name="totalPax"
                    type="text"
                    id="passenger_pax"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="0"
                    required
                  />
                </div>
                <div>
                  <label
                    placeholder="passenger_pax"
                    className="dialog-text-font-1 dark:text-white"
                  >
                    Price per pax:
                  </label>
                  <input
                    name="totalPax"
                    type="text"
                    id="passenger_pax"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="0"
                    required
                  />
                </div>
              </div>
              <Button
                type="submit"
                onClick={() => undefined}
                className="mt-8 block w-full rounded-md py-2 text-sm font-semibold text-blue text-center hover:bg-zinc-900"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
