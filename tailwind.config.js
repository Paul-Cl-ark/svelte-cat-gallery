module.exports = {
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ['./src/**/*.html', './src/**/*.svelte', './src/**/*.js']
}
