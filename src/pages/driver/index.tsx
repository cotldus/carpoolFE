import AdminTableV2 from "@/components/AdminJourneyTable/Index";
import CreateCar from "@/components/CreateCar";
import Layout from "@/components/Layout";
import { useCar } from "@/hooks/useCar";
import { Close } from "@mui/icons-material";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { ReactElement, useState } from "react";

function Driver() {
  const [openCreateCar, setOpenCreateCar] = useState<boolean>(false);
  useCar();

  return (
    <div className="">
      <div className="inline-block justify-center mt-16 px-6 w-full">
        <div className="relative p-4">
          <Button
            variant="outlined"
            onClick={() => setOpenCreateCar(true)}
            className="absolute right-0 left-auto"
            size="small"
          >
            Create Car
          </Button>
        </div>
        <div className="justify-center pt-6 w-full">
          <div className="mt-4 space-y-4 sm:mt-4 sm:space-y-0 sm:gap-6 lg:mx-auto xl:max-w-none xl:mx-0 w-full">
            <AdminTableV2 />
          </div>
        </div>
      </div>
      <Dialog open={openCreateCar} onClose={() => setOpenCreateCar(false)}>
        <div className="dialog-bkg">
          <DialogTitle
            sx={{ padding: 1, justifyContent: "right", display: "flex" }}
            className=""
          >
            <Button
              className="right"
              sx={{ padding: 0, margin: 0, minWidth: "24px" }}
              onClick={() => setOpenCreateCar(false)}
            >
              <Close color="info" />
            </Button>
          </DialogTitle>
          <DialogContent sx={{ padding: 0, minWidth: "200px" }} className="">
            <div className="flex justify-center">
              <CreateCar setOpenCreateCar={setOpenCreateCar} />
            </div>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}

Driver.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Driver;
