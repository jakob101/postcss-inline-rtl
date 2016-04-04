/**
 * Consider:
 *
 *    .a {
 *      margin: 0 5px 0 0;
 *    }
 *
 *    .a {
 *      margin: 0;
 *    }
 *
 * Would be converted to:
 *
 *    html[dir='ltr'] .a {
 *      margin: 0 5px 0 0;
 *    }
 *
 *    html[dir='rtl'] .a {
 *      margin: 0 0 0 5px;
 *    }
 *
 *    .a {
 *       margin: 0;
 *    }
 *
 * As the "html[dir] .a" will have more specificity,
 * "margin: 0" will be ignored. That's why we must
 * convert the following properties *always*, regardless
 * of the value.
 *
 *
 */
module.exports = [
    'background',
    'background-position',
    'background-position-x',
    'border',
    'border-color',
    'border-radius',
    'border-style',
    'border-width',
    'border-top',
    'border-right',
    'border-bottom',
    'border-left',
    'box-shadow',
    'float',
    'margin',
    'padding',
    'text-shadow',
    'text-align',
    'transform',
    'transform-origin',
    'transition'
].join('|');
