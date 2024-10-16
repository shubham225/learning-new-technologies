import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tailwind with NextJS",
  description: "Test Project to learn Tailwind CSS and NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container p-3 h-screen">
        <div className="border h-full p-2 rounded-lg shadow-sm overflow-auto">
          <div className="m-2">{children}</div>
        </div>
      </body>
    </html>
  );
}
