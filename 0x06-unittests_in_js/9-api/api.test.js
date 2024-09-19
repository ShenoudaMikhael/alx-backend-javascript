const expect = require('chai').expect;
const request = require('request');

describe('API integration test', () => {
    const API_URL = 'http://localhost:7865';

    it('GET / correct response', (done) => {
        request.get(`${API_URL}/`, (_err, res, body) => {
            console.log(_err)
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });
    it('GET /cart/:id valid :id', (done) => {
        request.get(`${API_URL}/cart/47`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Payment methods for cart 47');
            done();
        });
    });

    it('GET /cart/:id negative number values :id', (done) => {
        request.get(`${API_URL}/cart/-47`, (_err, res, _body) => {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('GET /cart/:id non-numeric values in :id', (done) => {
        request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });
});