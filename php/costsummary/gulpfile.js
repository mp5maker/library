const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const shell = require('gulp-shell');
const browserSync = require('browser-sync').create();

gulp.task('default', ['css', 'js', 'html']);

const cssIncludes = [
    './node_modules/bootstrap/dist/css/bootstrap.min.css',
    './node_modules/font-awesome/css/font-awesome.min.css',
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
    './src/html/**/**/*.html'
]

gulp.task('html', () => {
    gulp.src(htmlIncludes)
        .pipe(gulp.dest('./dist'));
});

gulp.task('shell', shell.task('./copy-to-htdocs.sh'))

gulp.task('watch', ['css', 'js', 'html', 'shell'], () => {
    browserSync.init({ server: "./dist" })
    gulp.watch(cssIncludes, ['css', 'shell']).on('change', () => browserSync.reload());
    gulp.watch(jsIncludes, ['js', 'shell']).on('change', () => browserSync.reload());
    gulp.watch(htmlIncludes, ['html', 'shell']).on('change', () => browserSync.reload());
});