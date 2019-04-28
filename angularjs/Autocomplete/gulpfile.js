const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const minifycss = require('gulp-minify-css');
const babel = require('gulp-babel');
const minifyjs = require('gulp-minify');
const debug = require('gulp-debug');
const ngAnnotate = require('gulp-ng-annotate');
const browserSync = require('browser-sync').create();

const errorHandler = function (error) {
    notify.onError({
        title: "Gulp error in " + error.plugin,
        message: error.toString()
    })(error);
    this.emit('end');
};

/* Default */
gulp.task('default', ['javascript', 'css', 'html'])

/* Build */
gulp.task('build', ['javascript', 'css', 'html'])

/* Javascript */
const javascriptIncludes = [
    './node_modules/jquery/dist/jquery.slim.js',
    './node_modules/angular/angular.min.js',
    './node_modules/ui-select/dist/select.min.js',
    './node_modules/angular-sanitize/angular-sanitize.js'
];
gulp.task('javascript', () => {
    gulp.src([...javascriptIncludes, './src/**/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(plumber({errorHandler}))
        .pipe(concat('main.min.js'))
        .pipe(ngAnnotate())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(minifyjs())
        .pipe(sourcemaps.write())
        .pipe(debug({ title: 'Javascript Debug:' }))
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream())
})

/* Css */
const cssIncludes = [
    './node_modules/angular/angular-csp.css',
    './node_modules/bootstrap/dist/css/bootstrap.min.css',
    './node_modules/ui-select/dist/select.min.css'
];
gulp.task('css', () => {
    gulp.src([...cssIncludes, './src/**/**/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(plumber({errorHandler}))
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.min.css'))
        .pipe(minifycss())
        .pipe(sourcemaps.write())
        .pipe(debug({ title: 'CSS Debug:' }))
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream())
})

/* Html */
const htmlIncludes = [
    './src/**/**/*.html',
    './src/**/**/*.json',
    './src/favicon.ico'
]
gulp.task('html', () => {
    gulp.src([...htmlIncludes])
        .pipe(plumber({ errorHandler }))
        .pipe(debug({ title: 'Html Debug:' }))
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream())
})

/* Watch */
gulp.task('watch', ['javascript', 'css', 'html'], () => {
    browserSync.init({
        server: "./dist",
    })
    gulp.watch('./src/**/**/*.scss', ['css']);
    gulp.watch('./src/**/**/*.js', ['javascript']).on('change', () => browserSync.reload())
    gulp.watch('./src/**/**/*.html', ['html']).on('change', () => browserSync.reload())
})