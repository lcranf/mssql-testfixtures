'use strict';

var mssql = require('mssql'),
    config = require('../config'),
    chai = require('chai'),
    should = chai.should();

chai.use(require('chai-things'));

describe('Executing simple query against mssql using mssql node module', function() {
   it('returns all networks in the system', function(done) {

      var connection = new mssql.Connection(config, function(err) {
          if(err) throw err;

          var request = new mssql.Request(connection);

          request.query('select * from network', function(err, rs) {
            if(err) throw err;

            rs.should.have.length.greaterThan(1)
               .and.should.all.have.property("ID");

            done();

          });
      });
   });
});
