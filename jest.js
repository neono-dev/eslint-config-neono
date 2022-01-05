/* eslint-disable */

const readPkgUp = require("read-pkg-up")

const {disableRules, mapDeprecatedRules} = require("./utils")

let hasJestDom = false
let hasTestingLibrary = false

try {
    const {packageJson} = readPkgUp.sync({normalize: true})
    const allDeps = Object.keys({
        ...packageJson.peerDependencies,
        ...packageJson.devDependencies,
        ...packageJson.dependencies,
    })

    hasJestDom = allDeps.includes("@testing-library/jest-dom")
    hasTestingLibrary = [
        "@testing-library/dom",
        "@testing-library/react",
        "@testing-library/angular",
        "@testing-library/vue",
    ].some(dependency => allDeps.includes(dependency))
} catch (error) {
    // Ignore error
}

const rules = {
    "react/display-name": "off", // We don't need a display name in test files

    ...mapDeprecatedRules(["jest/no-expect-resolves"]),
    /**
     * Have control over `test` and `it` usages.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/consistent-test-it.md
     */
    "jest/consistent-test-it": ["error", {
        "fn": "test",
        "withinDescribe": "it",
    }],
    /**
     * Enforce assertion to be made in a test body.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/expect-expect.md
     */
    "jest/expect-expect": "error",
    /**
     * Enforces a maximum depth to nested describe calls.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/max-nested-describe.md
     */
    "jest/max-nested-describe": "error",
    /**
     * Disallow alias methods.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-alias-methods.md
     */
    "jest/no-alias-methods": "off",
    /**
     * Disallow commented out tests.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-commented-out-tests.md
     */
    "jest/no-commented-out-tests": "warn",
    /**
     * Prevent calling `expect` conditionally.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-expect.md
     */
    "jest/no-conditional-expect": "error",
    /**
     * Disallow use of deprecated functions.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-deprecated-functions.md
     */
    "jest/no-deprecated-functions": "error",
    /**
     * Disallow disabled tests.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-disabled-tests.md
     */
    "jest/no-disabled-tests": "warn",
    /**
     * Avoid using a callback in asynchronous tests and hooks.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-done-callback.md
     */
    "jest/no-done-callback": "error",
    /**
     * Disallow duplicate setup and teardown hooks.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-duplicate-hooks.md
     */
    "jest/no-duplicate-hooks": "error",
    /**
     * Disallow using `exports` in files containing tests.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-export.md
     */
    "jest/no-export": "error",
    /**
     * Disallow focused tests.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-focused-tests.md
     */
    "jest/no-focused-tests": "error",
    /**
     * Disallow setup and teardown hooks.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-hooks.md
     */
    "jest/no-hooks": "off",
    /**
     * Disallow identical titles.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-identical-title.md
     */
    "jest/no-identical-title": "error",
    /**
     * Disallow conditional logic.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-if.md
     */
    "jest/no-if": "error",
    /**
     * Disallow string interpolation inside snapshots.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-interpolation-in-snapshots.md
     */
    "jest/no-interpolation-in-snapshots": "error",
    /**
     * Disallow Jasmine globals.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-jasmine-globals.md
     */
    "jest/no-jasmine-globals": "error",
    /**
     * Disallow importing Jest.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-jest-import.md
     */
    "jest/no-jest-import": "error",
    /**
     * Disallow large snapshots.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-large-snapshots.md
     */
    "jest/no-large-snapshots": ["warn", { maxSize: 300 }],
    /**
     * Disallow manually importing from `__mocks__`.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-mocks-import.md
     */
    "jest/no-mocks-import": "error",
    /**
     * Disallow specific matchers & modifiers.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-restricted-matchers.md
     */
    "jest/no-restricted-matchers": "off",
    /**
     * Disallow using `expect` outside of `it` or `test` blocks.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-standalone-expect.md
     */
    "jest/no-standalone-expect": "error",
    /**
     * Use `.only` and `.skip` over `f` and `x`.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-prefixes.md
     */
    "jest/no-test-prefixes": "error",
    /**
     * Disallow explicitly returning from tests.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-return-statement.md
     */
    "jest/no-test-return-statement": "error",
    /**
     * Suggest using `toBeCalledWith()` or `toHaveBeenCalledWith()`.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-called-with.md
     */
    "jest/prefer-called-with": "error",
    /**
     * Suggest using `expect.assertions()` OR `expect.hasAssertions()`.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-expect-assertions.md
     */
    "jest/prefer-expect-assertions": "off",
    /**
     * Prefer `await expect(...).resolves` over `await ...)`.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-expect-resolves.md
     */
    "jest/prefer-expect-resolves": "off",
    /**
     * Suggest having hooks before any test cases.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-hooks-on-top.md
     */
    "jest/prefer-hooks-on-top": "error",
    /**
     * Enforce lowercase test names.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-lowercase-title.md
     */
    "jest/prefer-lowercase-title": "error",
    /**
     * Suggest using `jest.spyOn()`.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-spy-on.md
     */
    "jest/prefer-spy-on": "warn",
    /**
     * Suggest using `toStrictEqual()`.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-strict-equal.md
     */
    "jest/prefer-strict-equal": "warn",
    /**
     * Suggest using `toBe()` for primitive literals.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-be.md
     */
    "jest/prefer-to-be": "warn",
    /**
     * Suggest using `toContain()`.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-contain.md
     */
    "jest/prefer-to-contain": "warn",
    /**
     * Suggest using `toHaveLength()`.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-have-length.md
     */
    "jest/prefer-to-have-length": "warn",
    /**
     * Suggest using `test.todo`.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-todo.md
     */
    "jest/prefer-todo": "warn",
    /**
     * Require setup and teardown code to be within a hook.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-hook.md
     */
    "jest/require-hook": "off",
    /**
     * Require a message for `toThrow()`.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-to-throw-message.md
     */
    "jest/require-to-throw-message": "error",
    /**
     * Require test cases and hooks to be inside a `describe` block.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-top-level-describe.md
     */
    "jest/require-top-level-describe": "warn",
    /**
     * Enforces unbound methods are called with their expected scope.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
     */
    "jest/unbound-method": "off",
    /**
     * Enforce valid `describe()` callback.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-describe-callback.md
     */
    "jest/valid-describe-callback": "error",
    /**
     * Enforce valid `expect()` usage.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-expect.md
     */
    "jest/valid-expect": "error",
    /**
     * Ensure promises that have expectations in their chain are valid.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-expect-in-promise.md
     */
    "jest/valid-expect-in-promise": "error",
    /**
     * Enforce valid titles.
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-title.md
     */
    "jest/valid-title": "error",

    ...(hasJestDom
        ? {
            /**
             * Prefer `toBeChecked()` or `not.toBeChecked()` over `toHaveProperty('checked', true|false)`
             * https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-checked.md
             */
            "jest-dom/prefer-checked": "error",
            /**
             * Prefer `toBeEmptyDOMElement` over checking `innerHTML` / `firstChild`
             * https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-empty.md
             */
            "jest-dom/prefer-empty": "error",
            /**
             * Prefer `toBeDisabled()` or `toBeEnabled()` over `toHaveProperty('disabled', true|false)`
             * https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-enabled-disabled.md
             */
            "jest-dom/prefer-enabled-disabled": "error",
            /**
             * Prefer `toHaveFocus` over checking `document.activeElement`
             * https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-focus.md
             */
            "jest-dom/prefer-focus": "error",
            /**
             * Prefer `.toBeInTheDocument` in favor of `.toHaveLength(1)`
             * https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-in-document.md
             */
            "jest-dom/prefer-in-document": "error",
            /**
             * Prefer `toBeRequired()` or `not.toBeRequired()` over `toHaveProperty('required', true|false)`
             * https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-required.md
             */
            "jest-dom/prefer-required": "error",
            /**
             * Prefer `toHaveAttribute()` over checking `getAttribute/hasAttribute`
             * https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-attribute.md
             */
            "jest-dom/prefer-to-have-attribute": "error",
            /**
             * Prefer `toHaveClass()` over checking `element.class`
             * https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-class.md
             */
            "jest-dom/prefer-to-have-class": "error",
            /**
             * Prefer `toHaveStyle()` over checking `element.style`
             * https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-style.md
             */
            "jest-dom/prefer-to-have-style": "error",
            /**
             * Prefer `toHaveTextContent()` over checking `element.textContent`
             * https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-text-content.md
             */
            "jest-dom/prefer-to-have-text-content": "error",
            /**
             * Prefer `toHaveValue()` over checking `element.value`
             * https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-value.md
             */
            "jest-dom/prefer-to-have-value": "error",
        }
        : null),

    ...(hasTestingLibrary
        ? {
            /**
             * Enforce promises from async queries to be handled.
             * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-async-query.md
             */
            "testing-library/await-async-query": "error",
            /**
             * Enforce promises from async utils to be handled.
             * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-async-utils.md
             */
            "testing-library/await-async-utils": "error",
            /**
             * Enforce promises from fire event methods to be handled.
             * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-fire-event.md
             */
            "testing-library/await-fire-event": "off",
            /**
             * Enforces consistent naming for the data-testid attribute.
             * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/consistent-data-testid.md
             */
            "testing-library/consistent-data-testid": "off",
            /**
             * Disallow unnecessary `await` for sync events.
             * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-await-sync-events.md
             */
            "testing-library/no-await-sync-events": "error",
            /**
             * Disallow unnecessary `await` for sync queries.
             * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-await-sync-query.md
             */
            "testing-library/no-await-sync-query": "error",
            /**
             * Disallow the use of `container` methods.
             * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-container.md
             */
            "testing-library/no-container": "error",
            /**
             * Disallow the use of debugging utilities.
             * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-debugging-utils.md
             */
            "testing-library/no-debugging-utils": "error",
            /**
             * Disallow importing from DOM Testing Library.
             * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-dom-import.md
             */
            "testing-library/no-dom-import": ["error", "react"],
            /**
             * Disallow the use of `cleanup`.
             * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-manual-cleanup.md
             */
            "testing-library/no-manual-cleanup": "error",
            /**
             * Disallow direct Node access.
             * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-node-access.md
             */
            "testing-library/no-node-access": "error",
            /**
             * Disallow the use of promises passed to a `fireEvent` method.
             * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-promise-in-fire-event.md
             */
            "testing-library/no-promise-in-fire-event": "error",
            /**
             * Disallow the use of `render` in setup functions.
             * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-render-in-setup.md
             */
            "testing-library/no-render-in-setup": "error",
            /**
             * Disallow wrapping Testing Library utils or empty callbacks `act`.
             * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-unnecessary-act.md
             */
            "testing-library/no-unnecessary-act": "error",
            /**
             * Empty callbacks inside `waitFor` and `waitForElementToBeRemoved` are not preferred.
             * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-empty-callback.md
             */
            "testing-library/no-wait-for-empty-callback": "error",
            /**
             * Disallow the use of multiple expect inside `waitFor`.
             * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-multiple-assertions.md
             */
            "testing-library/no-wait-for-multiple-assertions": "error",
            /**
             * Disallow the use of side effects inside `waitFor`.
             * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-side-effects.md
             */
            "testing-library/no-wait-for-side-effects": "error",
            /**
             * Ensures no snapshot is generated inside a `waitFor` call.
             * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-snapshot.md
             */
            "testing-library/no-wait-for-snapshot": "error",
            /**
             * Suggest using explicit assertions rather than just `getBy*` queries.
             * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-explicit-assert.md
             */
            "testing-library/prefer-explicit-assert": "warn",
            /**
             * Suggest using `findBy*` methods instead of the `waitFor` + `getBy` queries.
             * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-find-by.md
             */
            "testing-library/prefer-find-by": "error",
            /**
             * Enforce specific queries when checking element is present or not.
             * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-presence-queries.md
             */
            "testing-library/prefer-presence-queries": "error",
            /**
             * Suggest using `queryBy*` queries when waiting for disappearance.
             * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-query-by-disappearance.md
             */
            "testing-library/prefer-query-by-disappearance": "error",
            /**
             * Suggest using `screen` while querying.
             * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-screen-queries.md
             */
            "testing-library/prefer-screen-queries": "error",
            /**
             * Suggest using `userEvent` library instead of `fireEvent` for simulating user interaction.
             * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-user-event.md
             */
            "testing-library/prefer-user-event": "error",
            /**
             * Use `waitFor` instead of deprecated wait methods.
             * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-wait-for.md
             */
            "testing-library/prefer-wait-for": "error",
            /**
             * Enforce a valid naming for return value from `render`.
             * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/render-result-naming-convention.md
             */
            "testing-library/render-result-naming-convention": "error",
        }
        : null),
}

module.exports = {
    env: {
        "jest/globals": true,
    },
    overrides: [
        {
            files: [
                "**/__tests__/**/*.+(js|ts)?(x)",
                "**/*.{spec,test}.+(js|ts)?(x)",
            ],
            rules,
        },
        {
            files: ["**/__tests__/**/*.ts?(x)", "**/*.{spec,test}.ts?(x)"],
            rules: {
                "@typescript-eslint/unbound-method": "off",
                "jest/unbound-method": "error",
            },
        },
    ],
    plugins: [
        "jest",
        hasJestDom ? "jest-dom" : null,
        hasTestingLibrary ? "testing-library" : null,
    ].filter(Boolean),
    rules: {
        /*
         * Workaround until `eslint-find-rules` supports "overrides"
         * See https://github.com/sarbbottam/eslint-find-rules/issues/317
         */
        ...disableRules(Object.keys(rules)),
    },

}
