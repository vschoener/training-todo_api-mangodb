const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

const app = require('./app');

chai.use(chaiHttp);

// Bootstrap test to prepare base test and deployment
describe('App Bootstrap Test', () => {
    it('should boot from nothing right now', () => {
        assert.equal(true, true, 'True works right ? :)');
    });
});

describe('App Server', () => {
    it('should listen on "/"', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('message', 'Welcome to the API');
                done();
            });
    });
});
