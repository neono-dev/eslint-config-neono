/* eslint-disable */
module.exports = {
    extends: "./non-rules-config.js",
    rules: {
        /**
         * Enforces getter/setter pairs in objects and classes.
         * https://eslint.org/docs/rules/accessor-pairs
         */
        "accessor-pairs": "error",
        /**
         * Enforces return statements in callbacks of array"s methods.
         * https://eslint.org/docs/rules/array-callback-return
         */
        "array-callback-return": ["error", { "checkForEach": true }],
        /**
         * Treat var as Block Scoped.
         * https://eslint.org/docs/rules/block-scoped-var
         */
        "block-scoped-var": "error",
        /**
         * Enforce that class methods utilize `this`.
         * https://eslint.org/docs/rules/class-methods-use-this
         */
        "class-methods-use-this": ["warn", {
            "exceptMethods": ["componentDidMount"]
        }],
        /**
         * Limit Cyclomatic Complexity.
         * https://eslint.org/docs/rules/complexity
         */
        "complexity": ["error", { "max": 20 }],
        /**
         * Require return statements to either always or never specify values.
         * https://eslint.org/docs/rules/consistent-return
         */
        "consistent-return": "error",
        /**
         * Require Default Case in Switch Statements.
         * https://eslint.org/docs/rules/default-case
         */
        "default-case": "error",
        /**
         * Enforce default clauses in switch statements to be last.
         * https://eslint.org/docs/rules/default-case-last
         */
        "default-case-last": "error",
        /**
         * Enforce default parameters to be last.
         * https://eslint.org/docs/rules/default-param-last
         */
        "default-param-last": "error",
        /**
         * Require Dot Notation.
         * https://eslint.org/docs/rules/dot-notation
         */
        "dot-notation": "error",
        /**
         * Require === and !==.
         * https://eslint.org/docs/rules/eqeqeq
         */
        "eqeqeq": ["error", "always"],
        /**
         * Require grouped accessor pairs in object literals and classes.
         * https://eslint.org/docs/rules/grouped-accessor-pairs
         */
        "grouped-accessor-pairs": ["error", "setBeforeGet"],
        /**
         * Require Guarding for-in.
         * https://eslint.org/docs/rules/guard-for-in
         */
        "guard-for-in": "error",
        /**
         * Enforce a maximum number of classes per file.
         * https://eslint.org/docs/rules/max-classes-per-file
         */
        "max-classes-per-file": ["error", 1],
        /**
         * Disallow Use of Alert.
         * https://eslint.org/docs/rules/no-alert
         */
        "no-alert": "error",
        /**
         * Disallow Use of caller/callee.
         * https://eslint.org/docs/rules/no-caller
         */
        "no-caller": "error",
        /**
         * Disallow lexical declarations in case/default clauses.
         * https://eslint.org/docs/rules/no-case-declarations
         */
        "no-case-declarations": "error",
        /**
         * Disallow returning value in constructor.
         * https://eslint.org/docs/rules/no-constructor-return
         */
        "no-constructor-return": "error",
        /**
         * Disallow Regular Expressions That Look Like Division.
         * https://eslint.org/docs/rules/no-div-regex
         */
        "no-div-regex": "error",
        /**
         * Disallow return before else.
         * https://eslint.org/docs/rules/no-else-return
         */
        "no-else-return": ["error", {
            "allowElseIf": false,
        }],
        /**
         * Disallow empty functions.
         * https://eslint.org/docs/rules/no-empty-function
         */
        "no-empty-function": "error",
        /**
         * Disallow empty destructuring patterns.
         * https://eslint.org/docs/rules/no-empty-pattern
         */
        "no-empty-pattern": "error",
        /**
         * Disallow Null Comparisons.
         * https://eslint.org/docs/rules/no-eq-null
         *
         * `eqeqeq` is more powerful.
         */
        "no-eq-null": "off",
        /**
         * Disallow eval().
         * https://eslint.org/docs/rules/no-eval
         */
        "no-eval": "error",
        /**
         * Disallow Extending of Native Objects.
         * https://eslint.org/docs/rules/no-extend-native
         */
        "no-extend-native": "error",
        /**
         * Disallow unnecessary function binding.
         * https://eslint.org/docs/rules/no-extra-bind
         */
        "no-extra-bind": "error",
        /**
         * Disallow Unnecessary Labels.
         * https://eslint.org/docs/rules/no-extra-label
         */
        "no-extra-label": "error",
        /**
         * Disallow Case Statement Fallthrough.
         * https://eslint.org/docs/rules/no-fallthrough
         */
        "no-fallthrough": "error",
        /**
         * Disallow assignment to native objects or read-only global variables.
         * https://eslint.org/docs/rules/no-global-assign
         */
        "no-global-assign": "error",
        /**
         * Disallow the type conversion with shorter notations.
         * https://eslint.org/docs/rules/no-implicit-coercion
         */
        "no-implicit-coercion": "off",
        /**
         * Disallow the type conversion with shorter notations.
         * https://eslint.org/docs/rules/no-implicit-globals
         */
        "no-implicit-globals": "error",
        /**
         * Disallow Implied eval().
         * https://eslint.org/docs/rules/no-implied-eval
         */
        "no-implied-eval": "error",
        /**
         * Disallow this keywords outside of classes or class-like objects.
         * https://eslint.org/docs/rules/no-invalid-this
         */
        "no-invalid-this": "off",
        "@babel/no-invalid-this": "error",
        /**
         * Disallow Iterator.
         * https://eslint.org/docs/rules/no-iterator
         */
        "no-iterator": "error",
        /**
         * Disallow Labeled Statements.
         * https://eslint.org/docs/rules/no-labels
         */
        "no-labels": "error",
        /**
         * Disallow Unnecessary Nested Blocks.
         * https://eslint.org/docs/rules/no-lone-blocks
         */
        "no-lone-blocks": "error",
        /**
         * Disallow Functions in Loops.
         * https://eslint.org/docs/rules/no-loop-func
         */
        "no-loop-func": "error",
        /**
         * Disallow Magic Numbers.
         * https://eslint.org/docs/rules/no-magic-numbers
         * Maybe check if it's usable as it.
         */
        "no-magic-numbers": ["error", {
            "detectObjects": false,
            "enforceConst": true,
            "ignore": [1],
            "ignoreArrayIndexes": true,
            "ignoreDefaultValues": true,
        }],
        /**
         * Disallow Multiline Strings.
         * https://eslint.org/docs/rules/no-multi-str
         */
        "no-multi-str": "error",
        /**
         * Disallow new For Side Effects.
         * https://eslint.org/docs/rules/no-new
         */
        "no-new": "error",
        /**
         * Disallow Function Constructor.
         * https://eslint.org/docs/rules/no-new-func
         */
        "no-new-func": "error",
        /**
         * Disallow Primitive Wrapper Instances.
         * https://eslint.org/docs/rules/no-new-wrappers
         */
        "no-new-wrappers": "error",
        /**
         * Disallow `\8` and `\9` escape sequences in string literals.
         * https://eslint.org/docs/rules/no-nonoctal-decimal-escape
         */
        "no-nonoctal-decimal-escape": "error",
        /**
         * Disallow octal literals.
         * https://eslint.org/docs/rules/no-octal
         */
        "no-octal": "error",
        /**
         * Disallow octal escape sequences in string literals.
         * https://eslint.org/docs/rules/no-octal-escape
         */
        "no-octal-escape": "error",
        /**
         * Disallow Reassignment of Function Parameters.
         * https://eslint.org/docs/rules/no-param-reassign
         */
        "no-param-reassign": "off",
        /**
         * Disallow Use of `__proto__`.
         * https://eslint.org/docs/rules/no-proto
         */
        "no-proto": "error",
        /**
         * Disallow specified names in exports.
         * https://eslint.org/docs/rules/no-redeclare
         */
        "no-redeclare": "off",
        /**
         * Disallow certain object properties.
         * https://eslint.org/docs/rules/no-restricted-properties
         * Not useful in a shared config, but may be useful in a codebase !
         */
        "no-restricted-properties": "off",
        /**
         * Disallow Assignment in return Statement.
         * https://eslint.org/docs/rules/no-return-assign
         */
        "no-return-assign": "error",
        /**
         * Disallows unnecessary `return await`.
         * https://eslint.org/docs/rules/no-return-await
         */
        "no-return-await": "error",
        /**
         * Disallow Script URLs.
         * https://eslint.org/docs/rules/no-script-url
         */
        "no-script-url": "error",
        /**
         * Disallow Self Assignment.
         * https://eslint.org/docs/rules/no-self-assign
         */
        "no-self-assign": "error",
        /**
         * Disallow Self Compare.
         * https://eslint.org/docs/rules/no-self-compare
         */
        "no-self-compare": "error",
        /**
         * Disallow Use of the Comma Operator.
         * https://eslint.org/docs/rules/no-sequences
         */
        "no-sequences": "error",
        /**
         * Restrict what can be thrown as an exception.
         * https://eslint.org/docs/rules/no-throw-literal
         */
        "no-throw-literal": "error",
        /**
         * Disallow unmodified conditions of loops.
         * https://eslint.org/docs/rules/no-unmodified-loop-condition
         */
        "no-unmodified-loop-condition": "error",
        /**
         * Disallow Unused Expressions.
         * https://eslint.org/docs/rules/no-unused-expressions
         */
        "no-unused-expressions": "off",
        "@babel/no-unused-expressions": "error",
        /**
         * Disallow Unused Private Class Members.
         * https://eslint.org/docs/rules/no-unused-private-class-members
         */
        "no-unused-private-class-members": "error",
        /**
         * Disallow Unused Labels.
         * https://eslint.org/docs/rules/no-unused-labels
         */
        "no-unused-labels": "error",
        /**
         * Disallow unnecessary `.call()` and `.apply()`.
         * https://eslint.org/docs/rules/no-useless-call
         */
        "no-useless-call": "error",
        /**
         * Disallow unnecessary catch clauses.
         * https://eslint.org/docs/rules/no-useless-catch
         */
        "no-useless-catch": "error",
        /**
         * Disallow unnecessary concatenation of strings.
         * https://eslint.org/docs/rules/no-useless-concat
         */
        "no-useless-concat": "error",
        /**
         * Disallow unnecessary escape usage.
         * https://eslint.org/docs/rules/no-useless-escape
         */
        "no-useless-escape": "error",
        /**
         * Disallow redundant return statements.
         * https://eslint.org/docs/rules/no-useless-return
         */
        "no-useless-return": "error",
        /**
         * Disallow use of the void operator.
         * https://eslint.org/docs/rules/no-void
         */
        "no-void": "off",
        /**
         * Disallow Warning Comments.
         * https://eslint.org/docs/rules/no-warning-comments
         */
        "no-warning-comments": ["warn", {
            "terms": ["FIXME"],
            "location": "anywhere",
        }],
        /**
         * Disallow `with` statements.
         * https://eslint.org/docs/rules/no-with
         */
        "no-with": "off",
        /**
         * Suggest using named capture group in regular expression.
         * https://eslint.org/docs/rules/prefer-named-capture-group
         */
        "prefer-named-capture-group": "warn",
        /**
         * Prefer Object.hasOwn() over Object.prototype.hasOwnProperty.call()
         * https://eslint.org/docs/rules/prefer-object-has-own
         */
        "prefer-object-has-own": "off",
        /**
         * Require using Error objects as Promise rejection reasons.
         * https://eslint.org/docs/rules/prefer-promise-reject-errors
         */
        "prefer-promise-reject-errors": "warn",
        /**
         * Disallow use of the `RegExp` constructor in favor of regular expression literals.
         * https://eslint.org/docs/rules/prefer-regex-literals
         */
        "prefer-regex-literals": "error",
        /**
         * Require Radix Parameter.
         * https://eslint.org/docs/rules/radix
         */
        "radix": ["error", "as-needed"],
        /**
         * Disallow async functions which have no await expression.
         * https://eslint.org/docs/rules/require-await
         */
        "require-await": "error",
        /**
         * Enforce the use of `u` flag on RegExp.
         * https://eslint.org/docs/rules/require-unicode-regexp
         */
        "require-unicode-regexp": "off",
        /**
         * Require Variable Declarations to be at the top of their scope.
         * https://eslint.org/docs/rules/vars-on-top
         */
        "vars-on-top": "error",
        /**
         * Require or disallow Yoda Conditions.
         * https://eslint.org/docs/rules/yoda
         */
        "yoda": ["error", "never", {
            "exceptRange": true,
        }],

        // strict
        /**
         * Require or disallow strict mode directives.
         * https://eslint.org/docs/rules/strict
         */
        "strict": "error",

        // variables
        /**
         * Disallow deleting variables.
         * https://eslint.org/docs/rules/no-delete-var
         */
        "no-delete-var": "error",
        /**
         * Disallow Labels That Are Variables Names.
         * https://eslint.org/docs/rules/no-label-var
         */
        "no-label-var": "error",
        /**
         * Disallow specific global variables.
         * https://eslint.org/docs/rules/no-restricted-globals
         */
        "no-restricted-globals": [
            "error",
            {
                "name": "event",
                "message": "Use local parameter instead."
            },
            {
                "name": "fdescribe",
                "message": "Do not commit fdescribe. Use describe instead."
            }
        ],
        /**
         * Disallow variable declarations from shadowing variables declared in the outer scope.
         * https://eslint.org/docs/rules/no-shadow
         */
        "no-shadow": "error",
        /**
         * Disallow Shadowing of Restricted Names.
         * https://eslint.org/docs/rules/no-shadow-restricted-names
         */
        "no-shadow-restricted-names": "error",
        /**
         * Disallow Initializing to undefined.
         * https://eslint.org/docs/rules/no-undef
         */
        "no-undef": "error",
        /**
         * Disallow Initializing to undefined.
         * https://eslint.org/docs/rules/no-undef-init
         */
        "no-undef-init": "error",
        /**
         * Disallow Use of `undefined` Variable.
         * https://eslint.org/docs/rules/no-undefined
         */
        "no-undefined": "off",
        /**
         * Disallow Unused Variables.
         * https://eslint.org/docs/rules/no-unused-vars
         */
        "no-unused-vars": ["error", {
            "argsIgnorePattern": "^_",
            "varsIgnorePattern": "^ignored",
            "args": "after-used",
            "ignoreRestSiblings": true,
        }],
    },
    overrides: [
        {
            files: ["**/*.ts?(x)"],
            rules: {
                "no-undef": "off", // ts(2304)

                "consistent-return": "off", // in TS this is much less an issue

                "default-param-last": "off",
                "@typescript-eslint/default-param-last": "off",

                "dot-notation": "off",
                "@typescript-eslint/dot-notation": "error",

                "no-empty-function": "off",
                "@typescript-eslint/no-empty-function": "off",

                "no-implied-eval": "error",
                "@typescript-eslint/no-implied-eval": "error",

                "no-invalid-this": "off",
                "@typescript-eslint/no-invalid-this": "error",

                "no-loop-func": "off",
                "@typescript-eslint/no-loop-func": "error",

                "no-magic-numbers": "off",
                "@typescript-eslint/no-magic-numbers": "off",

                "no-redeclare": "off",
                "@typescript-eslint/no-redeclare": "off", // ts(2451)

                "no-return-await": "off",
                "@typescript-eslint/return-await": "error",

                "no-shadow": "off",
                "@typescript-eslint/no-shadow": "error",

                "no-throw-literal": "off",
                "@typescript-eslint/no-throw-literal": "error",

                "no-unused-expressions": "off",
                "@typescript-eslint/no-unused-expressions": "off",

                "no-unused-vars": "off",
                "@typescript-eslint/no-unused-vars": [
                    "error",
                    {
                        "argsIgnorePattern": "^_",
                        "varsIgnorePattern": "^ignored",
                        "args": "after-used",
                        "ignoreRestSiblings": true,
                    },
                ],

                "@typescript-eslint/require-await": "off",

                "@typescript-eslint/array-type": "off",
                "@typescript-eslint/await-thenable": "error",
                "@typescript-eslint/ban-ts-comment": "error",
                "@typescript-eslint/ban-types": "off", // not useful in a reusable config
                "@typescript-eslint/class-literal-property-style": "off",
                "@typescript-eslint/consistent-type-assertions": "off",
                "@typescript-eslint/no-base-to-string": "warn",
                "@typescript-eslint/no-confusing-void-expression": "off", // honestly, it"s probably a good rule, but I do this all the time so...
                "@typescript-eslint/no-dynamic-delete": "error",
                "@typescript-eslint/no-empty-interface": "error",
                "@typescript-eslint/no-explicit-any": "error",
                "@typescript-eslint/no-extraneous-class": "error", // stay away from classes when you can
                "@typescript-eslint/no-floating-promises": "warn", // not a bad rule, but can be annoying
                "@typescript-eslint/no-for-in-array": "error",
                "@typescript-eslint/no-implicit-any-catch": "warn",
                "@typescript-eslint/no-inferrable-types": "off", // I personally prefer relying on inference where possible, but I don"t want to lint for it.
                "@typescript-eslint/no-invalid-void-type": "warn",
                "@typescript-eslint/no-misused-new": "error",
                "@typescript-eslint/no-misused-promises": [
                    "warn",
                    {"checksVoidReturn": false},
                ],
                "@typescript-eslint/no-namespace": "error",
                "@typescript-eslint/no-require-imports": "off", // sometimes you can"t do it any other way
                "@typescript-eslint/no-this-alias": "error",
                "@typescript-eslint/no-unnecessary-condition": "error",
                "@typescript-eslint/no-unnecessary-qualifier": "warn", // I"m not sure I understand this one
                "@typescript-eslint/no-unnecessary-type-arguments": "off",
                "@typescript-eslint/no-unnecessary-type-assertion": "error",
                "@typescript-eslint/no-unnecessary-type-constraint": "error",
                "@typescript-eslint/no-var-requires": "error",
                "@typescript-eslint/non-nullable-type-assertion-style": "off",
                "@typescript-eslint/prefer-as-const": "error",
                "@typescript-eslint/prefer-enum-initializers": "error", // makes total sense
                "@typescript-eslint/prefer-function-type": "off", // though I"m not sure I understand it
                "@typescript-eslint/prefer-includes": "error", // normally I wouldn"t but includes is just so much better
                "@typescript-eslint/prefer-literal-enum-member": "error",
                "@typescript-eslint/prefer-namespace-keyword": "error",
                "@typescript-eslint/prefer-nullish-coalescing": "error",
                "@typescript-eslint/prefer-optional-chain": "error",
                "@typescript-eslint/prefer-readonly": "off",
                "@typescript-eslint/prefer-reduce-type-parameter": "warn",
                "@typescript-eslint/prefer-regexp-exec": "off",
                "@typescript-eslint/prefer-string-starts-ends-with": "error",
                "@typescript-eslint/prefer-ts-expect-error": "error",
                "@typescript-eslint/promise-function-async": "off",
                "@typescript-eslint/require-array-sort-compare": "off",
                "@typescript-eslint/restrict-plus-operands": "error",
                "@typescript-eslint/restrict-template-expressions": "off",
                "@typescript-eslint/strict-boolean-expressions": "off",
                "@typescript-eslint/switch-exhaustiveness-check": "error",
                "@typescript-eslint/triple-slash-reference": "error",
                "@typescript-eslint/unbound-method": "error",

                //  variables
                "@typescript-eslint/unified-signatures": "warn",
            },
        },
    ],
}
