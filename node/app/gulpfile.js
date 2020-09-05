const { src, dest } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const rename = require('gulp-rename');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const csso = require('gulp-csso');


exports.withBabel = function() {
  return src('src/js/*.js')
    .pipe(babel())
    .pipe(dest('output/'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('output/'));
}


exports.withBrowserify = function() {
  return browserify('src/js/main.js')
    .bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('output/'));
}


exports.withCsso = function() {
  return src('src/css/*.css')
    .pipe(csso())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('output/'));
}
