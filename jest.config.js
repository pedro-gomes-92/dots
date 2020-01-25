process.env.TZ = 'UTC';

const PACKAGES_PATH = {
  components: '<rootDir>/src/components',
  core: '<rootDir>/src/core',
};

const JS = '{js,jsx,ts,tsx}';
const GENERAL_IGNORE = [`**/index.${JS}`, `**/typings/*.${JS}`];

// temporarily ignore the following folders from testing to get a starting point that includes code coverage
// every sprint iteration should remove some of these entries until we can remove this variable alltogether!
// @TODO remove variable ASAP
const TMP_IGNORE = [
  `${PACKAGES_PATH.components}/actions/**/*.${JS}`,
  `${PACKAGES_PATH.components}/containers/**/*.${JS}`,
  `${PACKAGES_PATH.components}/data/**/*.${JS}`,
  `${PACKAGES_PATH.components}/fields/**/*.${JS}`,
  `${PACKAGES_PATH.components}/layouts/**/*.${JS}`,
  `${PACKAGES_PATH.components}/miscellaneous/**/*.${JS}`,
  `${PACKAGES_PATH.components}/pickers/**/*.${JS}`,
  `${PACKAGES_PATH.components}/popups/**/*.${JS}`,
  `${PACKAGES_PATH.components}/text/**/*.${JS}`,
  `${PACKAGES_PATH.components}/utils/**/*.${JS}`,

  `${PACKAGES_PATH.core}/formats/format.${JS}`,
  `${PACKAGES_PATH.core}/formats/number.${JS}`,
  `${PACKAGES_PATH.core}/utilities/**/*.${JS}`,
];

module.exports = {
  roots: Object.values(PACKAGES_PATH),
  collectCoverageFrom: [
    ...Object.values(PACKAGES_PATH).map(path => `${path}/**/*.${JS}`),
    ...GENERAL_IGNORE.map(ignore => `!${ignore}`),
    ...TMP_IGNORE.map(ignore => `!${ignore}`), // @TODO: remove ASAP
  ],
  coverageThreshold: {
    global: {
      statements: 75,
      branches: 75,
      functions: 75,
      lines: 75,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^@dots/core$': PACKAGES_PATH.core,
    '^@dots/components$': PACKAGES_PATH.components,
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  preset: 'ts-jest/presets/js-with-babel',
  testRegex: '(__)?tests(__)?/.*\\.test\\.[jt]sx?$',
  setupFiles: ['<rootDir>/src/components/__mocks__/globals/index.js'],
  reporters: ['default', ['jest-junit', { outputDirectory: './coverage', outputName: 'coverage-junit.xml' }]],
};
