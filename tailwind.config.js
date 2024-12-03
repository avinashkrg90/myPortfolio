export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
        gelasio: ["'Gelasio'", "serif"],
        NotoSans: ["Noto Sans", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
  },
  },
  plugins: [
    require('tailwindcss-3d'),
  ],
}
