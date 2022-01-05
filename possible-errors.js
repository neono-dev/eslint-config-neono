/* eslint-disable */

module.exports = {
    extends: "./non-rules-config.js",
    rules: {
        /**
         * Enforce "for" loop update clause moving the counter in the right direction.
         * https://eslint.org/docs/rules/for-direction
         */
        "for-direction": "error",
        /**
         * Enforces that a return statement is present in property getters.
         * https://eslint.org/docs/rules/getter-return
         */
        "getter-return": ["error", { "allowImplicit": true }],
        /**
         * Disallow using an async function as a Promise executor.
         * https://eslint.org/docs/rules/no-async-promise-executor
         */
        "no-async-promise-executor": "error",
        /**
         * Disallow await inside of loops.
         * https://eslint.org/docs/rules/no-await-in-loop
         */
        "no-await-in-loop": "error",
        /**
         * Disallow comparing against -0.
         * https://eslint.org/docs/rules/no-compare-neg-zero
         */
        "no-compare-neg-zero": "error",
        /**
         * Disallow assignment operators in conditional statements.
         * https://eslint.org/docs/rules/no-cond-assign
         */
        "no-cond-assign": "error",
        /**
         * Disallow the use of `console`.
         * https://eslint.org/docs/rules/no-console
         */
        "no-console": "warn",
        /**
         * Disallow constant expressions in conditions.
         * https://eslint.org/docs/rules/no-constant-condition
         */
        "no-constant-condition": "error",
        /**
         * Disallow control characters in regular expressions.
         * https://eslint.org/docs/rules/no-control-regex
         */
        "no-control-regex": "error",
        /**
         * Disallow the use of debugger.
         * https://eslint.org/docs/rules/no-debugger
         */
        "no-debugger": "error",
        /**
         * Disallow duplicate arguments in `function` definitions.
         * https://eslint.org/docs/rules/no-dupe-args
         */
        "no-dupe-args": "error",
        /**
         * Disallow duplicate conditions in `if-else-if` chains.
         * https://eslint.org/docs/rules/no-dupe-else-if
         */
        "no-dupe-else-if": "error",
        /**
         * Disallow duplicate keys in object literals.
         * https://eslint.org/docs/rules/no-dupe-keys
         */
        "no-dupe-keys": "error",
        /**
         * Rule to disallow a duplicate case label.
         * https://eslint.org/docs/rules/no-duplicate-case
         */
        "no-duplicate-case": "error",
        /**
         * Disallow empty block statements.
         * https://eslint.org/docs/rules/no-empty
         */
        "no-empty": "error",
        /**
         * Disallow empty character classes in regular expressions.
         * https://eslint.org/docs/rules/no-empty-character-class
         */
        "no-empty-character-class": "error",
        /**
         * Disallow reassigning exceptions in catch clauses.
         * https://eslint.org/docs/rules/no-ex-assign
         */
        "no-ex-assign": "error",
        /**
         * Disallow unnecessary boolean casts.
         * https://eslint.org/docs/rules/no-extra-boolean-cast
         */
        "no-extra-boolean-cast": "error",
        /**
         * Disallow reassigning function declarations.
         * https://eslint.org/docs/rules/no-func-assign
         */
        "no-func-assign": "error",
        /**
         * Disallow assigning to imported bindings.
         * https://eslint.org/docs/rules/no-import-assign
         */
        "no-import-assign": "error",
        /**
         * Disallow variable or `function` declarations in nested blocks.
         * https://eslint.org/docs/rules/no-inner-declarations
         */
        "no-inner-declarations": "error",
        /**
         * Disallow invalid regular expression strings in RegExp constructors.
         * https://eslint.org/docs/rules/no-invalid-regexp
         */
        "no-invalid-regexp": "error",
        /**
         * Disallow irregular whitespace.
         * https://eslint.org/docs/rules/no-irregular-whitespace
         */
        "no-irregular-whitespace": "error",
        /**
         * Disallow Number Literals That Lose Precision.
         * https://eslint.org/docs/rules/no-loss-of-precision
         */
        "no-loss-of-precision": "error",
        /**
         * Disallow characters which are made with multiple code points in character class syntax.
         * https://eslint.org/docs/rules/no-misleading-character-class
         */
        "no-misleading-character-class": "error",
        /**
         * Disallow calling global object properties as functions.
         * https://eslint.org/docs/rules/no-obj-calls
         */
        "no-obj-calls": "error",
        /**
         * Disallow returning values from Promise executor functions.
         * https://eslint.org/docs/rules/no-promise-executor-return
         */
        "no-promise-executor-return": "error",
        /**
         * Disallow use of Object.prototypes builtins directly.
         * https://eslint.org/docs/rules/no-prototype-builtins
         */
        "no-prototype-builtins": "off",
        /**
         * Disallow multiple spaces in regular expression literals.
         * https://eslint.org/docs/rules/no-regex-spaces
         */
        "no-regex-spaces": "error",
        /**
         * Disallow returning values from setters.
         * https://eslint.org/docs/rules/no-setter-return
         */
        "no-setter-return": "error",
        /**
         * Disallow sparse arrays.
         * https://eslint.org/docs/rules/no-sparse-arrays
         */
        "no-sparse-arrays": "warn",
        /**
         * Disallow template literal placeholder syntax in regular strings.
         * https://eslint.org/docs/rules/no-template-curly-in-string
         */
        "no-template-curly-in-string": "error",
        /**
         * Disallow unreachable code after return, throw, continue, and break statements.
         * https://eslint.org/docs/rules/no-unreachable
         */
        "no-unreachable": "error",
        /**
         * Disallow loops with a body that allows only one iteration.
         * https://eslint.org/docs/rules/no-unreachable-loop
         */
        "no-unreachable-loop": "error",
        /**
         * Disallow control flow statements in `finally` blocks.
         * https://eslint.org/docs/rules/no-unsafe-finally
         */
        "no-unsafe-finally": "error",
        /**
         * Disallow negating the left operand of relational operators.
         * https://eslint.org/docs/rules/no-unsafe-negation
         */
        "no-unsafe-negation": "error",
        /**
         * Disallow useless backreferences in regular expressions.
         * https://eslint.org/docs/rules/no-useless-backreference
         */
        "no-useless-backreference": "error",
        /**
         * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`.
         * https://eslint.org/docs/rules/require-atomic-updates
         */
        "require-atomic-updates": "off",
        /**
         * Require calls to `isNaN()` when checking for `NaN`.
         * https://eslint.org/docs/rules/use-isnan
         */
        "use-isnan": "error",
        /**
         * Enforce comparing typeof expressions against valid strings.
         * https://eslint.org/docs/rules/valid-typeof
         */
        "valid-typeof": ["error", { "requireStringLiterals": true }],

        // variables
        /**
         * Disallow Early Use.
         * https://eslint.org/docs/rules/no-use-before-define
         */
        "no-use-before-define": ["error", {
            "functions": false,
            "classes": true,
            "variables": true,
        }],
    },
    overrides: [
        {
            files: ["**/*.ts?(x)"],
            rules: {
                "getter-return": "off", // ts(2378)
                "no-dupe-args": "off", // ts(2300)
                "no-dupe-keys": "off", // ts(1117)
                "no-func-assign": "off", // ts(2539)
                "no-import-assign": "off", // ts(2539) & ts(2540)
                "no-obj-calls": "off", // ts(2349)
                "no-setter-return": "off", // ts(2408)
                "no-unreachable": "off", // ts(7027)
                "no-unsafe-negation": "off", // ts(2365) & ts(2360) & ts(2358)
                "valid-typeof": "off", // ts(2367)

                "no-loss-of-precision": "off",
                "@typescript-eslint/no-loss-of-precision": "error",

                "no-use-before-define": "off",
                "@typescript-eslint/no-use-before-define": ["error", "nofunc"],

                "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
                "@typescript-eslint/no-unsafe-argument": "error",
                "@typescript-eslint/no-unsafe-assignment": "warn", // seems like an ok idea, but I don"t have enough experience with TS yet.
                "@typescript-eslint/no-unsafe-call": "warn", // seems like an ok idea, but I don"t have enough experience with TS yet.
                "@typescript-eslint/no-unsafe-member-access": "warn", // seems like an ok idea, but I don"t have enough experience with TS yet.
                "@typescript-eslint/no-unsafe-return": "off", // seems like an ok idea, but it failed on a regular React Component
                "@typescript-eslint/prefer-readonly-parameter-types": "off",
            },
        },
    ],
}
