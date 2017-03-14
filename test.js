/* eslint max-len:0 */
import postcss from 'postcss';
import test    from 'ava';

import plugin from './';

function run(t, input, output, opts = { }) {
    return postcss([ plugin(opts) ]).process(input)
        .then( result => {
            t.same(result.css, output);
            t.same(result.warnings().length, 0);
        });
}

/* Write tests here */

test('Checks initial configuration', t => {
    return run(t, 'a{ color: red }', 'a{ color: red }', { });
});

test('Supports rtlcss control directives', t => {
    return run(t, 'a{ /*rtl:ignore*/left: 0 }', 'a{ /*rtl:ignore*/left: 0 }', { });
});
