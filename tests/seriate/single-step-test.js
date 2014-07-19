'use strict';

var seriate = require('seriate'),
    config = require('../config'),
    chai = require('chai'),
    should = chai.should();

chai.use(require('chai-things'));

describe('Executing simple query against mssql using seriate node module', function() {
   it('returns all networks in the system', function(done) {
      seriate.getPlainContext(config)
        .step('networks', {
          query: 'select * from network'
        })
        .end(function(ctx) {

            ctx.networks.should.have.length.greaterThan(1);
            ctx.networks.should.all.have.property('ID')
               .and.all.have.property('Name');
            done();
        })
        .error(function(err) {
            throw err;
        });
   });
});
