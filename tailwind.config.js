/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 100s linear infinite",
        "slide-bg": "slide 14s linear infinite",
        "marquee": "marquee 40s linear infinite",
        "move-smoke": "moveSmoke 15s ease-in-out infinite",
        "slight-rotate-grayscale": "slightRotateAndGrayscaleToggle 15s ease-in-out infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        slide: {
          "0%": { "background-position": "0% 50%" },
          "100%": { "background-position": "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        moveSmoke: {
          "0%, 100%": { transform: "translateX(0) scale(0.5)" },
          "50%": { transform: "translateX(10px) scale(1.8)" },
        },
        slightRotateAndGrayscaleToggle: {
          "0%, 40%": { filter: "grayscale(100%)", transform: "rotate(0deg)" },
          "50%, 90%": { filter: "grayscale(0%)", transform: "rotate(15deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements' })],
};