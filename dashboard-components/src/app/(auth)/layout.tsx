import AppLogo from "@/components/AppLogo";
import Image from "next/image";
import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className=" flex min-h-screen w-full justify-between font-inter">
      <div className="flex flex-col justify-between size-full min-h-screen">
        <section className="flex-center size-full max-sm:px-4 pt-5">
          <div className="auth-form">
            <AppLogo type="authPage" />
            {children}
          </div>
        </section>
        <div></div>
      </div>

      {/* Image and Background from leftside */}
      <div className="h-screen w-full p-4 max-lg:hidden">
        <div className="size-full bg-sky-1 rounded-3xl">
          <div className="relative h-full w-full items-center">
            <Image
              src="/icons/landing-page.jpg"
              alt="Auth Image"
              fill
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
