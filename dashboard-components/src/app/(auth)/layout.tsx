import AppLogo from "@/components/AppLogo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      <div className="flex flex-col justify-between size-full min-h-screen p-6">
        <AppLogo />
        <section className="flex-center size-full max-sm:px-4">
          <section className="auth-form">{children}</section>
        </section>
        <div></div>
      </div>

      {/* Image and Background from leftside */}
      <div className="auth-asset">
        <div className="text-gray-200">
          <svg aria-hidden="true" className="absolute inset-0 size-full">
            <defs>
              <pattern
                id=":S2:"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
                x="100%"
                y="100%"
                patternTransform="translate(112 64)"
              >
                <path
                  d="M0 128V.5H128"
                  fill="none"
                  stroke="currentColor"
                ></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#:S2:)"></rect>
          </svg>
        </div>
        <div className="relative h-full w-full items-center">
          <Image
            src="/icons/landing-page.jpg"
            alt="Auth Image"
            fill
          />
        </div>
      </div>
    </main>
  );
}
