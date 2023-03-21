import { ReactElement } from "react";
import "../../styles/globals.css";
import Layout from "../../components/Layout";
import React from "react";
import AdminTable from "@/components/AdminTable";
import { CreateSchedule } from "@/components/CreateSchedule";

function Admin() {
  return (
    <div>
      <div className="flex justify-center">
        <CreateSchedule />
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
