import SignUpForm from "@/components/forms/SignUpForm";
import Link from "next/link";
import React from "react";

export default function SignUp() {
  return (
    <>
      <header className="flex flex-col gap-5 md:gap-6">
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-22 lg:text-30 font-medium text-gray-900">
            Create account
            <p className="text-16 font-normal text-gray-600">
              Enter your details to get started.
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
          Log in
        </Link>
      </footer>
    </>
  );
}
