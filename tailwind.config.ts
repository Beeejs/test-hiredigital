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
        },
      keyframes: {
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        contentShow: {
          from: { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' }
        },
        hide: {
          from: { opacity: '1' },
          to: { opacity: '0' }
        },
        slideIn: {
          from: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
          to: { transform: 'translateX(0)' }
        },
        swipeOut: {
          from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          to: { transform: 'translateX(calc(100% + var(--viewport-padding)))' }
        }
      },
      animation: {
        hide: 'hide 100ms ease-in',
        slideIn: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        swipeOut: 'swipeOut 100ms ease-out',
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)'
      }
    }
  },
  darkMode: 'class',
  plugins: []
};
export default config;
