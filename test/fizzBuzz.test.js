let expect    = require("chai").expect;
let fizzBuzz = require("../src/fizzBuzz");

describe("Fizz Buzz App", function() {

    describe("Multiple of 3 returns Fizz", function() {
        input = 3;
        fizzBuzzclass = new fizzBuzz();

        expect(fizzBuzzclass.run(input)).to.equal("Fizz");
    });

    describe("Multiple of 5 returns Buzz", function() {});

    describe("Multiple of 3 and 5 returns FizzBuzz", function() {});

    describe("If not a Multiple of 3 or 5 the returns the number", function() {});
});