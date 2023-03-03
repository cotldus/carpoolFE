import Layout from "@/components/Layout";
import { ReactElement } from "react";

function Driver() {
  return;
}

Driver.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Driver;
