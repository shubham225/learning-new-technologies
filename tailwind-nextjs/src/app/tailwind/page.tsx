import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <Link href="/tailwind/typography">
      <button className="bg-blue-500 hover:bg-blue-700 rounded-full p-2 text-white">Typography</button>
    </Link>
  );
}
