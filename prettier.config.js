module.exports = {
  // printWidth: 180,
  // trailingComma: 'es5',
  singleQuote: true,
  // semi: true,
  overrides: [
    {
      files: ['*.html', '_bootstrap-custom.scss'],
      options: {
        parser: 'ignore',
      },
    },
  ],
};
