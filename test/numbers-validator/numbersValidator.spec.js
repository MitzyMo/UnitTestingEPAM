import { expect } from "chai";
import { describe, beforeEach, it, afterEach } from "mocha";
import NumbersValidator from "../../app/numbers-validator.js";

describe("NumbersValidator", () => {
    let numbersValidator;

    beforeEach(() => {
        numbersValidator = new NumbersValidator();
    });

    afterEach(() => {
        numbersValidator = null;
    });

    describe("isNumberEven", () => {
        it("should return true when the number is even", () => {
            expect(numbersValidator.isNumberEven(2)).to.be.true;
            expect(numbersValidator.isNumberEven(0)).to.be.true;
        });

        it("should return false when the number is odd", () => {
            expect(numbersValidator.isNumberEven(3)).to.be.false;
            expect(numbersValidator.isNumberEven(5)).to.be.false;
        });

        it("should throw an error when the input is not a number", () => {
            expect(() => numbersValidator.isNumberEven("2")).to.throw(
                Error,
                '[2] is not of type "Number" it is of type "string"'
            );
            expect(() => numbersValidator.isNumberEven(null)).to.throw(
                Error,
                '[null] is not of type "Number" it is of type "object"'
            );
        });
    });

    describe("getEvenNumbersFromArray", () => {
        it("should return an array containing only the even numbers from the input array", () => {
            const numbers = [1, 2, 3, 4, 5, 6];
            expect(numbersValidator.getEvenNumbersFromArray(numbers)).to.deep.equal([2, 4, 6]);
        });

        it("should throw an error when the input is not an array", () => {
            expect(() => numbersValidator.getEvenNumbersFromArray(2)).to.throw(
                Error,
                '[2] is not an array of "Numbers"'
            );
            expect(() => numbersValidator.getEvenNumbersFromArray(null)).to.throw(
                Error,
                '[null] is not an array of "Numbers"'
            );
        });

        it("should throw an error when the array contains non-number elements", () => {
            const numbers = [1, 2, "a", 4];
            expect(() => numbersValidator.getEvenNumbersFromArray(numbers)).to.throw(
                Error,
                '[1,2,a,4] is not an array of "Numbers"'
            );
        });
    });

    describe("isAllNumbers", () => {
        it("should return true when all elements in the array are numbers", () => {
            const numbers = [1, 2, 3, 4, 5];
            expect(numbersValidator.isAllNumbers(numbers)).to.be.true;
        });

        it("should return false when any element in the array is not a number", () => {
            const numbers = [1, 2, "a", 4];
            expect(numbersValidator.isAllNumbers(numbers)).to.be.false;
        });

        it("should throw an error when the input is not an array", () => {
            expect(() => numbersValidator.isAllNumbers(2)).to.throw(
                Error,
                "[2] is not an array"
            );
            expect(() => numbersValidator.isAllNumbers(null)).to.throw(
                Error,
                "[null] is not an array"
            );
        });
    });

    describe("isInteger", () => {
        it("should return true when the input is an integer", () => {
            expect(numbersValidator.isInteger(2)).to.be.true;
            expect(numbersValidator.isInteger(-5)).to.be.true;
        });

        it("should return false when the input is not an integer", () => {
            expect(numbersValidator.isInteger(2.5)).to.be.false;
            expect(numbersValidator.isInteger(Math.PI)).to.be.false;
        });

        it("should throw an error when the input is not a number", () => {
            expect(() => numbersValidator.isInteger("2")).to.throw(
                Error,
                "[2] is not a number"
            );
            expect(() => numbersValidator.isInteger(null)).to.throw(
                Error,
                "[null] is not a number"
            );
        });
    });
});