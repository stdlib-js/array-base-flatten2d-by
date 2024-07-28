<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

<!-- lint disable maximum-heading-length -->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# flatten2dBy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Flatten a two-dimensional nested array according to a callback function.



<section class="usage">

## Usage

```javascript
import flatten2dBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-flatten2d-by@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/array-base-flatten2d-by/tags). For example,

```javascript
import flatten2dBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-flatten2d-by@v0.2.2-deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { assign } from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-flatten2d-by@deno/mod.js';
```

#### flatten2dBy( x, shape, colexicographic, clbk\[, thisArg] )

Flattens a two-dimensional nested array according to a callback function.

```javascript
function scale( v ) {
    return v * 2;
}

var x = [ [ 1, 2 ], [ 3, 4 ] ];

var out = flatten2dBy( x, [ 2, 2 ], false, scale );
// returns [ 2, 4, 6, 8 ]
```

To flatten in colexicographic order, provide a third argument equal to `true`.

```javascript
function scale( v ) {
    return v * 2;
}

var x = [ [ 1, 2 ], [ 3, 4 ] ];

var out = flatten2dBy( x, [ 2, 2 ], true, scale );
// returns [ 2, 6, 4, 8 ]
```

To set the callback execution context, provide a `thisArg` argument.

<!-- eslint-disable no-invalid-this -->

```javascript
function scale( v ) {
    this.count += 1;
    return v * 2;
}

var x = [ [ 1, 2 ], [ 3, 4 ] ];
var ctx = {
    'count': 0
};

var out = flatten2dBy( x, [ 2, 2 ], false, scale, ctx );
// returns [ 2, 4, 6, 8 ]

var count = ctx.count;
// returns 4
```

#### flatten2dBy.assign( x, shape, colexicographic, out, stride, offset, clbk\[, thisArg] )

Flattens a two-dimensional nested array according to a callback function and assigns elements to a provided output array.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

function scale( v ) {
    return v * 2;
}

var x = [ [ 1, 2 ], [ 3, 4 ] ];
var out = new Float64Array( 4 );

var y = flatten2dBy.assign( x, [ 2, 2 ], false, out, 1, 0, scale );
// returns <Float64Array>[ 2, 4, 6, 8 ]

var bool = ( y === out );
// returns true

y = flatten2dBy.assign( x, [ 2, 2 ], true, out, 1, 0, scale );
// returns <Float64Array>[ 2, 6, 4, 8 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A callback function is provided the following arguments:

    -   **value**: nested array element.
    -   **indices**: element indices (in lexicographic order).
    -   **arr**: the input array.

-   Both functions assume that all nested arrays have the same length (i.e., the input array is **not** a ragged array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import naryFunction from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-nary-function@deno/mod.js';
import abs from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@deno/mod.js';
import flatten2dBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-flatten2d-by@deno/mod.js';

var fcn = naryFunction( abs, 1 );

var x = [
    [ -1, -2, -3, -4 ],
    [ -5, -6, -7, -8 ],
    [ -9, -10, -11, -12 ],
    [ -13, -14, -15, -16 ]
];

var out = flatten2dBy( x, [ 0, 0 ], false, fcn );
// returns []

out = flatten2dBy( x, [ 0, 0 ], true, fcn );
// returns []

out = flatten2dBy( x, [ 1, 1 ], false, fcn );
// returns [ 1 ]

out = flatten2dBy( x, [ 1, 1 ], true, fcn );
// returns [ 1 ]

out = flatten2dBy( x, [ 2, 2 ], false, fcn );
// returns [ 1, 2, 5, 6 ]

out = flatten2dBy( x, [ 2, 2 ], true, fcn );
// returns [ 1, 5, 2, 6 ]

out = flatten2dBy( x, [ 3, 3 ], false, fcn );
// returns [ 1, 2, 3, 5, 6, 7, 9, 10, 11 ]

out = flatten2dBy( x, [ 3, 3 ], true, fcn );
// returns [ 1, 5, 9, 2, 6, 10, 3, 7, 11 ]

out = flatten2dBy( x, [ 4, 4 ], false, fcn );
// returns [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]

out = flatten2dBy( x, [ 4, 4 ], true, fcn );
// returns [ 1, 5, 9, 13, 2, 6, 10, 14, 3, 7, 11, 15, 4, 8, 12, 16 ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-flatten2d-by.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-flatten2d-by

[test-image]: https://github.com/stdlib-js/array-base-flatten2d-by/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/array-base-flatten2d-by/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-flatten2d-by/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-flatten2d-by?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-flatten2d-by.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-flatten2d-by/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-flatten2d-by/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-base-flatten2d-by/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-base-flatten2d-by/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-base-flatten2d-by/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-base-flatten2d-by/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-base-flatten2d-by/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-base-flatten2d-by/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-flatten2d-by/main/LICENSE

</section>

<!-- /.links -->
