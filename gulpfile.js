'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('default', function() {
   return gulp.src('./tests/**/*-test.js')
       .pipe(plugins.size())
       .pipe(plugins.mocha({reporter: 'nyan'}))
       .pipe(plugins.exit());
});
