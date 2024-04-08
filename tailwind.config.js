/** @type {import('tailwindcss').Config} */
import pluginFlowbite from 'flowbite/plugin'

export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "node_modules/flowbite-react/lib/esm/**/*.js",
      "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [pluginFlowbite],
}

