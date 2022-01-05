/* eslint-disable */
module.exports = {
    extends: './non-rules-config.js',
    rules: {
        /**
         * Disallow modifying variables of class declarations.
         * https://eslint.org/docs/rules/no-class-assign
         */
        "no-class-assign": "error",
        /**
         * Disallow duplicate imports.
         * https://eslint.org/docs/rules/no-duplicate-imports
         */
        "no-duplicate-imports": "error",
        /**
         * Disallow specified names in exports.
         * https://eslint.org/docs/rules/no-restricted-exports
         * not applicable for a config preset (should be configured only in projects)
         */
        "no-restricted-exports": "off",
        /**
         * Disallow specified names in imports.
         * https://eslint.org/docs/rules/no-restricted-imports
         * not applicable for a config preset (should be configured only in projects)
         */
        "no-restricted-imports": "off",
        /**
         * Disallow unnecessary computed property keys in objects and classes.
         * https://eslint.org/docs/rules/no-useless-computed-key
         */
        "no-useless-computed-key": "error",
        /**
         * Disallow unnecessary constructor.
         * https://eslint.org/docs/rules/no-useless-constructor
         */
        "no-useless-constructor": "error",
        /**
         * Disallow renaming import, export, and destructured assignments to the same name.
         * https://eslint.org/docs/rules/no-useless-rename
         */
        "no-useless-rename": "error",
        /**
         * Require `let` or `const` instead of `var`.
         * https://eslint.org/docs/rules/no-var
         */
        "no-var": "error",
        /**
         * Suggest using `const`.
         * https://eslint.org/docs/rules/prefer-const
         */
        "prefer-const": "error",
        /**
         * Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals.
         * https://eslint.org/docs/rules/prefer-numeric-literals
         */
        "prefer-numeric-literals": "error",
        /**
         * Suggest using the rest parameters instead of `arguments`.
         * https://eslint.org/docs/rules/prefer-rest-params
         */
        "prefer-rest-params": "error",
        /**
         * Suggest using spread syntax instead of .apply().
         * https://eslint.org/docs/rules/prefer-spread
         */
        "prefer-spread": "error",
        /**
         * Suggest using template literals instead of string concatenation.
         * https://eslint.org/docs/rules/prefer-template
         */
        "prefer-template": "error",
        /**
         * Disallow generator functions that do not have `yield`.
         * https://eslint.org/docs/rules/require-yield
         */
        "require-yield": "error",
        /**
         * Require symbol description.
         * https://eslint.org/docs/rules/symbol-description
         */
        "symbol-description": "error",
    },
    overrides: [
        {
            files: ["**/*.ts?(x)"],
            rules: {
                "no-var": "error", // ts transpiles let/const to var, so no need for vars anymore
                "prefer-const": "error", // ts provides better types with const
                "prefer-rest-params": "error", // ts provides better types with rest args over arguments
                "prefer-spread": "error", // ts transpiles spread to apply, so no need for manual apply

                "no-duplicate-imports": "off",
                "@typescript-eslint/no-duplicate-imports": "error",

                "no-useless-constructor": "off",
                "@typescript-eslint/no-useless-constructor": "error",
            },
        },
    ],
}
