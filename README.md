[![Build Status](https://travis-ci.org/bit3/compass-polyfill.svg?branch=master)](https://travis-ci.org/bit3/compass-polyfill)

Compass polyfill
================

Are you bored of using compass just for some vendor prefixes?
Then compass polyfill is right for you!
Compass polyfill provide most compass functions, but will only return good old plain standard conform css code!

Usage
-----

All you need is to set the include path to the `src` directory.

### sassc

```bash
sassc -I /path/to/compass-polyfill/src ...
```

### sass

```bash
sass -I /path/to/compass-polyfill/src ...
```

### scss

```bash
scss -I /path/to/compass-polyfill/src ...
```

### node-sass

```javascript
sass.render({
    includePaths: [
        '/path/to/compass-polyfill/src'
    ],
    ...
});
```

### gulp-sass

```javascript
return gulp
    ...
    .pipe(sass({
        includePaths: [
            '/path/to/compass-polyfill/src'
        ],
        ...
    }))
    ...
```

Tests
-----

Compass polyfill will provide mocha unit tests.
To run the tests first do a `npm install` and then `npm test`.
