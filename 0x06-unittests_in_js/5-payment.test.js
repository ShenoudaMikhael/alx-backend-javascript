const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let sinonQ;

  beforeEach(() => {
    if (!sinonQ) {
      sinonQ = sinon.spy(console);
    }
  });

  afterEach(() => {
    sinonQ.log.resetHistory();
  });

  it('logs "The total is: 120" to the console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(sinonQ.log.calledWith('The total is: 120')).to.be.true;
    expect(sinonQ.log.calledOnce).to.be.true;
  });

  it('logs "The total is: 20" to the console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(sinonQ.log.calledWith('The total is: 20')).to.be.true;
    expect(sinonQ.log.calledOnce).to.be.true;
  });
});