/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFD700", // Amarelo forte para botões e destaques
        secondary: "#333333", // Cinza escuro para textos
        background: "#181818", // Preto para o fundo
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
