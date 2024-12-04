import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "bg-secondary": "#F9FAFB",
        "text-placeholder": "#667085",
        "text-primary": "#101828",
        "text-tertiary": "#475467",
        "text-secondary": "#344054",
        "border-primary": "#D0D5DD",
        "border-secondary": "#EAECF0",
        "button-secondary-color-fg": "#6941C6",
        "button-primary-bg": "#7F56D9",
        "button-secondary-color-border": "#D6BBFB",
      },
      margin: {
        "7.5": "30px",
      },
    },
  },
  plugins: [],
} satisfies Config;
