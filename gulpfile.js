
var gulp = require('gulp'), //Load gulp first!//
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create();

gulp.task('script', function(){
  return gulp.src('./js/*.js')
  .pipe(uglify())
  .pipe(rename({ extname: '.min.js' }))
  .pipe(gulp.dest('./build/js'))
});

gulp.task('watch', function() {
  gulp.watch('js/*.js', gulp.series('script'));
});

gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: './'
      }
  });

  gulp.watch('build/js/*.js').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('watch', 'browser-sync'));

