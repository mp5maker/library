const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');


gulp.task('default', ['css', 'copy'])

const copyIncludes = [
    "./src/js/**/**/*.js",
    "./src/json/manifest.json",
    "./src/html/**/**/*.html",
    "./src/images/**/**/*"
];

gulp.task('copy', () => {
    gulp.src(copyIncludes)
    .pipe(gulp.dest('./dist/'))
})

const cssIncludes = [
    "./src/sass/**/**/*.scss",
]
gulp.task('css', () => {
    gulp.src(cssIncludes)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.bundle.css'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', ['copy', 'css'], () => {
    gulp.watch(copyIncludes, ['copy']);
    gulp.watch(cssIncludes, ['css']);
})