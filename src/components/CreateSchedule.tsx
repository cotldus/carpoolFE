import { countryOptions } from "@/constants";
import { Schedule, ScheduleFields } from "@/services/interface";
import { useAddSchedule } from "@/hooks/useAddSchedule";
import { ShowSchedule } from "@/services/interface";
import { AutoCompleteFieldInput } from "@/utils/AutoCompleteFieldInput";
import DatePickers from "@/utils/datepicker";
import { DropdownWithIcon } from "@/utils/DropdownWithIcon";
import TimePickers from "@/utils/timepicker";
import { Button } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface newSchedule {
  to?: string;
  from?: string;
  pickUpLocation?: string[];
  dropOffLocation?: string[];
}

export const CreateSchedule = ({
  setOpenCreateJourney,
}: {
  setOpenCreateJourney: Dispatch<SetStateAction<boolean>>;
}) => {
  const [newSchedule, setNewSchedule] = useState<newSchedule>({
    to: "SG",
    from: "MY",
  });
  const countryOptionsFilter = countryOptions.filter(
    (item) => item.countryAbrv !== "GB"
  );

  const submitSchedule = useAddSchedule();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson: unknown = Object.fromEntries(formData.entries());
    const request = formJson as ShowSchedule;
    submitSchedule.mutate({
      ...request,
      pickup: request.pickup.split(", "),
      dropoff: request.dropoff.split(", "),
    });
  };

  const onHandleTo = (value: string) => {
    setNewSchedule({
      ...newSchedule,
      to: value,
      from: value === "SG" ? "MY" : "SG",
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
    submitSchedule.isSuccess && setOpenCreateJourney(false);
  }, [submitSchedule.isSuccess]);

  return (
    <form method="post" onSubmit={onSubmit}>
      <div className=" sm:space-y-0 sm:grid sm:grid-cols-1 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-1 w-full ">
        <div className="md:flex md:flex-col md:align-center">
          <div className="overflow-visible">
            <div className="px-6 pb-6">
              <h2 className="text-2xl leading-6 font-semibold">
                Create new schedule
              </h2>
              <div className="sm:grid sm:grid-cols-5 sm:mx-0 xl:grid-cols-5 xl:mx-0 pt-4">
                <div className="sm:pr-3 item1 col-span-4">
                  <label
                    placeholder="date_dropoff"
                    className="dialog-text-font-1"
                  >
                    Pick-Up Location:
                  </label>
                  <AutoCompleteFieldInput name={ScheduleFields.PICKUP} />
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
                    placeholder="time_dropoff"
                    className="dialog-text-font-1"
                  >
                    Drop-off location:
                  </label>
                  <AutoCompleteFieldInput name={ScheduleFields.DROPOFF} />
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
                    placeholder="date_dropoff"
                    className="dialog-text-font-1"
                  >
                    Depature date:
                  </label>
                  <DatePickers name={ScheduleFields.DATE} />
                </div>
                <div>
                  <label
                    placeholder="time_dropoff"
                    className="dialog-text-font-1"
                  >
                    Depature time:
                  </label>
                  <TimePickers name={ScheduleFields.TIME} />
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
                    name={ScheduleFields.TOTALPAX}
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
                className="mt-8 block w-full rounded-md py-2 text-md button-blue"
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
