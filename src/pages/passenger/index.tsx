import Layout from "@/components/Layout";
import { ReactElement } from "react";

function Passenger() {
  return;
}

Passenger.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Passenger;
