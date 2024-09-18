const calculateNumber = require("./2-calcul_chai");
const { expect } = require('chai');
describe('calculateNumber', function () {
    describe('SUM', function () {
        it('should return 3 when the value a and b are 1.2 and 2.2', function () {
            expect(calculateNumber("SUM", 1.2, 2.2)).to.equal(3)

        });

        it('should return 7 when the value a and b are 1.2 and 5.6', function () {
            expect(calculateNumber("SUM", 1.2, 5.6)).to.equal(7)

        });
        it('should return 6 when the value a and b are 0 and 5.6', function () {
            expect(calculateNumber("SUM", 0, 5.6)).to.equal(6)

        });
    });
    describe('SUBTRACT', function () {
        it('should return -1 when the value a and b are 1.2 and 2.2', function () {
            expect(calculateNumber("SUBTRACT", 1.2, 2.2)).to.equal(-1)

        });

        it('should return -5 when the value a and b are 1.2 and 5.6', function () {
            expect(calculateNumber("SUBTRACT", 1.2, 5.6)).to.equal(-5)

        });
        it('should return -6 when the value a and b are 0 and 5.6', function () {
            expect(calculateNumber("SUBTRACT", 0, 5.6)).to.equal(-6)

        });
    });
    describe('DIVIDE', function () {
        it('should return 0.5 when the value a and b are 1.2 and 2.2', function () {
            expect(calculateNumber("DIVIDE", 1.2, 2.2)).to.equal(0.5)

        });

        it('should return Errorwhen the value a and b are 1.2 and 0', function () {
            expect(calculateNumber("DIVIDE", 1.2, 0)).to.equal("Error")

        });
        it('should return 0 when the value a and b are 0 and 5.6', function () {
            expect(calculateNumber("DIVIDE", 0, 5.6)).to.equal(0)
        });
    });
});
