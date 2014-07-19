'use strict';

var should = require('chai').should();
var testFixture = {
   value: 'Hello World'
};

describe('Sample Test for mocha', function() {
  it('test equality using should', function(done) {

     testFixture.should.have.property('value').equal('Hello World');

     done();
  });
});
