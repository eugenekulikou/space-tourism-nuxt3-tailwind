module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 80,
  singleAttributePerLine: false,
  plugins: [
    'prettier-plugin-tailwindcss',
    'prettier-plugin-classnames',
    'prettier-plugin-merge',
  ],
  // tailwindConfig: 'tailwind.config.js',
  tailwindAttributes: ['class', ':class'],
};
