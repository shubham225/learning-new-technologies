import LoginForm from "@/components/forms/LoginForm";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <>
      <header className="flex flex-col gap-5 md:gap-6">
        <div className="flex flex-col gap-1 md:gap-2">
          <h1 className="text-22 lg:text-30 font-medium text-gray-900">
            Login to Dashboard
            <p className="text-16 font-normal text-gray-600">
              Fill the below form to login
            </p>
          </h1>
        </div>
      </header>
      <LoginForm />
      <footer className="flex justify-center gap-1">
        <p className="text-14 font-medium text-gray-600">
          Don't have an account?
        </p>
        <Link href="/signup" className="form-link">
          Sign up
        </Link>
      </footer>
    </>
  );
}
