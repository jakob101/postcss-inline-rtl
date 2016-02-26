var postcss = require('postcss');

module.exports = postcss.plugin('postcss-inline-rtl', function (opts) {
    opts = opts || {};

    // Work with options here

    return function (css, result) {

        // Transform CSS AST here

    };
});
