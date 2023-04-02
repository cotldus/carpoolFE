import AdminTableV2 from "@/components/AdminJourneyTable/Index";
import CreateCar from "@/components/CreateCar";
import Layout from "@/components/Layout";
import { useCarList } from "@/hooks/useCarList";
import { Close } from "@mui/icons-material";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { ReactElement, useState } from "react";

function Driver() {
  const [openCreateJourney, setOpenCreateJourney] = useState<boolean>(false);
  useCarList();
  return (
    <div className="flex-col">
      <div className="inline-block justify-center mt-16 px-2">
        <div className="relative p-4">
          <Button
            variant="outlined"
            onClick={() => setOpenCreateJourney(true)}
            className="absolute right-0 left-auto"
            size="small"
          >
            Create Car
          </Button>
        </div>
        <div className="justify-center pt-6 w-[90vw]">
          <div className="mt-4 space-y-4 sm:mt-4 sm:space-y-0 sm:gap-6 lg:mx-auto xl:max-w-none xl:mx-0 w-full">
            <AdminTableV2 />
          </div>
        </div>
      </div>
      <Dialog
        open={openCreateJourney}
        onClose={() => setOpenCreateJourney(false)}
      >
        <div className="dialog-bkg">
          <DialogTitle
            sx={{ padding: 1, justifyContent: "right", display: "flex" }}
            className=""
          >
            <Button
              className="right"
              sx={{ padding: 0, margin: 0, minWidth: "24px" }}
              onClick={() => setOpenCreateJourney(false)}
            >
              <Close color="info" />
            </Button>
          </DialogTitle>
          <DialogContent sx={{ padding: 0 }} className="">
            <div className="flex justify-center">
              <CreateCar setOpenCreateJourney={setOpenCreateJourney} />
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
