let expect = require('chai').expect;
let fizzBuzz = require('../src/fizzBuzz');

describe('Fizz Buzz App', () => {

    it('Multiple of 3 returns Fizz', () => {
        let input = 3;
        let fizzBuzzclass = new fizzBuzz();

        expect(fizzBuzzclass.run(input)).to.equal('Fizz');
    });

    it('Multiple of 5 returns Buzz', () => {
    });

    it('Multiple of 3 and 5 returns FizzBuzz', () => {});

    it('If not a Multiple of 3 or 5 the returns the number', () => {});
});