<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# zany

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test whether at least one element in a double-precision complex floating-point strided array is truthy.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import zany from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-zany@deno/mod.js';
```

#### zany( N, x, strideX )

Tests whether at least one element in a double-precision complex floating-point strided array is truthy.

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';

var x = new Complex128Array( [ 0.0, 0.0, 1.0, 2.0 ] );

var v = zany( x.length, x, 1 );
// returns true
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Complex128Array`][@stdlib/array/complex128].
-   **strideX**: stride length.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to test every other element:

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';

var x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 1.0, 2.0, 0.0, 0.0 ] );

var v = zany( 2, x, 2 );
// returns true
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';

var x0 = new Complex128Array( [ 0.0, 0.0, 1.0, 2.0, 0.0, 0.0 ] );
var x1 = new Complex128Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = zany( 2, x1, 1 );
// returns true
```

#### zany.ndarray( N, x, strideX, offsetX )

Tests whether at least one element in a double-precision complex floating-point strided array is truthy using alternative indexing semantics.

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';

var x = new Complex128Array( [ 0.0, 0.0, 1.0, 2.0 ] );

var v = zany.ndarray( x.length, x, 1, 0 );
// returns true
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to test every other element starting from the second element:

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';

var x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 1.0, 2.0, 3.0, 4.0 ] );

var v = zany.ndarray( 2, x, 2, 1 );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A complex number is truthy when at least one of its real or imaginary components is truthy.
-   If `N <= 0`, both functions return `false`.
-   Both functions explicitly treat `NaN` values as falsy.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import bernoulli from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-bernoulli@deno/mod.js';
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';
import logEach from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each@deno/mod.js';
import zany from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-zany@deno/mod.js';

var buf = bernoulli( 10*2, 0.5, {
    'dtype': 'float64'
});
var x = new Complex128Array( buf.buffer );
logEach( '%s', x );

var v = zany( x.length, x, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

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

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-zany.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-zany

[test-image]: https://github.com/stdlib-js/blas-ext-base-zany/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-zany/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-zany/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-zany?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-zany.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-zany/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-zany/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-zany/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-zany/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-zany/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-zany/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-zany/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-zany/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-zany/main/LICENSE

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128/tree/deno

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
