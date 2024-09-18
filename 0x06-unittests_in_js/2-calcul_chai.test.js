const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('should return 3 when the value a and b are 1.2 and 2.2', () => {
      expect(calculateNumber('SUM', 1.2, 2.2)).to.equal(3);
    });

    it('should return 7 when the value a and b are 1.2 and 5.6', () => {
      expect(calculateNumber('SUM', 1.2, 5.6)).to.equal(7);
    });
    it('should return 6 when the value a and b are 0 and 5.6', () => {
      expect(calculateNumber('SUM', 0, 5.6)).to.equal(6);
    });
  });
  describe('sUBTRACT', () => {
    it('should return -1 when the value a and b are 1.2 and 2.2', () => {
      expect(calculateNumber('SUBTRACT', 1.2, 2.2)).to.equal(-1);
    });

    it('should return -5 when the value a and b are 1.2 and 5.6', () => {
      expect(calculateNumber('SUBTRACT', 1.2, 5.6)).to.equal(-5);
    });
    it('should return -6 when the value a and b are 0 and 5.6', () => {
      expect(calculateNumber('SUBTRACT', 0, 5.6)).to.equal(-6);
    });
  });
  describe('dIVIDE', () => {
    it('should return 0.5 when the value a and b are 1.2 and 2.2', () => {
      expect(calculateNumber('DIVIDE', 1.2, 2.2)).to.equal(0.5);
    });

    it('should return Errorwhen the value a and b are 1.2 and 0', () => {
      expect(calculateNumber('DIVIDE', 1.2, 0)).to.equal('Error');
    });
    it('should return 0 when the value a and b are 0 and 5.6', () => {
      expect(calculateNumber('DIVIDE', 0, 5.6)).to.equal(0);
    });
  });
});
