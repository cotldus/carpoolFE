import { ReactElement, useState } from "react";
import "../../styles/globals.css";
import Layout from "../../components/Layout";
import React from "react";
import AdminTable from "@/components/AdminTable";
import { CreateSchedule } from "@/components/CreateSchedule";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";

function Admin() {
  const [openCreateJourney, setOpenCreateJourney] = useState<boolean>(false);
  return (
    <div className="inline-block justify-center mt-16">
      <Button variant="outlined" onClick={() => setOpenCreateJourney(true)} className="inline-block right">
        Create Journey
      </Button>
      <Dialog
        open={openCreateJourney}
        onClose={() => setOpenCreateJourney(false)}
      >
        <DialogContent>
          <div className="flex justify-center">
            <CreateSchedule />
          </div>
        </DialogContent>
      </Dialog>

      <div className="flex justify-center">
        <div className="mt-4 space-y-4 sm:mt-4 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-1 w-full ">
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
