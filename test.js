/* eslint max-len:0 */
import postcss from 'postcss';
import test    from 'ava';
import plugin from './';

/* Write tests here */

test('Checks initial configuration', t => {
    const input = 'a{ color: red }';
    const output = 'a{ color: red }';

    return postcss([plugin()]).process(input)
        .then( result => {
            t.is(result.css, output);
        });
});

test('Supports rtlcss control directives', t => {
    const input = 'a{ /*rtl:ignore*/left: 0 }';
    const output = 'a{ /*rtl:ignore*/left: 0 }';

    return postcss([plugin()]).process(input)
        .then( result => {
            t.is(result.css, output);
        });
});

test('Checks basic example', t => {
    const input = `
a { 
    float: left 
}`;

    const output = `
html[dir="ltr"] a { 
    float: left
}
html[dir="rtl"] a { 
    float: right
}`;
    return postcss([plugin()]).process(input)
        .then( result => {
            t.is(result.css, output);
        });
});

test('Checks example with two properties which should both be converted', t => {
    const input = `
a { 
    float: left;
    transform: translateX(50%);
}`;

    const output = `
html[dir="ltr"] a { 
    float: left;
    transform: translateX(50%)
}
html[dir="rtl"] a { 
    float: right;
    transform: translateX(-50%)
}`;
    return postcss([plugin()]).process(input)
        .then( result => {
            t.is(result.css, output);
        });
});

test('Checks example with two properties out of which only one should be converted', t => {
    const input = `
a {
    color: red;
    transform: translateX(50%);
}`;

    const output = `
a {
    color: red;
}
html[dir="ltr"] a {
    transform: translateX(50%);
}
html[dir="rtl"] a {
    transform: translateX(-50%);
}`;
    return postcss([plugin()]).process(input)
        .then( result => {
            t.is(result.css, output);
        });
});
