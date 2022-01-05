/* eslint-disable */

module.exports = {
    extends: ['./non-rules-config.js', 'prettier'],
    rules: {
        /**
         * Require braces in arrow function body.
         * https://eslint.org/docs/rules/arrow-body-style
         */
        "arrow-body-style": ["error", "as-needed"],
        /**
         * Disallow use of the void operator.
         * https://eslint.org/docs/rules/object-shorthand
         */
        "object-shorthand": ["error", "properties"], // methods are optional so you can specify a name if you want
        /**
         * Require using arrow functions for callbacks.
         * https://eslint.org/docs/rules/prefer-arrow-callback
         */
        "prefer-arrow-callback": ["error", {
            allowNamedFunctions: false,
            allowUnboundThis: true,
        }],
        /**
         * Prefer destructuring from arrays and objects.
         * https://eslint.org/docs/rules/prefer-destructuring
         */
        "prefer-destructuring": ["error", {
            "array": false,
            "object": true,
        }],
        /**
         * Import Sorting.
         * https://eslint.org/docs/rules/sort-imports
         */
        "sort-imports": "off",
        /**
         * Require constructor names to begin with a capital letter.
         * https://eslint.org/docs/rules/new-cap
         */
        "new-cap": "off",
        "@babel/new-cap": [
            "error",
            {
                newIsCap: true,
                capIsNew: true,
            },
        ],
        /**
         * Disallow this keywords outside of classes or class-like objects.
         * https://eslint.org/docs/rules/no-invalid-this
         */
        "no-invalid-this": "off",
        "@babel/no-invalid-this": "error",
    },
    overrides: [
        {
            files: ["**/*.ts?(x)"],
            rules: {
                "@babel/no-invalid-this": "off",
                "@typescript-eslint/no-invalid-this": "error",
            },
        },
    ],
}
