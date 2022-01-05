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

                "require-await": "off",
                /**
                 * Disallow async functions which have no `await` expression.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/require-await.md
                 */
                "@typescript-eslint/require-await": "off",

                /**
                 * Requires using either T[] or Array<T> for arrays.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/array-type.md
                 */
                "@typescript-eslint/array-type": ["error", {
                    "default": "array-simple",
                }],
                /**
                 * Disallows awaiting a value that is not a Thenable.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/await-thenable.md
                 */
                "@typescript-eslint/await-thenable": "error",
                /**
                 * Bans `@ts-<directive>` comments from being used or requires descriptions after directive
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-ts-comment.md
                 */
                "@typescript-eslint/ban-ts-comment": ["error", {
                    "minimumDescriptionLength": 3,
                    "ts-check": false,
                    "ts-expect-error": "allow-with-description",
                    "ts-ignore": false,
                    "ts-nocheck": false,
                }],
                /**
                 * Bans specific types from being used.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-types.md
                 */
                "@typescript-eslint/ban-types": ["error", {
                    "types": {
                        "String": {
                            "message": 'Use string instead',
                            "fixWith": 'string',
                        },
                        "Boolean": {
                            "message": 'Use boolean instead',
                            "fixWith": 'boolean',
                        },
                        "Number": {
                            "message": 'Use number instead',
                            "fixWith": 'number',
                        },
                        "Symbol": {
                            "message": 'Use symbol instead',
                            "fixWith": 'symbol',
                        },

                        "Function": {
                            "message": [
                                'The `Function` type accepts any function-like value.',
                                'It provides no type safety when calling the function, which can be a common source of bugs.',
                                'It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.',
                                'If you are expecting the function to accept certain arguments, you should explicitly define the function shape.',
                            ].join('\n'),
                        },

                        // object typing
                        "Object": {
                            "message": [
                                'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
                                '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
                                '- If you want a type meaning "any value", you probably want `unknown` instead.',
                            ].join('\n'),
                            "fixWith": "Record<string, unknown>",
                        },
                        '{}': {
                            "message": [
                                '`{}` actually means "any non-nullish value".',
                                '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
                                '- If you want a type meaning "any value", you probably want `unknown` instead.',
                            ].join('\n'),
                            "fixWith": "Record<string, unknown>",
                        },
                    },
                }],
                /**
                 * Ensures that literals on classes are exposed in a consistent style.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/class-literal-property-style.md
                 */
                "@typescript-eslint/class-literal-property-style": "warn",
                /**
                 * Enforces consistent usage of type assertions.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
                 */
                "@typescript-eslint/consistent-type-assertions": "off",
                /**
                 * Requires that `.toString()` is only called on objects which provide useful information when stringified.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-base-to-string.md
                 */
                "@typescript-eslint/no-base-to-string": "warn",
                /**
                 * Requires expressions of type void to appear in statement position.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md
                 */
                "@typescript-eslint/no-confusing-void-expression": ["error", {
                    "ignoreArrowShorthand": true,
                }],
                /**
                 * Disallow the `delete` operator with computed key expressions.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
                 */
                "@typescript-eslint/no-dynamic-delete": "error",
                /**
                 * Disallow the declaration of empty interfaces.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-empty-interface.md
                 */
                "@typescript-eslint/no-empty-interface": "warn",
                /**
                 * Disallow usage of the `any` type.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-explicit-any.md
                 */
                "@typescript-eslint/no-explicit-any": ["error", {
                    "fixToUnknown": false, // this may be a good idea, but I want to prefer user defining its own definition.
                    "ignoreRestArgs": false,
                }],
                /**
                 * Forbids the use of classes as namespaces.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-extraneous-class.md
                 */
                "@typescript-eslint/no-extraneous-class": "error", // stay away from classes when you can
                /**
                 * Requires Promise-like values to be handled appropriately.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-floating-promises.md
                 */
                "@typescript-eslint/no-floating-promises": "off", // not a bad rule, but can be annoying
                /**
                 * Disallow iterating over an array with a for-in loop.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-for-in-array.md
                 */
                "@typescript-eslint/no-for-in-array": "error",
                /**
                 * Disallow usage of the implicit `any` type in catch clauses.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md
                 */
                "@typescript-eslint/no-implicit-any-catch": "warn",
                /**
                 * Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-inferrable-types.md
                 */
                "@typescript-eslint/no-inferrable-types": "error",
                /**
                 * Disallows usage of `void` type outside of generic or return types.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-invalid-void-type.md
                 */
                "@typescript-eslint/no-invalid-void-type": "warn",
                /**
                 * Enforce valid definition of `new` and `constructor`.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-misused-new.md
                 */
                "@typescript-eslint/no-misused-new": "error",
                /**
                 * Avoid using promises in places not designed to handle them.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-misused-promises.md
                 */
                "@typescript-eslint/no-misused-promises": "warn",
                /**
                 * Disallow the use of custom TypeScript modules and namespaces.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-namespace.md
                 */
                "@typescript-eslint/no-namespace": "error",
                /**
                 * Disallows invocation of `require()`.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-require-imports.md
                 */
                "@typescript-eslint/no-require-imports": ["warn"], // sometimes you can't do it any other way
                /**
                 * Disallow aliasing `this`.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-this-alias.md
                 */
                "@typescript-eslint/no-this-alias": "error",
                /**
                 * Prevents conditionals where the type is always truthy or always falsy.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
                 */
                "@typescript-eslint/no-unnecessary-condition": "error",
                /**
                 * Warns when a namespace qualifier is unnecessary.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
                 */
                "@typescript-eslint/no-unnecessary-qualifier": "warn", // I"m not sure I understand this one
                /**
                 * Enforces that type arguments will not be used if not required.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
                 */
                "@typescript-eslint/no-unnecessary-type-arguments": "error",
                /**
                 * Warns if a type assertion does not change the type of an expression.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
                 */
                "@typescript-eslint/no-unnecessary-type-assertion": "error",
                /**
                 * Disallows unnecessary constraints on generic types.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md
                 */
                "@typescript-eslint/no-unnecessary-type-constraint": "error",
                /**
                 * Disallows the use of require statements except in import statements.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-var-requires.md
                 */
                "@typescript-eslint/no-var-requires": "error",
                /**
                 * Prefers a non-null assertion over explicit type cast when possible.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md
                 */
                "@typescript-eslint/non-nullable-type-assertion-style": "warn",
                /**
                 * Prefer usage of `as const` over literal type.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-as-const.md
                 */
                "@typescript-eslint/prefer-as-const": "error",
                /**
                 * Prefer initializing each enums member value.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md
                 *
                 * When using enums, we don't care. In fact, all calls to enums should be `MyEnum.KEY` and not `1`.
                 */
                "@typescript-eslint/prefer-enum-initializers": "off",
                /**
                 * Use function types instead of interfaces with call signatures.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-function-type.md
                 */
                "@typescript-eslint/prefer-function-type": "warn", // though I'm not sure if I understand it
                /**
                 * Enforce `includes` method over `indexOf` method.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-includes.md
                 */
                "@typescript-eslint/prefer-includes": "error",
                /**
                 * Require that all enum members be literal values to prevent unintended enum member name shadow issues.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md
                 */
                "@typescript-eslint/prefer-literal-enum-member": "error",
                /**
                 * Require the use of the `namespace` keyword instead of the `module` keyword to declare custom TypeScript modules.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
                 */
                "@typescript-eslint/prefer-namespace-keyword": "error",
                /**
                 * Enforce the usage of the nullish coalescing operator instead of logical chaining.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
                 */
                "@typescript-eslint/prefer-nullish-coalescing": "error",
                /**
                 * Prefer using concise optional chain expressions instead of chained logical ands.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
                 */
                "@typescript-eslint/prefer-optional-chain": "error",
                /**
                 * Requires that private members are marked as readonly if they're never modified outside of the constructor.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-readonly.md
                 */
                "@typescript-eslint/prefer-readonly": "warn",
                /**
                 * Prefer using type parameter when calling `Array#reduce` instead of casting.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
                 */
                "@typescript-eslint/prefer-reduce-type-parameter": "warn",
                /**
                 * Enforce that `RegExp#exec` is used instead of `String#match` if no global flag is provided.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
                 */
                "@typescript-eslint/prefer-regexp-exec": "warn",
                /**
                 * Enforce the use of `String#startsWith` and `String#endsWith` instead of other equivalent methods of checking substrings.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
                 */
                "@typescript-eslint/prefer-string-starts-ends-with": "error",
                /**
                 * Recommends using @ts-expect-error over @ts-ignore.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md
                 */
                "@typescript-eslint/prefer-ts-expect-error": "error",
                /**
                 * Requires any function or method that returns a Promise to be marked async.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/promise-function-async.md
                 */
                "@typescript-eslint/promise-function-async": "off",
                /**
                 * Requires `Array#sort` calls to always provide a `compareFunction`.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
                 */
                "@typescript-eslint/require-array-sort-compare": "warn",
                /**
                 * When adding two variables, operands must both be of type number or of type string.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
                 */
                "@typescript-eslint/restrict-plus-operands": "error",
                /**
                 * Enforce template literal expressions to be of string type.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
                 */
                "@typescript-eslint/restrict-template-expressions": "off",
                /**
                 * Restricts the types allowed in boolean expressions.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
                 */
                "@typescript-eslint/strict-boolean-expressions": "off",
                /**
                 * Exhaustiveness checking in switch with union type.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
                 */
                "@typescript-eslint/switch-exhaustiveness-check": "error",
                /**
                 * Sets preference level for triple slash directives versus ES6-style import declarations.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/triple-slash-reference.md
                 */
                "@typescript-eslint/triple-slash-reference": "error",
                /**
                 * Enforces unbound methods are called with their expected scope.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/unbound-method.md
                 */
                "@typescript-eslint/unbound-method": "error",

                //  variables
                /**
                 * Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter.
                 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/unified-signatures.md
                 */
                "@typescript-eslint/unified-signatures": "warn",
            },
        },
    ],
}
