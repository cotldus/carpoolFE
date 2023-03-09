import Navbar from "./Navbar";
import { Toggles } from "./Toggles";

export default function Layout({
  children,
}: {
  children: string | JSX.Element;
}) {
  return (
    <>
      <Navbar />
      <Toggles/>
      <main>{children}</main>
    </>
  );
}
