/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        
        'second-section': "url('/images/second-section.png')",
        'footer-section': "url('/images/footer-bg.png')",
        'main-section': "url('/images/mountain.png')",
        'main-section-sky': "url('/images/sky.png')",
      },

      colors: {
        'rgba-41-77-95': 'rgba(41, 77, 95, 0.844437)',
        'rgba-2f-566a': '#2F566A',
      },
    },
  },
  plugins: [],
};
