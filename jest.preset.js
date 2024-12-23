const nxPreset = require('@nx/jest/preset').default;
const babelModules = ['plotly.js'].join('|');

module.exports = {
  ...nxPreset,
  verbose: true,
  transform: {
    '^.+\\.(ts|js|mjs|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
        astTransformers: ['jest-preset-angular/build/InlineFilesTransformer', 'jest-preset-angular/build/StripStylesTransformer'],
        isolatedModules: true
      }
    ],
    [`(${babelModules}).+\\.js$`]: 'babel-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es/*)', '<rootDir>/node_modules/(?!.*\\.mjs$)'],
  reporters: ['default', ['jest-junit', { outputDirectory: './testresults/', outputName: `junit-${new Date().getTime()}.xml` }]],
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
  /* TODO: Update to latest Jest snapshotFormat
   * By default Nx has kept the older style of Jest Snapshot formats
   * to prevent breaking of any existing tests with snapshots.
   * It's recommend you update to the latest format.
   * You can do this by removing snapshotFormat property
   * and running tests with --update-snapshot flag.
   * Example: "nx affected --targets=test --update-snapshot"
   * More info: https://jestjs.io/docs/upgrading-to-jest29#snapshot-format
   */
  snapshotFormat: { escapeString: true, printBasicPrototype: true }
};
