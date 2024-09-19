const expect = require('chai').expect;
const request = require('request');

describe('API integration test', () => {
    const API_URL = 'http://localhost:7865';

    it('GET / returns correct response', (done) => {
        request.get(`${API_URL}/`, (_err, res, body) => {
            console.log(_err)
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });
});