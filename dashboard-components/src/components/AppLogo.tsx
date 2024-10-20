import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AppLogo() {
  return (
    <Link href="/" className="flex cursor-pointer items-center gap-1">
      <Image src="/icons/logo.svg" alt="App logo" width={30} height={30} />
      <h1 className="authpage-logo">AppName</h1>
    </Link>
  );
}
