/** @type {import('tailwindcss').Config} */
import keyframeAndAnimation from './keyframeAndAnimation';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     ...keyframeAndAnimation, 
    },
  },
  plugins: [],
}

