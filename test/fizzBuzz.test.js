let expect = require('chai').expect;
let fizzBuzz = require('../src/fizzBuzz');

describe('Fizz Buzz App', () => {
    it('Multiple of 3 returns Fizz', () => {
        expect(fizzBuzz(3)).to.equal('Fizz');
    });

    it('Multiple of 5 returns Buzz', () => {
        expect(fizzBuzz(5)).to.equal('Buzz');
    });

    it('Multiple of 3 and 5 returns FizzBuzz', () => {
        expect(fizzBuzz(15)).to.equal('FizzBuzz');
    });

    it('If not a Multiple of 3 or 5 the returns the number', () => {
        expect(fizzBuzz(input)).to.equal(8);
    });
});