import Link from "next/link";

export default function Home({ children }) {
  return (
    <div className="bg-gray-200">
      <div className=" flex min-h-screen">
        <div className="text-xl p-5 border-r-2 border-black space-y-5">
          <div>
            <Link href={"/entry"}>Entry</Link>
          </div>
          <div>
            <Link href={"/category"}>Category</Link>
          </div>
        </div>
        <div className=" p-5">{children}</div>
      </div>
    </div>
  );
}
