const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('should return 3 when the value a and b are 1.2 and 2.2', () => {
      assert.equal(calculateNumber('SUM', 1.2, 2.2), 3);
    });

    it('should return 7 when the value a and b are 1.2 and 5.6', () => {
      assert.equal(calculateNumber('SUM', 1.2, 5.6), 7);
    });
    it('should return 6 when the value a and b are 0 and 5.6', () => {
      assert.equal(calculateNumber('SUM', 0, 5.6), 6);
    });
  });
  describe('sUBTRACT', () => {
    it('should return -1 when the value a and b are 1.2 and 2.2', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.2, 2.2), -1);
    });

    it('should return -5 when the value a and b are 1.2 and 5.6', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.2, 5.6), -5);
    });
    it('should return -6 when the value a and b are 0 and 5.6', () => {
      assert.equal(calculateNumber('SUBTRACT', 0, 5.6), -6);
    });
  });
  describe('dIVIDE', () => {
    it('should return 0.5 when the value a and b are 1.2 and 2.2', () => {
      assert.equal(calculateNumber('DIVIDE', 1.2, 2.2), 0.5);
    });

    it('should return Errorwhen the value a and b are 1.2 and 0', () => {
      assert.equal(calculateNumber('DIVIDE', 1.2, 0), 'Error');
    });
    it('should return 0 when the value a and b are 0 and 5.6', () => {
      assert.equal(calculateNumber('DIVIDE', 0, 5.6), 0);
    });
  });
});
