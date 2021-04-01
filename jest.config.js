module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    '**/components/**/*.spec.js'
  ],
  setupFiles: ['./jest.setup.js'],
  transformIgnorePatterns: ['/node_modules/(?!vuetify|@mdi)']
}
