/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: "#223E5B",
            50: "#F0F4F8",
            100: "#D9E2EC",
            200: "#BCCCDC",
            300: "#9FB3C8",
            400: "#627D98",
            500: "#486581",
            600: "#334E68",
            700: "#223E5B",
            800: "#102A43",
            900: "#0B1B2B",
          },
          coral: {
            DEFAULT: "#F69176",
            hover: "#E87C5F",
            light: "#FDEAE5",
            dark: "#D95E40",
          },
          mint: {
            DEFAULT: "#E9F4EE",
            dark: "#D0E7D9",
            text: "#1E4A38",
          },
          cream: {
            DEFAULT: "#F2E7D3",
            dark: "#E4D3B4",
          },
          peach: {
            DEFAULT: "#EBCBB0",
            dark: "#DBB392",
          },
          offwhite: "#FCF8F3",
          charcoal: "#1A242D",
          muted: "#6B7A88",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(34, 62, 91, 0.06)",
        card: "0 10px 30px -5px rgba(34, 62, 91, 0.08)",
        elevated: "0 20px 40px -15px rgba(34, 62, 91, 0.12)",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "float-medium": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "bounce-in": {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "70%": { transform: "scale(1.1)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(246, 145, 118, 0)" },
          "50%": { boxShadow: "0 0 24px 8px rgba(246, 145, 118, 0.35)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "count-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "border-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "float-slow": "float-slow 6s ease-in-out infinite",
        "float-medium": "float-medium 4s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        marquee: "marquee 28s linear infinite",
        "spin-slow": "spin-slow 12s linear infinite",
        "bounce-in": "bounce-in 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97)",
        "slide-up": "slide-up 0.5s ease-out forwards",
        "glow-pulse": "glow-pulse 2.5s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        "count-up": "count-up 0.6s ease-out forwards",
        "border-flow": "border-flow 4s ease infinite",
        "scale-in": "scale-in 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards",
      },
    },
  },
  plugins: [],
};
