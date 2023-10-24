import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
  const scrollbarClasses =
    "scrollbar scrollbar-thumb-accent-900 scrollbar-track-background-50 scrollbar-track-pl-4 scrollbar-corner-background-200 scrollbar-w-1 md:scrollbar-w-2 scrollbar-h-2";
  return (
    <html lang="en" className={scrollbarClasses}>
      <body className={inter.className}>
        <div className="flex">
          <aside className="fixed h-[100vh] border-r-[1.5px] border-primary-950 bg-background-50 md:w-[35px] w-[30px]">
            <div className="h-full w-10/12 border-r-[1px] border-text-950 pt-[80vh]">
              <h4 className="rotate-[270deg] w-fit translate-y-10 md:translate-y-16 -translate-x-5 md:-translate-x-7 ">
                <a
                  href="https://instagram.com/skryensya_"
                  target="_blank"
                  className="text-sm md:text-base whitespace-nowrap"
                >
                  @Skryensya
                </a>
              </h4>
            </div>
          </aside>
          <div className="md:ml-[35px] ml-[30px] px-6 mt-12 font-body">{children}</div>
        </div>
      </body>
    </html>
  );
}
