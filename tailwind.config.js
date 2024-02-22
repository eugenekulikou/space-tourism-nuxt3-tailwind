/** @type {import('tailwindcss').Config} */

export default {
  content: [],
  theme: {
    fontFamily: {
      'sans-cond': ['Barlow Condensed'],
      'sans-normal': ['Barlow'],
      serif: ['Bellefair'],
    },
    fontSize: {
      sm: '0.875rem' /* 14px */,
      base: '1rem' /* 16px */,
      xl: '1.125rem' /* 18px */,
      '2xl': '1.75rem' /* 28px */,
      '4xl': '2rem' /* 32px */,
      '6xl': '3.5rem' /* 56px */,
      '8xl': '6.25rem' /* 100px */,
      '9xl': '9.375rem' /* 150px */,
    },
    letterSpacing: {
      normal: '0',
      wide: '0.1469rem' /*  2.35 */,
      wider: '0.1688rem' /* 2.7px */,
      widest: '0.2969rem' /* 4.75px */,
    },
    extend: {
      colors: {
        light: 'hsl(var(--color-light) / <alpha-value>)',
        dark: 'hsl(var(--color-dark) / <alpha-value>)',
      },
      gridTemplateColumns: {
        default:
          'minmax(2rem, 1fr) repeat(2, minmax(0, 40rem)) minmax(2rem, 1fr)',
      },
      /* Does not respect hot-reload, server restart required */
      gridTemplateAreas: {
        'destinations-mobile': ['title', 'image', 'tabs', 'content'],
        'destinations-desktop': [
          '. title title .',
          '. image tabs .',
          '. image content .',
        ],
        'crew-mobile': ['title', 'image', 'dots-nav', 'content'],
        'crew-tablet': ['title', 'content', 'dots-nav', 'image'],
        'crew-desktop': [
          '. title image .',
          '. content image .',
          '. dots-nav image .',
        ],
      },
    },
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')],
  variants: {
    gridTemplateAreas: ['responsive'],
  },
};
