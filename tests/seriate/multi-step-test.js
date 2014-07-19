'use strict';

var seriate = require('seriate'),
    config = require('../config'),
    chai = require('chai'),
    should = chai.should();

chai.use(require('chai-things'));

describe('Executing multi-step query against mssql using seriate node module', function() {
   it('returns all networks, jobtypes and jobstatuses in the system', function(done) {
      seriate.getPlainContext(config)
        .step('networks', {
          query: 'select * from network'
        })
        .step('jobtypes', {
          query: 'select * from jobtype'
        })
        .step('jobstatus', {
          query: 'select * from jobstatus'
        })
        .end(function(ctx) {

            //assert network step
            should.exist(ctx.networks);
            ctx.networks.should.have.length.greaterThan(1)
               .and.should.all.have.property('ID')
               .and.all.have.property('Name');

            //assert jobtypes step
            should.exist(ctx.jobtypes);
            ctx.jobtypes.should.have.length.greaterThan(1)
               .and.should.all.have.property('Code')
               .and.should.all.have.property('Name');

            should.exist(ctx.jobstatus);
            ctx.jobstatus.should.have.length.greaterThan(1)
               .and.should.all.have.property('Code')
               .and.all.have.property('Name');

            done();
        })
        .error(function(err) {
            throw err;
        });
   });
});
