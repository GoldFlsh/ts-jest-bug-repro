module.exports = {
    globals: {
        'ts-jest': {'tsConfigFile': '<rootDir>/tsconfig.test.json'}
    },
    projects: ['<rootDir>/jest.unit.config.js', '<rootDir>/tests/jest.component.config.js'],
    testRunner: 'jest-circus/runner',
};