"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  loginFormSchema,
  signUpFormSchema,
} from "@/lib/form-schema/authFormSchema";
import InputField from "../ui-custom/InputField";
import { Loader, Loader2 } from "lucide-react";

export default function SignUpForm() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof signUpFormSchema>) {
    // Do something with the form values.
    setIsLoading(true);
    console.log(values);
    setIsLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex gap-2">
          <InputField
            control={form.control}
            name="firstname"
            label="Firstname"
            placeholder="ex. John"
          />
          <InputField
            control={form.control}
            name="lastname"
            label="Lastname"
            placeholder="ex. Doe"
          />
        </div>
        <InputField
          control={form.control}
          name="address"
          label="Address"
          placeholder="Enter your address"
        />
        <div className="flex gap-2">
          <InputField
            control={form.control}
            name="state"
            label="State"
            placeholder="ex. MH"
          />
          <InputField
            control={form.control}
            name="postalCode"
            label="Postal Code"
            placeholder="ex. 123456"
          />
        </div>
        <div className="flex gap-2">
          <InputField
            control={form.control}
            name="username"
            label="Email"
            placeholder="Email"
          />
          <InputField
            control={form.control}
            name="dob"
            label="Date of Birth"
            placeholder="DD-MM-YYYY"
          />
        </div>
        <InputField
          control={form.control}
          name="password"
          label="Password"
          placeholder="Password"
          type="password"
        />
        <div className="flex flex-col gap-2">
          <Button type="submit" className="form-btn" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 size={20} className="loader" /> Loading...{" "}
              </>
            ) : (
              <>Sign Up</>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
