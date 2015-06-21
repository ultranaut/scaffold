'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var del = require('del');
var lint = require('gulp-eslint');
var mocha = require('gulp-mocha');
var plumber = require('gulp-plumber');

// necessary for gulp-mocha to work with es6
require('babel/register');

var srcJS = './src/foo.js';

// Tasks
// ---------------------------------------------------------
gulp.task('clean', function () {
  del(['./foo.js']);
});

gulp.task('lint', function () {
  return gulp.src(srcJS)
    .pipe(plumber())
    .pipe(lint())
    .pipe(lint.format())
    .pipe(lint.failOnError());
});

gulp.task('test', function () {
  return gulp.src('test/*.spec.js')
    .pipe(plumber())
    .pipe(mocha());
});

gulp.task('build', ['clean', 'lint', 'test'], function () {
  return gulp.src(srcJS)
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
  gulp.watch(srcJS, ['lint', 'test']);
});

// default task
// -----------------------------------------------
gulp.task('default', ['clean', 'lint', 'test', 'watch']);
