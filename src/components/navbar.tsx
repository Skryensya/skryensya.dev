"use client";
import { useState } from "react";
import { cn } from "@/lib/utilities";

const LINKS = [
  {
    title: "About me",
    url: "/",
    target: "_self",
  },
  {
    title: "My work",
    url: "/",
    target: "_self",
  },
  {
    title: "Workshop",
    url: "/",
    target: "_self",
  },
  {
    title: "Blog",
    url: "/",
    target: "_self",
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 top-0 bg-white">
      <nav className="w-full border-b-2 py-1 ">
        <div className="pl-12">
          <div className="flex items-center justify-between ">
            <p>{"Allison Peña's site"}</p>
            <div className="flex flex-col">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                className="mr-3 flex flex-col rounded-full bg-gray-300 p-1 md:hidden"
              >
                <svg
                  className="h-6 w-6 fill-current text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <title>Menu</title>
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            className={cn(" overflow-hidden transition-all duration-500")}
            style={{
              height: isMobileMenuOpen ? "100dvh" : "0",
            }}
          >
            {LINKS && LINKS.length ? (
              <ul className={cn("flex flex-col md:flex-row ")}>
                {LINKS.map((link, index) => (
                  <li key={index} className="mr-6 inline-block">
                    <a
                      className=" transition-all duration-500 hover:underline md:text-base"
                      href={link.url}
                      title={
                        "Go to " +
                        link.title +
                        (link.target === "_blank" ? " page" : " section")
                      }
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
}
