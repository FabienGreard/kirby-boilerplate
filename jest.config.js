module.exports = {
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/components/$1',
    '^lang/(.*)$': '<rootDir>/lang/$1',
    '^pages/(.*)$': '<rootDir>/pages/$1',
    '^utils/(.*)$': '<rootDir>/utils/$1',
    '^hooks/(.*)$': '<rootDir>/hooks/$1',
    '^package.json$': '<rootDir>/package.json',
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(test).[tj]s?(x)'],
  globals: {
    'ts-jest': {
      astTransformers: {
        before: ['@formatjs/ts-transformer'],
      },
    },
  },
  collectCoverageFrom: [
    'hooks/**/*.(ts|tsx)',
    'components/**/*.(ts|tsx)',
    'utils/**/*.(ts|tsx)',
    '!utils/customTestRender.(ts|tsx)',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
};
