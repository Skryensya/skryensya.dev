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
        className="fixed bottom-10 right-10 z-50 rounded-md border-2
        bg-gray-200 p-2 transition duration-200
        ease-in-out hover:bg-gray-300 hover:text-gray-700 focus:outline-none
        focus:ring-2 focus:ring-gray-400 dark:bg-gray-800
        dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-gray-600"
      >
        Toggle theme
      </button>
    </>
  );
}
