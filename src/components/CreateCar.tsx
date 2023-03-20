import { createCar } from "@/services";
import { Button } from "@mui/material";

const CreateCar = () => {
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    await createCar(formJson);
  };
  return (
    <form method="post" onSubmit={onSubmit}>
      <div className="flex justify-center">
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-1 w-4/5 ">
          <div className="md:flex md:flex-col md:align-center">
            <div className="rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900 overflow-visible">
              <div className="p-6">
                <h2 className="text-2xl leading-6 font-semibold text-white">
                  Create new car
                </h2>
                <p className="mt-4 text-zinc-300 pb-10">
                  Description - At the front it has two bumpers and a modified
                  grille and it is very difficult to miss. The 905cc boxer
                  engine was also re-designed and was slightly redesigned
                  cylinder heads and the{" "}
                </p>
                <div className="pt-4">
                  <label
                    placeholder="car_plate_number"
                    className="block mb-2 text-sm font-medium text-zinc-300 dark:text-white"
                  >
                    Car Plate Number
                  </label>
                  <input
                    type="text"
                    id="car_plate_number"
                    name="carPlateNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Car plate number"
                    required
                  />
                </div>
                <div className="pt-4">
                  <label
                    placeholder="passenger_pax"
                    className="block mb-2 text-sm font-medium text-zinc-300 dark:text-white"
                  >
                    Maximum pax
                  </label>
                  <input
                    type="text"
                    id="passenger_pax"
                    name="maxPassengers"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="0"
                    required
                  />
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
      </div>
    </form>
  );
};

export default CreateCar;
