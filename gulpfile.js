
var gulp = require('gulp'), //Load gulp first!//
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create();
    eslint = require('gulp-eslint');

gulp.task('lint', function() {
  return gulp.src(['./js/*.js'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
});    


gulp.task('script', gulp.series('lint', function () {
  return gulp.src('./js/*.js')
  .pipe(uglify())
  .pipe(rename({ extname: '.min.js' }))
  .pipe(gulp.dest('./build/js'))
}));

gulp.task('watch', function() {
  gulp.watch('js/*.js', gulp.series('script'));
});

gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: './'
      }
  });

  gulp.watch('./build/js/*.js').on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('watch', 'browser-sync'));

