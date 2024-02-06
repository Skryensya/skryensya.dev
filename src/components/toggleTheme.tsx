"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utilities";

export default function ToggleTheme() {
  // when press shift + T on mac, toggle dark mode

  useEffect(() => {
    const toggleTheme = () => {
      document.documentElement.classList.toggle("dark");
    };

    document.addEventListener("keydown", (e) => {
      if (e.key === "t" || e.key === "T") {
        toggleTheme();
      }
    });
  }, []);
  return (
    <>
      <button
        onClick={() => {
          document.documentElement.classList.toggle("dark");
        }}
        className={cn(
          "border-2 border-black px-2 focus:outline-none",
          " dark:border-gray-200 dark:bg-gray-800  dark:text-gray-200",
        )}
      >
        <span className="dark:hidden">Dark</span>
        <span className="hidden dark:block">Light</span>
      </button>
    </>
  );
}
