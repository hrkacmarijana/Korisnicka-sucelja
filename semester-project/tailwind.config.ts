import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lb: '#EBE9E9', // Example custom color
        ml: '#7A6F69', // Another custom color
        db: '#443F3F',
        lblue: '#6F899A',
        org: '#EB8B57',
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
};

export default config;
