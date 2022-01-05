const disableRules = require("../utils")

module.exports = {
    extends: "./non-rules-config.js",
    rules: disableRules(["import/imports-first"]),
}
