var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    sass = require('gulp-ruby-sass'),
    cache = require('gulp-cache'),
    concat = require('gulp-concat'),
    imgmin = require('gulp-imagemin');

    gulp.task('styles', function() {
      return gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.min.css',
        './node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
      ])
      .pipe(concat('bundle.css'))
      .pipe(gulp.dest('./dist/'));
    });
    gulp.task('scss', function() {
      return sass('./src/styles/*.scss', { style: 'expanded' })
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./dist/'));

      });
    gulp.task('scripts', function() {
      return gulp.src([
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/bootstrap/dist/js/bootstrap.min.css',
        "./node_modules/angular2/bundles/angular2-polyfills.js",
        "./node_modules/rxjs/bundles/Rx.umd.js",
        "./node_modules/angular2/bundles/angular2-all.umd.js",
        "./src/app/incrementerComponent.component.js"
      ])
      .pipe(concat('bundle.js'))
      .pipe(gulp.dest('./dist/'));
    });
  // gulp.task('default', function() {
  //   gulp.start('styles', 'scss', 'scripts');
  // });
