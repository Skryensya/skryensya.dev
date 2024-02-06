"use client";
import { useState } from "react";
import { cn } from "@/lib/utilities";
import ToggleTheme from "@/components/toggleTheme";

export function Header() {
  return (
    <header className={cn("flex justify-between border-b  p-2")}>
      <div className="flex items-center px-2 text-lg font-bold md:px-10 md:text-xl">
        Allison&apos;s Vault
      </div>
      <nav className="flex items-center">
        <ul className={cn("flex items-center gap-4 md:px-10")}>
          {/* <li>
            <a href="#link-1" className="whitespace-nowrap">
              link-1
            </a>
          </li>
          <li>
            <a href="#link-2" className="whitespace-nowrap">
              link-2
            </a>
          </li> */}

          <li>
            <ToggleTheme />
          </li>
        </ul>
      </nav>
    </header>
  );
}
