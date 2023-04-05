import { useAddCar } from "@/hooks/useAddCar";
import { Car, CarFields } from "@/services/interface";
import { Button } from "@mui/material";
import { Dispatch, SetStateAction, useEffect } from "react";

const CreateCar = ({
  setOpenCreateCar,
}: {
  setOpenCreateCar: Dispatch<SetStateAction<boolean>>;
}) => {
  const addCar = useAddCar();
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson: unknown = Object.fromEntries(formData.entries());
    addCar.mutate(formJson as Car);
  };

  useEffect(() => {
    addCar.isSuccess && setOpenCreateCar(false);
  }, [addCar.isSuccess]);

  return (
    <form method="post" onSubmit={onSubmit}>
      <div className="flex justify-center">
        <div className="md:flex md:flex-col md:align-center">
          <div className=" overflow-visible">
            <div className="px-6 pb-6">
              <h2 className="text-2xl leading-6 font-semibold text-black">
                Create new car
              </h2>
              <p className="mt-4  pb-10">
                Description - At the front it has two bumpers and a modified
                grille and it is very difficult to miss. The 905cc boxer engine
                was also re-designed and was slightly redesigned cylinder heads
                and the{" "}
              </p>
              <div className="pt-4">
                <label
                  placeholder="car_plate_number"
                  className="dialog-text-font-1"
                >
                  Car Plate Number
                </label>
                <input
                  type="text"
                  id="car_plate_number"
                  name={CarFields.CARPLATE_NUMBER}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Car plate number"
                  required
                />
              </div>
              <div className="pt-4">
                <label
                  placeholder="passenger_pax"
                  className="dialog-text-font-1"
                >
                  Maximum pax
                </label>
                <input
                  type="text"
                  id="passenger_pax"
                  name={CarFields.MAX_PAX}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="0"
                  required
                />
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

export default CreateCar;
