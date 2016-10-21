const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const soucemap = require('gulp-sourcemaps');

const paths = {
  jsSource: ['./app/app.js', './app/**/*.js'],
  scssSource: ['./scss/**/*.scss']
}

gulp.task('js-bundle', () => {
  gulp.src(paths.jsSource)
  .pipe(soucemap.init())
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('all.js'))
  .pipe(soucemap.write('./'))
  .pipe(gulp.dest('./dist'))
});

gulp.task('scss-bundle', () => {
  gulp.src(paths.scssSource)
  .pipe(sass())
  .pipe(concat('styles.css'))
  .pipe(gulp.dest('./dist'))
});

gulp.task('watch', () => {
  gulp.watch(paths.jsSource, ['js-bundle'])
  gulp.watch(paths.scssSource, ['scss-bundle'])
});


gulp.task('default', ['watch', 'js-bundle', 'scss-bundle'])
