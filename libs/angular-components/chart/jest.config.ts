/* eslint-disable */
const name = 'chart';
const suiteName = 'ChartModule';

export default {
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],

  preset: '../../../jest.preset.js',
  coverageDirectory: `../../../coverage/libs/${name}`,
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './testresults/',
        outputName: `junit-${name}.xml`,
        suiteName,
        classNameTemplate: '{classname}',
        titleTemplate: `${suiteName} › {classname} › {title}`,
        ancestorSeparator: ' › '
      }
    ]
  ],
  displayName: 'chart'
};
