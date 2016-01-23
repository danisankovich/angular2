var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    sass = require('gulp-ruby-sass'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    cache = require('gulp-cache'),
    concat = require('gulp-concat'),
    del = require('del');

    gulp.task('styles', function() {
      return gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.min.css',
        './node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
      ])
      .pipe(concat('bundle.css'))
      .pipe(gulp.dest('./dist/'));
    });
    gulp.task('scripts', function() {
      return gulp.src([
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/bootstrap/dist/js/bootstrap.min.css',
        "./node_modules/angular2/bundles/angular2-polyfills.js",
        "./node_modules/rxjs/bundles/Rx.umd.js",
        "./node_modules/angular2/bundles/angular2-all.umd.js"
      ])
      .pipe(concat('bundle.js'))
      .pipe(gulp.dest('./dist/'));
    });
    gulp.task('scss', function() {
      return sass('styles/*.scss', { style: 'expanded' })
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./dist/'));

      });
// gulp.task('default', function() {
//     gulp.start('styles', 'watch');
// });

// gulp.task('clean', function(cb) {
//     del(['public/stylesheets/css/css'], cb);
// });
//
// gulp.task('reload', function(){
//   browser.reload();
// });
//
// gulp.task('watch', function () {
//     return watch('public/stylesheets/style.scss', function() {
//           gulp.start('styles', 'reload');
//         });
// });
