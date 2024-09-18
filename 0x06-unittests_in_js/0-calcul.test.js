const calculateNumber = require("./0-calcul");
var assert = require('assert');
describe('calculateNumber', function () {
    it('should return 3 when the value a and b are 1.2 and 2.2', function () {
        assert.equal(calculateNumber(1.2, 2.2), 3);
    });

    it('should return 7 when the value a and b are 1.2 and 5.6', function () {
        assert.equal(calculateNumber(1.2, 5.6), 7);
    });
    it('should return 6 when the value a and b are 0 and 5.6', function () {
        assert.equal(calculateNumber(0, 5.6), 6);
    });
});
