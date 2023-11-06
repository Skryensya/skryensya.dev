import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utilities";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Allison peña",
  description: "Personal site of Allison peña",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, " overflow-x-hidden bg-red-500")}>
        <Navbar />
        <Sidebar />
        <div className="ml-[31px] mt-[47px] px-4 py-8 md:px-8 md:py-12">
          {children}
        </div>
      </body>
    </html>
  );
}
