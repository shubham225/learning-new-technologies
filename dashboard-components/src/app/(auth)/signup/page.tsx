import SignUpForm from "@/components/forms/SignUpForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SignUp() {
  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-6">
        <Link href="/" className="flex cursor-pointer items-center gap-1">
          <Image src="/icons/logo.svg" alt="App logo" width={30} height={30} />
          <h1 className="authpage-logo">AppName</h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            Sign Up
            <p className="text-16 font-normal text-gray-600">
              Please enter you details
            </p>
          </h1>
        </div>
      </header>
      <SignUpForm />
      <footer className="flex justify-center gap-1">
        <p className="text-14 font-normal text-gray-600">
          Already have an account?
        </p>
        <Link href="/login" className="form-link">
          login
        </Link>
      </footer>
    </section>
  );
}
