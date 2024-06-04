/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'acento-principal': '#0077B6',
        'acento-principal-hover': '#14A6F3',
        'acento-principal-pressed': '#024B72',
        'acento-secundario': '#00AFB9',
        'acento-secundario-hover': '#36EBF5',
        'acento-secundario-pressed': '#027C83',
        secundario: '#1C2A39',
        'neutro-1': '#FFFFFF',
        'neutro-2': '#E1E4EF',
        'neutro-3': '#C4D3E5',
        'neutro-4': '#97A8C2',
        background: '#F0F3F8',
        'complementario-1': '#E4BF31',
        'complementario-2': '#6E6BD1',
        'complementario-3': '#7DD181',
        error: '#EB5160',
        'error-hover': '#FA939D',
        'error-pressed': '#BA2F3D'
      },
      boxShadow: {
        1: "3px 3px 17px rgba(151, 168, 194, 0.24)",
      },
      fontFamily: {
        sans: ["metropolis"],
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
  ],
};
