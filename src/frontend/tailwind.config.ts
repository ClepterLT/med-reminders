import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xxs: "480px",
        xs: "568px",
        sm: "768px",
        md: "1024px",
        lg: "1280px",
        xl: "1440px",
        notouch: { raw: "(hover: hover)" },
      },
      colors: {
        'purple': '#9333EA',
        'darkPurple': '#592693'
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        stardos: ['var(--font-stardos)'],
      }
    },
  },
  plugins: [],
}
export default config
