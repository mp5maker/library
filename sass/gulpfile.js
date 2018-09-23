const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');

gulp.task('default', ['sass']);

gulp.task('sass', function() {
    gulp.src('main.scss')
    .pipe(concat('main.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(''));
});

gulp.task('watch', ['sass'], function() {
    gulp.watch('main.scss', ['sass']);
})