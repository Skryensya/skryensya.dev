import "./globals.css";
import type { Metadata } from "next";
import { cn } from "@/lib/utilities";
import { Roboto } from "next/font/google";
import ToggleTheme from "@/components/toggleTheme";

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
        <header className={cn("flex justify-between border-b  p-2")}>
          <div className="flex items-center px-10 text-xl">
            Allison&apos;s Vault
          </div>
          <nav>
            <ul className={cn("flex items-center gap-4 px-10")}>
              <li>
                <a href="#link-1">link-1</a>
              </li>
              <li>
                <a href="#link-2">link-2</a>
              </li>
              <li>
                <a href="#link-3">link-3</a>
              </li>
              <li>
                <ToggleTheme />
              </li>
            </ul>
          </nav>
        </header>
        {/* main */}
        <main className="container mx-auto h-full pt-8">{children}</main>
        {/* Footer */}
        <footer className={cn("flex justify-center p-2 fixed bottom-0")}>
          <p>© 2024 Allison Peña</p>
        </footer>
      </body>
    </html>
  );
}
