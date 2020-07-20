module.exports = {
    displayName: {
        color: 'cyan',
        name: 'unit',
    },
    testEnvironment: 'node',
    testMatch: ['<rootDir>/src/**/*unit.test.ts'],
    testPathIgnorePatterns: ['/node_modules/'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|ts|jsx|tsx|mjs)$'],
};
