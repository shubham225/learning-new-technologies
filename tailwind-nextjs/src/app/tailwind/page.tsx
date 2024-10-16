import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="">
      <Link href="/tailwind/typography">
        <button className="bg-blue-500 w-32 hover:bg-blue-700 rounded-full p-2 text-white mx-3 transition delay-150 hover:rotate-180">
          Typography
        </button>
      </Link>
      <Link href="/tailwind/flex">
        <button className="rounded-lg border font-bold border-blue-600 text-white w-32 p-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:-scale-105 hover:bg-indigo-500 duration-300">
          Flex
        </button>
      </Link>
      <Link href="/tailwind/components">
        <button className="rounded-lg border font-bold border-blue-600 text-white w-32 p-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:-scale-105 hover:bg-indigo-500 duration-300">
          Components
        </button>
      </Link>
    </div>
  );
}
