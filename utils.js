const disableRules = deprecatedRules =>
    deprecatedRules.reduce(
        (allRules, rule) => ({
            ...allRules,
            [rule]: 'off',
        }),
        {},
    )


module.exports = disableRules;
