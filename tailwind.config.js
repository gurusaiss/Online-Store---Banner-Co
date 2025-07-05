module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        global: {
          background1: "var(--global-bg-1)",
          background2: "var(--global-bg-2)",
          background3: "var(--global-bg-3)",
          text1: "var(--global-text-1)",
          text2: "var(--global-text-2)"
        },
        footer: {
          background1: "var(--footer-bg-1)",
          text1: "var(--footer-text-1)"
        },
        product: {
          cilantroStart: "var(--product-cilantro-start)",
          cilantroEnd: "var(--product-cilantro-end)",
          srirachaRedStart: "var(--product-sriracha-red-start)",
          srirachaRedEnd: "var(--product-sriracha-red-end)",
          srirachaGoldStart: "var(--product-sriracha-gold-start)",
          srirachaGoldEnd: "var(--product-sriracha-gold-end)"
        },
        hero: {
          gradientStart: "var(--hero-gradient-start)",
          gradientMid: "var(--hero-gradient-mid)",
          gradientEnd: "var(--hero-gradient-end)"
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        mongoose: ['FONTSPRING DEMO - Mongoose Medium', 'Montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
};