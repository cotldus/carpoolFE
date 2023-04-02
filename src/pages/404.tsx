import Link from "next/link";
import Image from "next/image";
import lost_people from "../../public/lost_people.png";

export default function Custom404() {
  return (
    <div className="col-span-2 flex items-center justify-center h-screen bg-custom-blue-grad">
      <div className="item1 col-span-1">
        <Image
          src={lost_people}
          alt="Picture of the losted people"
          width={400}
          height={400}
          //   width="350px"
          //   height="300px"
        />
      </div>
      <div className="item1 col-span-1 border-l-2 border-spacing-2 border-black md:py-12 py-2">
        <div className="p-3 text-left pl-4 divide-y-2 shadow-sm divide-dashed">
          <h1 className="text-3xl">404 - Not Found.</h1>
          <h2>Are you bloody lost? Stop snooping...</h2>
          <Link  href="/login" className="hover:underline text-blue-800 hover:text-green-500 text-lg font-semibold hover:font-bold">{"Go back Home >"}</Link>
        </div>
      </div>
    </div>
  );
}
