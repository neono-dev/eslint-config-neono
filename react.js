/* eslint-disable */

const readPkgUp = require("read-pkg-up")
const semver = require("semver")

let oldestSupportedReactVersion = "16.5.2"

let hasPropTypes = false

try {
    const pkg = readPkgUp.sync({normalize: true})
    // eslint-disable-next-line prefer-object-spread
    const allDeps = Object.assign(
        {react: "16.5.2"},
        pkg.peerDependencies,
        pkg.devDependencies,
        pkg.dependencies,
    )

    hasPropTypes = allDeps.hasOwnProp("prop-types")
    oldestSupportedReactVersion = semver
        .validRange(allDeps.react)
        .replace(/[>=<|]/g, " ")
        .split(" ")
        .filter(Boolean)
        .sort(semver.compare)[0]
} catch (error) {
    // Ignore error
}

module.exports = {
    env: {
        browser: true,
    },
    extends: ["plugin:react/jsx-runtime"],
    overrides: [
        {
            files: ["**/*.ts?(x)"],
            rules: {
                "react/jsx-filename-extension": [
                    "error",
                    {extensions: [".ts", ".tsx"]},
                ],
                "react/prop-types": "off",
            },
        },
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ["react", "react-hooks"],
    rules: {
        /**
         * Enforces consistent naming for boolean props.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
         */
        "react/boolean-prop-naming": ["error", {
            "message": "It is better if your prop ({{ propName }}) matches this pattern: ({{ pattern }}).",
            "propTypeNames": ["bool"],
            "rule": "^(is|has)[A-Z]([A-Za-z0-9]?)+",
            "validateNested": false,
        }],
        /**
         * Prevent usage of `button` elements without an explicit `type` attribute.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
         */
        "react/button-has-type": "off",
        /**
         * Enforce all defaultProps have a corresponding non-required PropType.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
         */
        "react/default-props-match-prop-types": hasPropTypes ? "error" : "off",
        /**
         * Enforce consistent usage of destructuring assignment of props, state, and context.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
         */
        "react/destructuring-assignment": "off",
        /**
         * Prevent missing displayName in a React component definition.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
         */
        "react/display-name": ["error", { ignoreTranspilerName: false }],
        /**
         * Forbid certain props on Components.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
         * May be useful in a project, not in an ESLint config.
         */
        "react/forbid-component-props": "off",
        /**
         * Forbid certain props on DOM Nodes.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
         * May be useful in a project, not in an ESLint config.
         */
        "react/forbid-dom-props": "off",
        /**
         * Forbid certain elements.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
         * May be useful in a project, not in an ESLint config.
         */
        "react/forbid-elements": "off",
        /**
         * Forbid foreign propTypes.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
         */
        "react/forbid-foreign-prop-types": hasPropTypes ? "error" : "off",
        /**
         * Forbid certain propTypes.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
         */
        "react/forbid-prop-types": "off",
        /**
         * Enforce a specific function type for function components.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
         * Don't really know what to do here, it's project-wide specific.
         */
        "react/function-component-definition": "off",
        /**
         * Enforce boolean attributes notation in JSX.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
         */
        "react/jsx-boolean-value": ["error", "never"],
        /**
         * Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
         */
        "react/jsx-curly-brace-presence": ["warn", {
            "children": "never",
            "props": "never",
        }],
        /**
         * Restrict file extensions that may contain JSX.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
         */
        "react/jsx-filename-extension": ["error", {
            "allow": "as-needed",
            "extensions": [".jsx"]
        }],
        /**
         * Enforce shorthand or standard form for React fragments.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
         *
         * Generally we use `<></>` form but when we need to add a `key` we have to
         * insert `<React.Fragment key="key">...</React.Fragment>`.
         * But I don't want to restrict usage of `<></>`.
         */
        "react/jsx-fragments": "off",
        /**
         * Enforce event handler naming conventions in JSX.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
         *
         * Cannot configure it the right way.
         */
        "react/jsx-handler-names": "off",
        /**
         * Detect missing `key` prop.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
         */
        "react/jsx-key": ["error", {
            "checkFragmentShorthand": true,
            "checkKeyMustBeforeSpread": false,
        }],
        /**
         * Validate JSX maximum depth.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
         */
        "react/jsx-max-depth": ["warn", { "max": 7 }], // When you reach this point, it may be a problem.
        /**
         * Require or prevent a new line after jsx elements and expressions.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md
         *
         * Cannot make it work.
         */
        "react/jsx-newline": "off",
        /**
         * No `.bind()` or Arrow Functions in JSX Props.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
         */
        "react/jsx-no-bind": "error",
        /**
         * Prevent comments from being inserted as text nodes.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
         */
        "react/jsx-no-comment-textnodes": "error",
        /**
         * Prevent react contexts from taking non-stable values.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
         */
        "react/jsx-no-constructed-context-values": "error",
        /**
         * Prevent duplicate properties in JSX.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
         */
        "react/jsx-no-duplicate-props": "error",
        /**
         * Prevent usage of string literals in JSX.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
         *
         * It may be useful when you integrate some i18n system, and don't want user to insert text directly.
         */
        "react/jsx-no-literals": "off",
        /**
         * Prevent usage of `javascript:` URLs.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
         */
        "react/jsx-no-script-url": "error",
        /**
         * Prevent usage of unsafe `target='_blank'`.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
         */
        "react/jsx-no-target-blank": "error",
        /**
         * Disallow undeclared variables in JSX.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
         */
        "react/jsx-no-undef": "error",
        /**
         * Disallow unnecessary fragments.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
         */
        "react/jsx-no-useless-fragment": "warn",
        /**
         * Enforce PascalCase for user-defined JSX components.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
         */
        "react/jsx-pascal-case": "error",
        /**
         * Disallow JSX props spreading.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
         */
        "react/jsx-props-no-spreading": "off",
        /**
         * Enforce defaultProps declarations alphabetical sorting.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md
         */
        "react/jsx-sort-default-props": "off",
        /**
         * Enforce props alphabetical sorting.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
         */
        "react/jsx-sort-props": ["warn", {
            "callbacksLast": true,
            "ignoreCase": true,
            "noSortAlphabetically": false,
            "reservedFirst": true,
            "shorthandFirst": true,
            "shorthandLast": false,
        }],
        /**
         * Prevent React to be incorrectly marked as unused.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
         */
        "react/jsx-uses-react": "off",
        /**
         * Prevent variables used in JSX to be incorrectly marked as unused.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
         */
        "react/jsx-uses-vars": "error",
        /**
         * Prevent using `this.state` within a `this.setState`.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
         */
        "react/no-access-state-in-setstate": "error",
        /**
         * Prevent adjacent inline elements not separated by whitespace.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md
         */
        "react/no-adjacent-inline-elements": "off",
        /**
         * Prevent usage of Array index in keys.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
         */
        "react/no-array-index-key": "warn",
        /**
         * Lifecycle methods should be methods on the prototype, not class fields.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md
         */
        "react/no-arrow-function-lifecycle": "error",
        /**
         * Prevent passing of children as props.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
         */
        "react/no-children-prop": "error",
        /**
         * Prevent usage of dangerous JSX properties.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
         *
         * Most of the time, you know what you do. But a warning is never bad.
         */
        "react/no-danger": "warn",
        /**
         * Prevent problem with children and props.dangerouslySetInnerHTML.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
         */
        "react/no-danger-with-children": "error",
        /**
         * Prevent usage of deprecated methods.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
         */
        "react/no-deprecated": "error",
        /**
         * Prevent usage of setState in componentDidMount.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
         */
        "react/no-did-mount-set-state": "error",
        /**
         * Prevent usage of setState in componentDidUpdate.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
         */
        "react/no-did-update-set-state": "error",
        /**
         * Prevent direct mutation of this.state.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
         */
        "react/no-direct-mutation-state": "error",
        /**
         * Prevent usage of findDOMNode.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
         */
        "react/no-find-dom-node": "error",
        /**
         * Prevent usage of invalid attributes.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md
         */
        "react/no-invalid-html-attribute": "error",
        /**
         * Prevent usage of isMounted.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
         */
        "react/no-is-mounted": "error",
        /**
         * Prevent multiple component definition per file.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
         */
        "react/no-multi-comp": "warn",
        /**
         * Enforce that namespaces are not used in React elements.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-namespace.md
         */
        "react/no-namespace": "error",
        /**
         * Prevent usage of shouldComponentUpdate when extending React.PureComponent.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
         */
        "react/no-redundant-should-component-update": "error",
        /**
         * Prevent usage of the return value of ReactDOM.render.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
         */
        "react/no-render-return-value": "error",
        /**
         * Prevent usage of setState.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
         */
        "react/no-set-state": "off",
        /**
         * Prevent using string references.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
         */
        "react/no-string-refs": "error",
        /**
         * Prevent `this` from being used in stateless functional components.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
         */
        "react/no-this-in-sfc": "error",
        /**
         * Prevents common typos.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
         */
        "react/no-typos": "error",
        /**
         * Prevent invalid characters from appearing in markup.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
         */
        "react/no-unescaped-entities": "warn",
        /**
         * Prevent usage of unknown DOM property.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
         */
        "react/no-unknown-property": "error",
        /**
         * Prevent usage of unsafe lifecycle methods.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
         */
        "react/no-unsafe": "warn", // If you need it there should be a comment explaining why
        /**
         * Prevent creating unstable components inside components.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
         */
        "react/no-unstable-nested-components": ["error", { allowAsProps: true }],
        /**
         * Prevent declaring unused methods of component class.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md
         */
        "react/no-unused-class-component-methods": "error",
        /**
         * Prevent definitions of unused propTypes.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
         */
        "react/no-unused-prop-types": hasPropTypes ? "error" : "off",
        /**
         * Prevent definitions of unused state.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
         */
        "react/no-unused-state": "error",
        /**
         * Prevent usage of setState in componentWillUpdate.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
         */
        "react/no-will-update-set-state": "error",
        /**
         * Enforce ES5 or ES6 class for React Components.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
         */
        "react/prefer-es6-class": "off",
        /**
         * Prefer exact `propTypes` definitions.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md
         */
        "react/prefer-exact-props": "off",
        /**
         * Enforce that props are read-only.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
         */
        "react/prefer-read-only-props": "off",
        /**
         * Enforce stateless React Components to be written as a pure function.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
         */
        "react/prefer-stateless-function": "off",
        /**
         * Prevent missing props validation in a React component definition.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
         */
        "react/prop-types": hasPropTypes ? "error" : "off",
        /**
         * Prevent missing React when using JSX.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
         */
        "react/react-in-jsx-scope": "off",
        /**
         * Enforce a defaultProps definition for every prop that is not a required prop.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
         */
        "react/require-default-props": "error",
        /**
         * Enforce React components to have a shouldComponentUpdate method.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
         */
        "react/require-optimization": "off",
        /**
         * Enforce ES5 or ES6 class for returning value in render function.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
         */
        "react/require-render-return": "error",
        /**
         * Prevent extra closing tags for components without children.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
         */
        "react/self-closing-comp": ["error", {
            "component": true,
            "html": true,
        }],
        /**
         * Enforce component methods order.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
         */
        "react/sort-comp": "off",
        /**
         * Enforce propTypes declarations alphabetical sorting.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
         */
        "react/sort-prop-types": hasPropTypes ? ["warn", {
            "callbacksLast": true,
            "ignoreCase": true,
            "noSortAlphabetically": false,
            "requiredFirst": true,
            "sortShapeProp": true,
        }] : "off",
        /**
         * Enforce state initialization style.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
         */
        "react/state-in-constructor": ["error", "never"],
        /**
         * Enforces where React component static properties should be positioned.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
         */
        "react/static-property-placement": "off",
        /**
         * Enforce style prop value being an object.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
         */
        "react/style-prop-object": "error",
        /**
         * Prevent void DOM elements (e.g. `<img />`, `<br />`) from receiving children.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
         */
        "react/void-dom-elements-no-children": "error",

        // https://reactjs.org/docs/hooks-rules.html
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/rules-of-hooks": "error",
    },
    settings: {
        react: {
            version: oldestSupportedReactVersion,
        },
    },
}
