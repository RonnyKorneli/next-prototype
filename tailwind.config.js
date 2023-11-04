/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  mode: 'jit',
  important: false,
  content: [
    './helpers/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  corePlugins: {
    preflight: true,
    container: true,
  },
  theme: {
    flexGrow: {
      0: 0,
      '0-1': 0.00001,
      1: 1,
    },
    extend: {
      boxShadow: {
        '1xl': '0 0 4px rgba(0, 0, 0, 0.2)',
      },
      fontSize: {
        '2xs': ' .6875rem;',
        tiny: ' .625rem;',
      },
      transitionProperty: {
        height: 'height',
        'max-height': 'max-height',
      },
      transitionDelay: {
        1500: '1500ms',
        2000: '2000ms',
      },
      screens: {
        isHoverable: { raw: '(hover: hover)' },
      },
      // that is animation class
      animation: {
        'fade-in': 'fade-in 1s ease-in',
        heartbeat: 'heartbeat 0.9s linear 2',
        bouncedelay: 'bouncedelay 1.4s infinite ease-in-out',
        'shrink-bounce': '200ms cubic-bezier(0.4, 0, 0.23, 1) shrink-bounce',
        'checkbox-check':
          'checkbox-check 125ms 250ms cubic-bezier(0.4, 0, 0.23, 1) forwards;',
      },

      // that is actual animation
      keyframes: (_theme) => ({
        'fade-in': {
          '0%': { opacity: 0 },
          '25%': { opacity: 0.8 },
          '50%': { opacity: 0.95 },
          '100%': { opacity: 1 },
        },
        heartbeat: {
          '0%': { transform: 'scale(1.1, 1.1)' },
          '50%': { transform: 'scale(1.3, 1.3)' },
          '100%': { transform: 'scale(1, 1)' },
        },
        bouncedelay: {
          '0%': { transform: 'scale(0)' },
          '40%': { transform: 'scale(1)' },
          '80%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(0)' },
        },
        'shrink-bounce': {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(0.85)' },
          '100%': { transform: 'scale(1)' },
        },
        'checkbox-check': {
          '0%': {
            width: '0',
            height: '0',
            borderColor: 'var(color-white)',
            transform: 'translate3d(3px, 0, 0) rotate(45deg)',
          },
          '33%': {
            width: '5px',
            height: '0',
            borderColor: 'var(color-white)',
            transform: 'translate3d(3px, 0, 0) rotate(45deg)',
          },
          '100%': {
            width: '5px',
            height: '10px',
            borderColor: 'var(color-white)',
            transform: 'translate3d(3px, -7px, 0) rotate(45deg)',
          },
        },
      }),
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: {
          'light-70': '#eff3f6',
          'light-50': '#e5ebef',
          'light-45': '#e8eaed',
          'light-20': '#91a8ba',
          'light-10': '#6687a0',
          'light-5': '#2f5878',
          DEFAULT: '#003761',
          'dark-40': '#dae1e6',
          'dark-10': '#002948',
        },
        grey: {
          'light-60': '#fafafa',
          'light-50': '#f2f2f2',
          'light-45': '#e4e4e4',
          'light-40': '#dddddd',
          'light-30': '#cccccc',
          'light-20': '#aaaaaa',
          'light-10': '#878787',
          DEFAULT: '#646464',
          'dark-10': '#4a4a4a',
          'dark-30': '#191919',
        },
        pink: {
          'light-80': '#fce5f2',
          DEFAULT: '#e4007d',
          'dark-20': '#cb136f',
        },
        green: {
          'light-80': '#f7fbef',
          DEFAULT: '#9acc33',
          'dark-20': '#73ae29',
        },
        yellow: {
          'light-80': '#fef9e7',
          DEFAULT: '#f8c211',
        },
        white: {
          DEFAULT: '#ffffff',
        },
        black: {
          DEFAULT: '#000000',
        },
        eek: {
          a: '#00a651',
          b: '#50b848',
          c: '#b8d03f',
          d: '#feef38',
          e: '#fab031',
          f: '#ed672d',
          g: '#e30613',
        },
        amazon: {
          fill: '#facb00',
          border: '#b68921',
        },
        error: {
          DEFAULT: '#f16d7a',
        },
        visited: {
          DEFAULT: '#660099',
        },
        facebook: {
          DEFAULT: '#395999',
        },
        twitter: {
          DEFAULT: '#5da8de',
        },
        pinterest: {
          DEFAULT: '#b92821',
        },
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value,
            };
          },
        },
        {
          values: theme('transitionDelay'),
        }
      );
    }),
    require('@tailwindcss/line-clamp'),
  ],
};
