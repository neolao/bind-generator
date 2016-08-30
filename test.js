"use strict";

let assert = require("assert");
let bindGenerator = require("./index.js");


class Foo
{
    constructor()
    {
        this.name = "foo";
    }

    *myGeneratorFunction()
    {
        return `Executed in ${this.name}`;
    }
}

class Bar
{
    constructor()
    {
        this.name = "bar";
    }
}

let foo = new Foo;
let bar = new Bar;

let result = foo.myGeneratorFunction();
assert.strictEqual(result.next().value, "Executed in foo");

let myGeneratorFunction = bindGenerator(bar, foo.myGeneratorFunction);
result = myGeneratorFunction();
assert.strictEqual(result.next().value, "Executed in bar");

myGeneratorFunction = bindGenerator(foo, foo.myGeneratorFunction);
result = myGeneratorFunction();
assert.strictEqual(result.next().value, "Executed in foo");

