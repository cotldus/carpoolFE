import { Backdrop, CircularProgress } from "@mui/material";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";
import Navbar from "./Navbar";

export default function Layout({
  children,
}: {
  children: string | JSX.Element;
}) {
  const {data, status} = useSession();
  console.log("USER SESSION: ",data)
  // return (
  //   <>
  //     <Navbar />
  //     <Toggles/>
  //     <main>{children}</main>
  //   </>
  // );

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/login");
  }, [status]);

  if (status === "authenticated")
    return (
      <>
      <Navbar />
      {/* <Toggles/> */}
      <main>{children}</main>
    </>
    );

  return (<Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={true}
  >
    <CircularProgress color="inherit" />
  </Backdrop>);
}
