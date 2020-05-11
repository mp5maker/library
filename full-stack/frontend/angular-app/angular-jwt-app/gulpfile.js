const gulp   = require('gulp')
const sass   = require('gulp-sass')
const concat = require('gulp-concat')

sass.compiler = require('node-sass')

/* My App */
const styleSheetSource = `./src/scss/**/*.scss`
const javascriptSource = `./src/js/**/*.js`
const buildLocation = `./build`

const cssIncludes = [
    styleSheetSource,

    // './node_modules/lodash/lodash.min.js',
    './node_modules/bootstrap/dist/css/boostrap.css',
    './node_modules/angular/angular-csp.css'
]

const jsIncludes = [
    javascriptSource,

    './node_modules/lodash/lodash.min.js',
    './node_modules/bootstrap/dist/js/boostrap.js',
    './node_modules/angular/angular.min.js',
]

gulp.task('default', ['css', 'js'])

gulp.task('css', () => {
    return gulp.src(cssIncludes)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('app.css'))
        .pipe(gulp.dest(`${buildLocation}/css`))
})

gulp.task('js', () => {
    return gulp.src(jsIncludes)
    .pipe(concat('app.js'))
    .pipe(gulp.dest(`${buildLocation}/js`))
})

gulp.task('watch', () => {
    gulp.watch(cssIncludes, ['css'])
    gulp.watch(jsIncludes, ['default'])
})

gulp.task('build', ['css', 'js'])