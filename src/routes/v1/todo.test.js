//
// On this exercise project, I tend to try many tools
// To be familiarised with them
//

// Let's use supertest instead of chai-http
const request = require('supertest');

const app = require('../../app');
const chai = require('chai');
// On this test, work on expect to try it out a little
const expect = chai.expect;

describe('GET /v1/todos', () => {
    it('should return empty Todos', (done) => {
        request(app)
            .get('/v1/todos')
            .expect(200)
            .end((err, res) => {
                expect(res.body.Todos).to.be.an('array');
                done();
            });
    });
});
