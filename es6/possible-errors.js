/* eslint-disable */
module.exports = {
    extends: './non-rules-config.js',
    rules: {
        /**
         * Verify calls of `super()` in constructors.
         * https://eslint.org/docs/rules/constructor-super
         */
        "constructor-super": "error",
        /**
         * Disallow modifying variables that are declared using `const`.
         * https://eslint.org/docs/rules/no-const-assign
         */
        "no-const-assign": "error",
        /**
         * Disallow duplicate name in class members.
         * https://eslint.org/docs/rules/no-dupe-class-members
         */
        "no-dupe-class-members": "error",
        /**
         * Disallow Symbol Constructor.
         * https://eslint.org/docs/rules/no-new-symbol
         */
        "no-new-symbol": "error",
        /**
         * Disallow use of `this/super` before calling `super()` in constructors.
         * https://eslint.org/docs/rules/no-this-before-super
         */
        "no-this-before-super": "off",
        /**
         * Disallow use of optional chaining in contexts where the `undefined` value is not allowed.
         * https://eslint.org/docs/rules/no-unsafe-optional-chaining
         */
        "no-unsafe-optional-chaining": "error",
        /**
         * Disallow Unused Expressions.
         * https://eslint.org/docs/rules/no-unused-expressions
         */
        "no-unused-expressions": "off",
        "@babel/no-unused-expressions": "error",
    },
    overrides: [
        {
            files: ['**/*.ts?(x)'],
            rules: {
                'constructor-super': 'off', // ts(2335) & ts(2377)
                'no-const-assign': 'off', // ts(2588)
                'no-new-symbol': 'off', // ts(2588)
                'no-this-before-super': 'off', // ts(2376)

                'no-dupe-class-members': 'off',
                '@typescript-eslint/no-dupe-class-members': 'off', // ts(2393) & ts(2300)

                '@babel/no-unused-expressions': 'off',
                '@typescript-eslint/no-unused-expressions': 'error',
            },
        },
    ],
}
