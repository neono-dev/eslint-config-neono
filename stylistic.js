/* eslint-disable */

module.exports = {
    extends: ["./non-rules-config.js", "prettier"],
    rules: {
        /**
         * Treat var as Block Scoped.
         * https://eslint.org/docs/rules/camelcase
         */
        "camelcase": ["error", {
            "allow": ["^UNSAFE_"],
            "ignoreDestructuring": true,
            "ignoreGlobals": true,
            "ignoreImports": true,
            "properties": "never",
        }],
        /**
         * Enforce or disallow capitalization of the first letter of a comment.
         * https://eslint.org/docs/rules/capitalized-comments
         */
        "capitalized-comments": ["warn", "always", {
            "ignoreConsecutiveComments": true
        }],
        /**
         * Require Consistent This.
         * https://eslint.org/docs/rules/consistent-this
         */
        "consistent-this": "off", // Too many use-cases for reassigning "this" to different values
        /**
         * Require Following Curly Brace Conventions.
         * https://eslint.org/docs/rules/curly
         */
        "curly": ["error", "multi-line"],
        /**
         * Require function names to match the name of the variable or property to which they are assigned.
         * https://eslint.org/docs/rules/func-name-matching
         */
        "func-name-matching": "error",
        /**
         * Require or disallow named `function` expressions.
         * https://eslint.org/docs/rules/func-names
         */
        "func-names": "error",
        /**
         * Enforce the consistent use of either function declarations or expressions.
         * https://eslint.org/docs/rules/func-style
         */
        "func-style": "off",
        /**
         * Disallow specified identifiers.
         * https://eslint.org/docs/rules/id-denylist
         */
        "id-denylist": ["error", "data", "err", "e", "cb", "callback"],
        /**
         * Enforce minimum and maximum identifier lengths.
         * https://eslint.org/docs/rules/id-length
         * when using short composable functions, using single-letter variables is fine
         */
        "id-length": "off",
        /**
         * Require identifiers to match a specified regular expression.
         * https://eslint.org/docs/rules/id-match
         */
        "id-match": [
            "error",
            // camelCase, PascalCase, __filename, CONST_VALUE, stream$, $el
            "^\\$?(__)?(([A-Z]|[a-z]|[0-9]+)|([A-Z_]))*\\$?$",
        ],
        /**
         * Enforce position of line comments.
         * https://eslint.org/docs/rules/line-comment-position
         */
        "line-comment-position": "off",
        /**
         * Require or disallow an empty line between class members.
         * https://eslint.org/docs/rules/lines-between-class-members
         */
        "lines-between-class-members": ["error", "always"],
        /**
         * Enforce a maximum depth that blocks can be nested.
         * https://eslint.org/docs/rules/max-depth
         */
        "max-depth": ["error", 4],
        /**
         * Enforce a maximum file length.
         * https://eslint.org/docs/rules/max-lines
         */
        "max-lines": ["error", {
            "max": 300, // Seems reasonable. When you reach this amount, it usually means you have to split.
            "skipBlankLines": false,
            "skipComments": false,
        }],
        /**
         * Enforce a maximum function length.
         * https://eslint.org/docs/rules/max-lines-per-function
         */
        "max-lines-per-function": "off", // this becomes an obvious problem when it's actually a problem...
        /**
         * Enforce a maximum depth that callbacks can be nested.
         * https://eslint.org/docs/rules/max-nested-callbacks
         */
        "max-nested-callbacks": ["error", 4],
        /**
         * Enforce a maximum number of parameters in function definitions.
         * https://eslint.org/docs/rules/max-params
         */
        "max-params": ["error", 7],
        /**
         * Enforce a maximum number of statements allowed in function blocks.
         * https://eslint.org/docs/rules/max-statements
         */
        "max-statements": "off", // this becomes an obvious problem when it's actually a problem...
        /**
         * Enforce a maximum number of statements allowed per line.
         * https://eslint.org/docs/rules/max-statements-per-line
         */
        "max-statements-per-line": ["error", { max: 1 }],
        /**
         * Enforce a particular style for multiline comments.
         * https://eslint.org/docs/rules/multiline-comment-style
         */
        "multiline-comment-style": ["error", "starred-block"],
        /**
         * Require constructor names to begin with a capital letter.
         * https://eslint.org/docs/rules/new-cap
         */
        "new-cap": "error",
        /**
         * Disallow `Array` constructors.
         * https://eslint.org/docs/rules/no-array-constructor
         */
        "no-array-constructor": "error",
        /**
         * Disallow bitwise operators.
         * https://eslint.org/docs/rules/no-bitwise
         */
        "no-bitwise": "error",
        /**
         * Disallow `continue` statements.
         * https://eslint.org/docs/rules/no-continue
         */
        "no-continue": "error",
        /**
         * Disallow inline comments after code.
         * https://eslint.org/docs/rules/no-inline-comments
         */
        "no-inline-comments": "off",
        /**
         * Disallow `if` statements as the only statement in `else` blocks.
         * https://eslint.org/docs/rules/no-lonely-if
         */
        "no-lonely-if": "error",
        /**
         * Disallow Use of Chained Assignment Expressions.
         * https://eslint.org/docs/rules/no-multi-assign
         */
        "no-multi-assign": "error",
        /**
         * Disallow negated conditions.
         * https://eslint.org/docs/rules/no-negated-condition
         */
        "no-negated-condition": "error",
        /**
         * Disallow nested ternary expressions.
         * https://eslint.org/docs/rules/no-nested-ternary
         * Nested ternaries may sometimes be useful.
         */
        "no-nested-ternary": "off",
        /**
         * Disallow Object Constructor.
         * https://eslint.org/docs/rules/no-new-object
         */
        "no-new-object": "error",
        /**
         * Disallow the unary operators `++` and `--`.
         * https://eslint.org/docs/rules/no-plusplus
         */
        "no-plusplus": "error",
        /**
         * Disallow specified syntax.
         * https://eslint.org/docs/rules/no-restricted-syntax
         * @see https://github.com/eslint/espree/blob/main/lib/ast-node-types.js
         * @see https://astexplorer.net/
         */
        "no-restricted-syntax": ["error", "WithStatement"],
        /**
         * Disallow ternary operators.
         * https://eslint.org/docs/rules/no-ternary
         */
        "no-ternary": "off",
        /**
         * Disallow dangling underscores in identifiers.
         * https://eslint.org/docs/rules/no-underscore-dangle
         */
        "no-underscore-dangle": "off",
        /**
         * Disallow ternary operators when simpler alternatives exist.
         * https://eslint.org/docs/rules/no-unneeded-ternary
         */
        "no-unneeded-ternary": "error",
        /**
         * Enforce variables to be declared either together or separately in functions.
         * https://eslint.org/docs/rules/one-var
         */
        "one-var": ["error", "never"],
        /**
         * Require or disallow assignment operator shorthand where possible.
         * https://eslint.org/docs/rules/operator-assignment
         */
        "operator-assignment": "off", // readability on a case-by-case basis
        /**
         * Require or disallow assignment operator shorthand where possible.
         * https://eslint.org/docs/rules/padding-line-between-statements
         */
        "padding-line-between-statements": [
            "error",
            { "blankLine": "always", "prev": "*", "next": "return" },
            { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
            { "blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"] },
            { "blankLine": "always", "prev": ["case", "default"], "next": "*" },
        ],
        /**
         * Disallow the use of `Math.pow` in favor of the `**` operator.
         * https://eslint.org/docs/rules/prefer-exponentiation-operator
         */
        "prefer-exponentiation-operator": "warn",
        /**
         * Prefer Object.hasOwn() over Object.prototype.hasOwnProperty.call()
         * https://eslint.org/docs/rules/prefer-object-spread
         */
        "prefer-object-spread": "error",
        /**
         * Require object keys to be sorted.
         * https://eslint.org/docs/rules/sort-keys
         */
        "sort-keys": ["error", "asc", {
            "caseSensitive": true,
            "natural": true,
            "minKeys": 2,
        }],
        /**
         * Variable Sorting.
         * https://eslint.org/docs/rules/sort-vars
         */
        "sort-vars": ["error", { "ignoreCase": true }],
        /**
         * Requires or disallows a whitespace (space or tab) beginning a comment.
         * https://eslint.org/docs/rules/spaced-comment
         * Some work may be done in parameters here.
         */
        "spaced-comment": ["error", "always", {
            "line": { "exceptions": ["-"] }
        }],

        // variables
        /**
         * Require or disallow initialization in variable declarations.
         * https://eslint.org/docs/rules/init-declarations
         */
        "init-declarations": "off",
    },
    overrides: [
        {
            files: ["**/*.ts?(x)"],
            rules: {
                "lines-between-class-members": "off",
                "@typescript-eslint/lines-between-class-members": "off",

                "no-array-constructor": "off",
                "@typescript-eslint/no-array-constructor": "error",

                "init-declarations": "off",
                "@typescript-eslint/init-declarations": "off",

                "@typescript-eslint/adjacent-overload-signatures": "error",
                "@typescript-eslint/ban-tslint-comment": "error",
                "@typescript-eslint/consistent-indexed-object-style": "off",
                "@typescript-eslint/consistent-type-definitions": "off",
                "@typescript-eslint/consistent-type-imports": "off", // I think I prefer typed imports, but you can"t always use them
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/explicit-module-boundary-types": "off",
                "@typescript-eslint/member-delimiter-style": "off",
                "@typescript-eslint/member-ordering": "off",
                "@typescript-eslint/method-signature-style": "off",
                "@typescript-eslint/naming-convention": "off",
                "@typescript-eslint/no-confusing-non-null-assertion": "off", // prettier reformats their "correct" example anyway 🤷‍♂️
                "@typescript-eslint/no-extra-non-null-assertion": "error",
                "@typescript-eslint/no-non-null-assertion": "error",
                "@typescript-eslint/no-parameter-properties": "error", // yeah, I don"t like this feature
                "@typescript-eslint/no-type-alias": "off",
                "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
                "@typescript-eslint/prefer-for-of": "off", // I prefer for of, but I don"t want to lint for it
                "@typescript-eslint/sort-type-union-intersection-members": "off",
                "@typescript-eslint/typedef": "off",
            },
        },
    ],
}
