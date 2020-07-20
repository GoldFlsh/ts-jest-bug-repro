module.exports = {
    rootDir: '../',
    displayName: {
        color: 'yellow',
        name: 'component',
    },
    testEnvironment: 'node',
    testMatch: ['<rootDir>/tests/**/*component.test.ts'],
    testPathIgnorePatterns: ['/node_modules/'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|ts|jsx|tsx|mjs)$'],
};