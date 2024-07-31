/* eslint-disable object-curly-spacing */
/* eslint-disable @typescript-eslint/no-var-requires */
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#FFFFFF',
        codeBlue: '#002080',
        codeWhite: '#EBF0FF',
        codeGreen: '#07BEB8'
      },
      fontFamily: {
        Poppins : ['Poppins', 'sans-serif']
      },
      screens: {
        // eslint-disable-next-line quote-props
          'sm-mobile': {'max':'360px'},
        // eslint-disable-next-line quote-props
          'md-mobile': {'max':'480px'},
        // eslint-disable-next-line quote-props
          'mobile': {'max':'640px'},
        // eslint-disable-next-line quote-props
          'tablet': {'max': '768px'},
        // eslint-disable-next-line quote-props
          'min-laptop': {'max':'1125px'},
        // eslint-disable-next-line quote-props
          'laptop': {'max':'1280px'},
        // eslint-disable-next-line quote-props
          'desktop': {'max':'1350px'}
        }
    }
  },
  darkMode: 'class',
  plugins: []
};
export default config;
