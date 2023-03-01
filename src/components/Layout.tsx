import Navbar from "./Navbar";

export default function Layout({
  children,
}: {
  children: string | JSX.Element;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
