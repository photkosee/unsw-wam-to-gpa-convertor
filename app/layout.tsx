import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/app/globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UNSW WAM to GPA Convertor",
  description:
    "An app that helps UNSW students convert their WAM to GPA by simply uploading their academic transcript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
