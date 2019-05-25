const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
// const shell = require('gulp-shell'); // Required to copy from one location to another
const browserSync = require('browser-sync').create();

gulp.task('default', ['css', 'js', 'html']);

const cssIncludes = [
    './node_modules/bootstrap/dist/css/bootstrap.min.css',
    './src/sass/**/**/*.scss'
]

gulp.task('css', () => {
    gulp.src(cssIncludes)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.bundle.css'))
        .pipe(gulp.dest('./dist'));
});


const jsIncludes = [
    './node_modules/popper.js/dist/umd/popper.min.js',
    './node_modules/jquery//dist/jquery.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.min.js',
    './src/js/**/**/*.js'
]

gulp.task('js', () => {
    gulp.src(jsIncludes)
        .pipe(concat('main.bundle.js'))
        .pipe(gulp.dest('./dist'));
});

const htmlIncludes = [
    './src/html/**/**/*.html',
    './src/images/**/**/*.ico',
]

gulp.task('html', () => {
    gulp.src(htmlIncludes)
        .pipe(gulp.dest('./dist'));
});

// gulp.task('shell', shell.task('./copy-to-htdocs.sh'))
gulp.task('watch', ['css', 'js', 'html'], () => {
    browserSync.init({ server: "./dist" })
    gulp.watch(cssIncludes, ['css']).on('change', () => browserSync.reload());
    gulp.watch(jsIncludes, ['js']).on('change', () => browserSync.reload());
    gulp.watch(htmlIncludes, ['html']).on('change', () => browserSync.reload());
});