"use strict";

let assert = require("assert");

module.exports = function(scope, target) {

    assert.strictEqual(typeof target, "function", "The target must be a function");
    assert.strictEqual(target.constructor.name, "GeneratorFunction", "The target must be a generator function");

    return function* boundGenerator() {
        return yield *target.apply(scope, arguments);
    };

};

