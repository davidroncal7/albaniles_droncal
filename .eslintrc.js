module.exports = {
    env: {
        browser: true,
        es2021: true,
        'jest/globals': true,
    },
    extends: 'airbnb-base',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 4],
    },
    plugins: ['jest'],
};
