'use strict';

var mssql = require('mssql'),
    config = require('../config'),
    chai = require('chai'),
    should = chai.should();

chai.use(require('chai-things'));

describe('Executing stream query against mssql using mssql node module', function() {
   it('streams all networks in the system', function(done) {

      var connection = new mssql.Connection(config, function(err) {
          if(err) throw err;

          var request = new mssql.Request(connection);
          request.stream = true;

          request.query('select * from network');

          request.on('row', function(row) {

              row.should.have.property('ID');
              row.should.have.property('Name');
          });

          request.on('error', function(err) {
              throw err;
          });

          request.on('done', function() {
              done();
          });
      });
   });
});
