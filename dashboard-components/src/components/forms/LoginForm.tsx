"use client";

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
import { loginFormSchema } from "@/lib/form-schema/authFormSchema";
import InputField from "../ui-custom/InputField";
import { Loader2 } from "lucide-react";

export default function LoginForm() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    // Do something with the form values.
    setIsLoading(true);
    console.log(values);
    setIsLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          control={form.control}
          name="username"
          label="Email"
          placeholder="Email"
        />
        <InputField
          control={form.control}
          name="password"
          label="Password"
          placeholder="Password"
          type="password"
        />
        <div className="flex flex-col gap-3">
          <Button type="submit" className="form-btn" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" /> Loading...{" "}
              </>
            ) : (
              <>Sign In</>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
