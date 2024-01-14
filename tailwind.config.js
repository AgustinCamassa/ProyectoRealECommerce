/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#C126B8",
      white: "#FFFFFF",
      black: "#1D110D",
      text: "##747171",
    },
    fontSize: {
      h1: [
        "6rem",
        {
          lineHeight: "7.5rem",
          letterSpacing: "-0.094rem",
          fontWeight: "300",
        },
      ],
      h2: [
        "3rem",
        {
          lineHeight: "3.5rem",
          letterSpacing: "1.5rem",
          fontWeight: "500",
        },
      ],
      h3: [
        "2.5rem",
        {
          lineHeight: "3rem",
          fontWeight: "700",
        },
      ],
      h4: [
        "2rem",
        {
          lineHeight: "2rem",
          letterSpacing: "-0.094rem",
          fontWeight: "300",
        },
      ],
      subtitle: [
        "1.5rem",
        {
          lineHeight: "1.5rem",
          fontWeight: "500",
        },
      ],
      p1: [
        "1.25rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "0.01rem",
          fontWeight: "500",
        },
      ],
      p2: [
        "1rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "0.01rem",
          fontWeight: "500",
        },
      ],
      p3: [
        "1rem",
        {
          lineHeight: "1.25rem",
          letterSpacing: "0.01rem",
          fontWeight: "400",
        },
      ],
    },
    screens: {
      sm: "600px",
      md: "768px",
      lg: "984px",
      xl: "1240px",
      "2xl": "1624px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
