"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home({ children }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-gray-200">
      <div className=" flex flex-col bg-amber-900 border-r-2 border-black w-1/6">
        <div className="flex items-center p-3">
          <div className="bg-black w-14 h-14 rounded-full mr-5"></div>
          <div className="text-3xl">Easy Budget</div>
        </div>
        <div className="flex flex-col items-center space-y-5 text-xl p-5">
          <div>
            <Link
              href={"/"}
              // This is so cool react+tailwind combo
              className={
                "hover:bg-amber-400 rounded-xl p-2 " +
                (pathname === "/" ? "bg-amber-600 " : "")
              }
            >
              Dashboard
            </Link>
          </div>
          <div>
            <Link
              href={"/balance"}
              className={
                "hover:bg-amber-400 rounded-xl p-2 " +
                (pathname === "/balance" ? "bg-amber-600" : "")
              }
            >
              Balance
            </Link>
          </div>
          <div>
            <Link
              href={"/graphs"}
              // This is so cool react+tailwind combo
              className={
                "hover:bg-amber-400 rounded-xl p-2 " +
                (pathname === "/graphs" ? "bg-amber-600 " : "")
              }
            >
              Graphs
            </Link>
          </div>
          <div>
            <Link
              href={"/monthEntry"}
              // This is so cool react+tailwind combo
              className={
                "hover:bg-amber-400 rounded-xl p-2 " +
                (pathname === "/monthEntry" ? "bg-amber-600 " : "")
              }
            >
              Month Entry
            </Link>
          </div>
          <div>
            <Link
              href={"/history"}
              // This is so cool react+tailwind combo
              className={
                "hover:bg-amber-400 rounded-xl p-2 " +
                (pathname === "/history" ? "bg-amber-600 " : "")
              }
            >
              History
            </Link>
          </div>
          <div>
            <Link
              href={"/setting"}
              // This is so cool react+tailwind combo
              className={
                "hover:bg-amber-400 rounded-xl p-2 " +
                (pathname === "/setting" ? "bg-amber-600 " : "")
              }
            >
              Setting
            </Link>
          </div>
        </div>
      </div>
      <div className=" p-5">
        {children ? (
          children
        ) : (
          <div>
            <div>Hi No children</div>
          </div>
        )}
      </div>
    </div>
  );
}
