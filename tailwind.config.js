/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px", // Default small breakpoint
        md: "768px", // Default medium breakpoint
        lg: "1024px", // Default large breakpoint
        xl: "1280px", // Default extra large breakpoint
        "2xl": "1536px", // Default 2xl breakpoint
        xs: "400px", // Your new custom breakpoint
      },
    },
  },
  plugins: [require("daisyui")],
};
