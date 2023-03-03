import AdminTableV2 from "@/components/AdminTableV2";
import Layout from "@/components/Layout";
import { ReactElement } from "react";

function Driver() {
  return (
    <div className="flex justify-center">
      <div className="md:flex md:flex-col md:align-center">
        <div className="p-6">
          <AdminTableV2 />
        </div>
      </div>
    </div>
  );
}

Driver.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Driver;
