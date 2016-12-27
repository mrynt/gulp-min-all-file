var gulp = require('gulp');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');

gulp.task('css', function () {
  return gulp.src([
      'css/**/*.css',
      '!css/**/*.min.css',
     ])
    .pipe(cssnano())
    .pipe(rename(function(path) {
      path.extname = ".min.css";
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('js', function () {
  return gulp.src([
      //'js/**/*.js',
      //'!js/**/*.min.js',
	  '*.js',
	  '!*.min.js',
     ])
    .pipe(uglify())
    .pipe(rename(function(path) {
      path.extname = ".min.js";
    }))
    .pipe(gulp.dest(''));
});

gulp.task('default', ['css', 'js']);