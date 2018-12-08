const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('default', ['css', 'js']);

const cssLocation = [
    'node_modules/bootstrap/dist/css/bootstrap.css',
    'src/main.scss'
];

const jsLocation = [
    'node_modules/popper.js/dist/umd/popper.js',
    'node_modules/jquery/dist/jquery.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'src/**/*.js'
];

gulp.task('css', () => {
    gulp.src(cssLocation)
    .pipe(concat('main.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'));
});

gulp.task('js', () => {
    gulp.src(jsLocation)
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['css', 'js'], () => {
    gulp.watch(cssLocation, ['css']);
    gulp.watch(jsLocation, ['js']);
});