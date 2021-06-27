module.exports = {
  ident: 'postcss',
  syntax: 'postcss-scss' /* install "postcss-scss" for SCSS style */,
  map: false /* its depends on your choice */,
  plugins: {
    'postcss-flexbugs-fixes': {},
    autoprefixer: {
      browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
      flexbox: 'no-2009',
    },
  },
};