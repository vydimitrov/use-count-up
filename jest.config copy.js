module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  maxWorkers: 4,
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
}
