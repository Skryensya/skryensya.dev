import "./globals.css";
import type { Metadata } from "next";
import { cn } from "@/lib/utilities";
import { Roboto } from "next/font/google";
import { Header } from "@/components/header";

const font = Roboto({
  weight: "400",
  subsets: ["latin"],
});

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
      <body className={cn(font.className, "min-h-screen overflow-x-hidden")}>
        {/* Navbar */}
        <Header></Header>
        {/* main */}
        <main className="container mx-auto h-full pt-8">{children}</main>
        {/* Footer */}
        <footer className={cn("fixed bottom-0 flex justify-center p-2")}>
          <p>© 2024 Allison Peña</p>
        </footer>
      </body>
    </html>
  );
}
