const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');

gulp.task('default', ['css', 'js', 'html']);


var js = [
    "./node_modules/jquery/dist/jquery.js",
    "./node_modules/popper.js/dist/umd/popper.js",
    "./node_modules/bootstrap/dist/js/bootstrap.js",
    "./node_modules/lodash/lodash.js",
    "./node_modules/angular/angular.js",
    "./node_modules/angular-animate/angular-animate.js",
    "./node_modules/angularjs-dropdown-multiselect/dist/angularjs-dropdown-multiselect.min.js",
    "main.js",
];

gulp.task('js', function(){
    gulp.src(js)
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist'));
});

var css = [
    "./node_modules/bootstrap/scss/bootstrap.scss",
];

gulp.task('css', function(){
    gulp.src(css)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'));
});

gulp.task('html', function(){
    gulp.src('index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['css', 'js', 'html'], function(){
    gulp.watch(css, ['css']);
    gulp.watch(js, ['js']);
    gulp.watch('index.html', ['html']);
});