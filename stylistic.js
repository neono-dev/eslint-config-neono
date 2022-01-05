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

                /**
                 * Require that member overloads be consecutive.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
                 */
                "@typescript-eslint/adjacent-overload-signatures": "error",
                /**
                 * Bans `// tslint:<rule-flag>` comments from being used.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-tslint-comment.md
                 */
                "@typescript-eslint/ban-tslint-comment": "error",
                /**
                 * Enforce or disallow the use of the record type.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md
                 */
                "@typescript-eslint/consistent-indexed-object-style": "off",
                /**
                 * Consistent with type definition either interface or type.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
                 */
                "@typescript-eslint/consistent-type-definitions": ["error", "type"],
                /**
                 * Enforces consistent usage of type imports.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-imports.md
                 */
                "@typescript-eslint/consistent-type-imports": ["error", {
                    "prefer": "type-imports",
                }],
                /**
                 * Require explicit return types on functions and class methods.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
                 */
                "@typescript-eslint/explicit-function-return-type": "off",
                /**
                 * Require explicit return and argument types on exported functions' and classes' public class methods.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
                 */
                "@typescript-eslint/explicit-module-boundary-types": "off",
                /**
                 * Require a specific member delimiter style for interfaces and type literals.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/member-delimiter-style.md
                 */
                "@typescript-eslint/member-delimiter-style": ["error", {
                    "multiline": {
                        "delimiter": "semi",
                        "requireLast": true,
                    },
                    "singleline": {
                        "delimiter": "semi",
                        "requireLast": true,
                    },
                }],
                /**
                 * Require a consistent member declaration order.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/member-ordering.md
                 */
                "@typescript-eslint/member-ordering": "off",
                /**
                 * Enforces using a particular method signature syntax.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/method-signature-style.md
                 */
                "@typescript-eslint/method-signature-style": ["warn", "property"],
                /**
                 * Enforces naming conventions for everything across a codebase.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md
                 *
                 * May be good in projects, but not in a config.
                 */
                "@typescript-eslint/naming-convention": "off",
                /**
                 * Disallow non-null assertion in locations that may be confusing.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md
                 */
                "@typescript-eslint/no-confusing-non-null-assertion": "warn",
                /**
                 * Disallow extra non-null assertion.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
                 */
                "@typescript-eslint/no-extra-non-null-assertion": "error",
                /**
                 * Disallows non-null assertions using the `!` postfix operator.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
                 */
                "@typescript-eslint/no-non-null-assertion": "error",
                /**
                 * Disallow the use of parameter properties in class constructors.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-parameter-properties.md
                 */
                "@typescript-eslint/no-parameter-properties": "off",
                /**
                 * Disallow the use of type aliases.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-type-alias.md
                 */
                "@typescript-eslint/no-type-alias": "off",
                /**
                 * Flags unnecessary equality comparisons against boolean literals.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
                 */
                "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
                /**
                 * Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-for-of.md
                 */
                "@typescript-eslint/prefer-for-of": "warn",
                /**
                 * Enforces that members of a type union/intersection are sorted alphabetically.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/sort-type-union-intersection-members.md
                 */
                "@typescript-eslint/sort-type-union-intersection-members": "warn",
                /**
                 * Requires type annotations to exist.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/typedef.md
                 *
                 * Instead of enabling typedef, it is generally recommended using the --noImplicitAny and --strictPropertyInitialization
                 * compiler options to enforce type annotations only when useful.
                 */
                "@typescript-eslint/typedef": "off",
            },
        },
    ],
}
