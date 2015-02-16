var path = require('path');
var fs = require('fs');
var sass = require('node-sass');
var cssmin = require('cssmin');
var assert = require("assert");

/**
 * Read, compile and minify the scss file.
 *
 * @param name The component name.
 * @param cb   The callback function.
 */
var readScss = function (name, cb) {
    sass.render({
        file: path.join(__dirname, name + ".scss"),
        includePaths: [
            path.join(__dirname, '..', 'src')
        ],
        success: function (result) {
            cb(cssmin(result.css));
        }
    });
};

/**
 * Read, compile and minify the sass file.
 *
 * @param name The component name.
 * @param cb   The callback function.
 */
var readSass = function (name, cb) {
    sass.render({
        file: path.join(__dirname, name + ".sass"),
        includePaths: [
            path.join(__dirname, '..', 'src')
        ],
        success: function (result) {
            cb(cssmin(result.css));
        }
    });
};

/**
 * Read and minify the css file.
 *
 * @param name The component name.
 * @param cb   The callback function.
 */
var readCss = function (name, cb) {
    fs.readFile(
        path.join(__dirname, name + ".css"),
        {encoding: 'utf-8'},
        function (err, contents) {
            if (err) throw err;
            cb(cssmin(contents.toString()));
        }
    );
};

/**
 * Test component compass/css3/animation
 */
describe('animation', function () {
    var name = "compass/css3/animation";

    describe('scss', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readScss(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });

    describe('sass', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readSass(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });
});

/**
 * Test component compass/css3/appearance
 */
describe('appearance', function () {
    var name = "compass/css3/appearance";

    describe('scss', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readScss(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });

    describe('sass', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readSass(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });
});

/**
 * Test component compass/css3/background-clip
 */
describe('background-clip', function () {
    var name = "compass/css3/background-clip";

    describe('scss', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readScss(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });

    describe('sass', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readSass(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });
});

/**
 * Test component compass/css3/background-origin
 */
describe('background-origin', function () {
    var name = "compass/css3/background-origin";

    describe('scss', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readScss(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });

    describe('sass', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readSass(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });
});

/**
 * Test component compass/css3/background-size
 */
describe('background-size', function () {
    var name = "compass/css3/background-size";

    describe('scss', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readScss(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });

    describe('sass', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readSass(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });
});

/**
 * Test component compass/css3/border-radius
 */
describe('border-radius', function () {
    var name = "compass/css3/border-radius";

    describe('scss', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readScss(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });

    describe('sass', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readSass(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });
});

/**
 * Test component compass/css3/box-shadow
 */
describe('box-shadow', function () {
    var name = "compass/css3/box-shadow";

    describe('scss', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readScss(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });

    describe('sass', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readSass(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });
});

/**
 * Test component compass/css3/box-sizing
 */
describe('box-sizing', function () {
    var name = "compass/css3/box-sizing";

    describe('scss', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readScss(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });

    describe('sass', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readSass(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });
});

/**
 * Test component compass/css3/columns
 */
describe('columns', function () {
    var name = "compass/css3/columns";

    describe('scss', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readScss(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });

    describe('sass', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readSass(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });
});

/**
 * Test component compass/css3/filter
 */
describe('filter', function () {
    var name = "compass/css3/filter";

    describe('scss', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readScss(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });

    describe('sass', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readSass(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });
});

/**
 * Test component compass/css3/flexbox
 */
describe('flexbox', function () {
    var name = "compass/css3/flexbox";

    describe('scss', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readScss(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });

    describe('sass', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readSass(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });
});

/**
 * Test component compass/css3/font-face
 */
describe('font-face', function () {
    var name = "compass/css3/font-face";

    describe('scss', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readScss(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });

    describe('sass', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readSass(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });
});

/**
 * Test component compass/css3/hyphenation
 */
describe('hyphenation', function () {
    var name = "compass/css3/hyphenation";

    describe('scss', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readScss(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });

    describe('sass', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readSass(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });
});

/**
 * Test component compass/css3/images
 */
describe('images', function () {
    var name = "compass/css3/images";

    describe('scss', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readScss(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });

    describe('sass', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readSass(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });
});

/**
 * Test component compass/css3/inline-block
 */
describe('inline-block', function () {
    var name = "compass/css3/inline-block";

    describe('scss', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readScss(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });

    describe('sass', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readSass(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });
});

/**
 * Test component compass/css3/opacity
 */
describe('opacity', function () {
    var name = "compass/css3/opacity";

    describe('scss', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readScss(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });

    describe('sass', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readSass(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });
});

/**
 * Test component compass/css3/selection
 */
describe('selection', function () {
    var name = "compass/css3/selection";

    describe('scss', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readScss(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });

    describe('sass', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readSass(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });
});

/**
 * Test component compass/css3/shared
 */
describe('shared', function () {
    var name = "compass/css3/shared";

    describe('scss', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readScss(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });

    describe('sass', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readSass(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });
});

/**
 * Test component compass/css3/text-shadow
 */
describe('text-shadow', function () {
    var name = "compass/css3/text-shadow";

    describe('scss', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readScss(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });

    describe('sass', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readSass(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });
});

/**
 * Test component compass/css3/transform
 */
describe('transform', function () {
    var name = "compass/css3/transform";

    describe('scss', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readScss(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });

    describe('sass', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readSass(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });
});

/**
 * Test component compass/css3/transition
 */
describe('transition', function () {
    var name = "compass/css3/transition";

    describe('scss', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readScss(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });

    describe('sass', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readSass(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });
});

/**
 * Test component compass/css3/user-interface
 */
describe('user-interface', function () {
    var name = "compass/css3/user-interface";

    describe('scss', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readScss(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });

    describe('sass', function () {
        this.timeout(60000);

        it('should compile', function (done) {
            readCss(name, function (expected) {
                readSass(name, function (actual) {
                    assert.equal(actual, expected);
                    done();
                });
            });
        });
    });
});
