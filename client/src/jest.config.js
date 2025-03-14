export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['</client/src/App.test.js'], //node_modules pointer
  "type": "module",
  "jest": {
    "transform": {}
  }
};