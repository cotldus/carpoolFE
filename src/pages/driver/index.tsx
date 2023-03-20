import AdminTableV2 from "@/components/AdminJourneyTable/Index";
import CreateCar from "@/components/CreateCar";
import Layout from "@/components/Layout";
import { ReactElement } from "react";

function Driver() {
  return (
    <div className="flex-col">
      <div className="flex justify-center">
        <div className="p-6">
          <AdminTableV2 />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="p-0">
          <CreateCar />
        </div>
      </div>
    </div>
  );
}

Driver.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Driver;
