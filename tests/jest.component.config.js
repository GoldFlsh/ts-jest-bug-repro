module.exports = {
    rootDir: '../',
    displayName: {
        color: 'yellow',
        name: 'component',
    },
    setupFilesAfterEnv: ['<rootDir>/tests/setup/local-setup.ts'],
    testEnvironment: 'node',
    testMatch: ['<rootDir>/tests/**/*component.test.ts'],
    testPathIgnorePatterns: ['/node_modules/'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        'setup/kinesalite.d.ts': 'ts-jest'
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|ts|jsx|tsx|mjs)$'],
};