import { z } from "zod";

export const loginFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export const signUpFormSchema = z.object({
  firstname: z.string().min(2),
  lastname: z.string().min(2),
  address: z.string().max(50),
  state: z.string().min(2),
  postalCode: z.string().max(6),
  dob: z.string().length(10),
  username: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});