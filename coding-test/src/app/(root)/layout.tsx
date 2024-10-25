import { Card } from "@/components/ui/card";
import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen w-full p-5">
      <Card className="size-full">{children}</Card>
    </main>
  );
}
