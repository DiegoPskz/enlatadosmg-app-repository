/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "work-black": ["WorkSans-Black"],
        "work-medium": ["WorkSans-Medium"],
        "work-light": ["WorkSans-Light"],
      },
      colors: {
        primary: "#1E40AF", // ejemplo
        secondary: "#0F172A", // ejemplo
        "secondary-100": "#334155",
        "secondary-200": "#475569",
      },
    },
  },
  plugins: [],
};
