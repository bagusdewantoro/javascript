/** @type {import('tailwindcss').Config} */
export default {
  content: [
  	"./index.html",
    "./src/**/*.{html,jsx}",
  	"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    	colors: {
    		primary: '#596fff',
    	}
    },
  },
  plugins: [],
}

