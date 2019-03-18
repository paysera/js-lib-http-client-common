module.exports = {
    roots: [
        'src/',
    ],
    setupFiles: ['jest-localstorage-mock'],
    testRegex: '(/__tests__/.*\\.test)\\.jsx?$',
    transformIgnorePatterns: [
        '<rootDir>/node_modules/(?!lodash-es)',
    ],
};
