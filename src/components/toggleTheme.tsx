"use client";

import { useEffect } from "react";

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
        className="border-2 p-2 rounded-md bg-gray-200 dark:bg-gray-800 dark:text-gray-200
        hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-300
        focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600
        transition duration-200 ease-in-out
        fixed bottom-10 right-10 z-50"
      >
        Toggle theme
      </button>
    </>
  );
}
