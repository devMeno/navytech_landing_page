/** @type {import('tailwindcss').Config} */
//import pluginFlowbite from 'flowbite/plugin'
import {nextui} from "@nextui-org/react";

export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
    darkMode:'class',
  plugins: [nextui()],
}

