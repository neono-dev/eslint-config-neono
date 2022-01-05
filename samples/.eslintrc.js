module.exports = {
    extends: ['../react.js', '../index.js'],
    overrides: [
        {
            files: ['**/*.ts?(x)'],
            parserOptions: {
                project: require.resolve('./tsconfig.json'),
                tsconfigRootDir: __dirname,
            },
        },
    ],
}
