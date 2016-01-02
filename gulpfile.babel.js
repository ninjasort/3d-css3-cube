import gulp from 'gulp';
import sass from 'gulp-sass';
import browserSync from 'browser-sync';
import concat from 'gulp-concat';
import autoprefixer from 'gulp-autoprefixer';

gulp.task('watch', ['dist'], () => {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
  gulp.watch([
      'src/**/*.{js,css,html}',
    ], ['dist'])
  .on('change', browserSync.reload);
})

gulp.task('dist', () => {
  // html
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));

  // css
  gulp.src('src/scss/classic.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'));

  // js
  gulp.src('src/js/*.js')
    .pipe(concat('classic.js'))
    .pipe(gulp.dest('dist/js'));

  // assets
  gulp.src('src/assets/**')
    .pipe(gulp.dest('dist/assets'));
});