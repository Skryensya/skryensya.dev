import type { Config } from "tailwindcss";

const generateGrid = (size: number) => {
  const gridColumn: { [key: string]: string } = {};
  const gridTemplateColumns: { [key: number]: string } = {};
  const gridRow: { [key: string]: string } = {};
  const gridTemplateRows: { [key: number]: string } = {};
  const gridRowStart: { [key: number]: string } = {};
  const gridRowEnd: { [key: number]: string } = {};
  const gridColumnStart: { [key: number]: string } = {};
  const gridColumnEnd: { [key: number]: string[] } = {};

  for (let i: number = 1; i <= size; i++) {
    gridRow[`span-${i}`] = `span ${i} / span ${i}`;
    gridColumn[`span-${i}`] = `span ${i} / span ${i}`;
    gridTemplateColumns[i] = `repeat(${i}, minmax(0, 1fr))`;
    gridTemplateRows[i] = `repeat(${i}, minmax(0, 1fr))`;
    gridRowStart[i] = `${i}`;
    gridRowEnd[i] = `${i}`;
    gridColumnStart[i] = `${i}`;
    gridColumnEnd[i] = Array(i).fill(`${i}`);
  }

  return {
    gridColumn,
    gridTemplateColumns,
    gridRow,
    gridTemplateRows,
    gridRowStart,
    gridRowEnd,
    gridColumnStart,
    gridColumnEnd,
  };
};

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    extend: {
      fontSize: {
        sm: "0.750rem",
        base: "1rem",
        xl: "1.333rem",
        "2xl": "1.777rem",
        "3xl": "2.369rem",
        "4xl": "3.158rem",
        "5xl": "4.210rem",
      },
      fontFamily: {
        heading: "Trochut",
        body: "Encode Sans Semi Expanded",
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
      colors: {
        text: {
          50: "var(--text-50)",
          100: "var(--text-100)",
          200: "var(--text-200)",
          300: "var(--text-300)",
          400: "var(--text-400)",
          500: "var(--text-500)",
          600: "var(--text-600)",
          700: "var(--text-700)",
          800: "var(--text-800)",
          900: "var(--text-900)",
          950: "var(--text-950)",
        },
        background: {
          50: "var(--background-50)",
          100: "var(--background-100)",
          200: "var(--background-200)",
          300: "var(--background-300)",
          400: "var(--background-400)",
          500: "var(--background-500)",
          600: "var(--background-600)",
          700: "var(--background-700)",
          800: "var(--background-800)",
          900: "var(--background-900)",
          950: "var(--background-950)",
        },
        primary: {
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
          950: "var(--primary-950)",
        },
        secondary: {
          50: "var(--secondary-50)",
          100: "var(--secondary-100)",
          200: "var(--secondary-200)",
          300: "var(--secondary-300)",
          400: "var(--secondary-400)",
          500: "var(--secondary-500)",
          600: "var(--secondary-600)",
          700: "var(--secondary-700)",
          800: "var(--secondary-800)",
          900: "var(--secondary-900)",
          950: "var(--secondary-950)",
        },
        accent: {
          50: "var(--accent-50)",
          100: "var(--accent-100)",
          200: "var(--accent-200)",
          300: "var(--accent-300)",
          400: "var(--accent-400)",
          500: "var(--accent-500)",
          600: "var(--accent-600)",
          700: "var(--accent-700)",
          800: "var(--accent-800)",
          900: "var(--accent-900)",
          950: "var(--accent-950)",
        },
      },
    },
  },
  plugins: [
    // ...
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
export default config;
