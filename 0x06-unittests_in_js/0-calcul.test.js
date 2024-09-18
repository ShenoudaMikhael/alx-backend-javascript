const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 3 when the value a and b are 1.2 and 2.2', () => {
    assert.equal(calculateNumber(1.2, 2.2), 3);
  });

  it('should return 7 when the value a and b are 1.2 and 5.6', () => {
    assert.equal(calculateNumber(1.2, 5.6), 7);
  });
  it('should return 6 when the value a and b are 0 and 5.6', () => {
    assert.equal(calculateNumber(0, 5.6), 6);
  });
});
