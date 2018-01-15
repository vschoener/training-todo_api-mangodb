const config = require('../config/loader')('test');
const { mongoose }  = require('./../database/connection')(config);
const chai = require('chai');
const should = chai.should();

describe('Database connection', function() {
    it ('should be connected to the database', () => {
        mongoose.connection.readyState.should.be.equal(1);
    });
});
