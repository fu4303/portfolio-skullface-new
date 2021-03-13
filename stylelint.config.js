module.exports = {
  extends: ['stylelint-config-primer'],
  plugins: ['stylelint-scss'],
  syntax: 'scss',
  rules: {
    'selector-max-type': null,
    'primer/no-unused-vars': true,
    'primer/no-undefined-vars': true,
    'primer/no-override': null,
    'primer/colors': null,
    'primer/no-scale-colors': null,
    'primer/borders': null,
    'primer/spacing': null,
    'primer/typography': null,
    'primer/box-shadow': null,
  }
}
