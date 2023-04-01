import { submitSchedule } from "@/services";
import { AutoCompleteFieldInput } from "@/utils/AutoCompleteFieldInput";
import DatePickers from "@/utils/datepicker";
import TimePickers from "@/utils/timepicker";
import { Button } from "@mui/material";

const onSubmit = async (e: any) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const formJson = Object.fromEntries(formData.entries());
  await submitSchedule(formJson);
};

export const CreateSchedule = () => {
  return (
    <form method="post" onSubmit={onSubmit}>
      <div className=" sm:space-y-0 sm:grid sm:grid-cols-1 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-1 w-full ">
        <div className="md:flex md:flex-col md:align-center">
          <div className="overflow-visible">
            <div className="p-6">
              <h2 className="text-2xl leading-6 font-semibold">
                Create new schedule
              </h2>
              <p className="mt-4 pb-10">
                Description - At the front it has two bumpers and a modified
                grille and it is very difficult to miss. The 905cc boxer engine
                was also re-designed and was slightly redesigned cylinder heads
                and the{" "}
              </p>
              <div className="sm:grid sm:grid-cols-2 sm:mx-0 xl:grid-cols-2 xl:mx-0 pt-4">
                <div className="sm:pr-3">
                  <label
                    placeholder="date_departure"
                    className="dialog-text-font-1 dark:text-white"
                  >
                    Pick-Up Location:
                  </label>
                  <AutoCompleteFieldInput name="pickUp" />
                </div>
                <div>
                  <label
                    placeholder="time_departure"
                    className="dialog-text-font-1 dark:text-white"
                  >
                    Drop-off location:
                  </label>
                  <AutoCompleteFieldInput name="dropOff" />
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-2 sm:mx-0 xl:grid-cols-2 xl:mx-0 pt-4">
                <div className="sm:pr-3">
                  <label
                    placeholder="date_departure"
                    className="dialog-text-font-1 dark:text-white"
                  >
                    Depature date:
                  </label>
                  <DatePickers name="date" />
                </div>
                <div>
                  <label
                    placeholder="time_departure"
                    className="dialog-text-font-1 dark:text-white"
                  >
                    Depature time:
                  </label>
                  <TimePickers name="time" />
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-2 sm:mx-0 xl:grid-cols-2 xl:mx-0 pt-4">
                <div><label
                  placeholder="passenger_pax"
                  className="dialog-text-font-1 dark:text-white"
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
                /></div>
                <div><label
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
                /></div>
                
              </div>
              <Button
                type="submit"
                onClick={() => undefined}
                className="mt-8 block w-full rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-900"
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
