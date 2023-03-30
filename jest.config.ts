const { getJestProjects } = require('@nrwl/jest');

export default {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/angular-test-app',
    '<rootDir>/packages/angular-components/core',
    '<rootDir>/packages/angular-components/global-search',
    '<rootDir>/packages/angular-components/popover',
    '<rootDir>/packages/angular-components/scroll-to-top',
    '<rootDir>/packages/angular-components/table',
    '<rootDir>/packages/angular-components/filter/filter-tags',
    '<rootDir>/packages/angular-components/filter/filter-tree',
    '<rootDir>/packages/angular-components/filter/multiselect-tags',
    '<rootDir>/packages/angular-components/repeater',
    '<rootDir>/packages/angular-components/vector-map',
    '<rootDir>/packages/angular-components/wizard',
    '<rootDir>/packages/angular-components/skeleton-text',
    '<rootDir>/packages/angular-components/chart',
    '<rootDir>/packages/angular-components/filter/filter-group',
    '<rootDir>/packages/angular-components/filter/filter-toggle',
    '<rootDir>/packages/angular-components/global-nav',
    '<rootDir>/packages/angular-components/avatar',
    '<rootDir>/packages/angular-components/banner',
    '<rootDir>/packages/angular-components/user-profile-menu',
    '<rootDir>/packages/angular-components/expandable-table',
    '<rootDir>/packages/angular-components/entity-menu',
    '<rootDir>/packages/angular-components/cards/account-card',
    '<rootDir>/packages/angular-components/toaster',
    '<rootDir>/packages/angular-components/video-thumbnail',
    '<rootDir>/packages/angular-components/status-steps'
  ]
};
