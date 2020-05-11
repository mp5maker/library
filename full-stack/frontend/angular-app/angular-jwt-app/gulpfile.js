const gulp   = require('gulp')
const sass   = require('gulp-sass')
const concat = require('gulp-concat')

sass.compiler = require('node-sass')

/* My App */
const styleSheetSource = `./scss/**/*.scss`
const javascriptSource = `./js/scripts/**/*.js`
const buildLocation = `./build`

const thirdPartyCSS = [
    './node_modules/bootstrap/dist/css/bootstrap.css',
    './node_modules/angular/angular-csp.css',
]

const thirdPartyJS = [
    './node_modules/lodash/lodash.min.js',
    './node_modules/bootstrap/dist/js/boostrap.js',
    './node_modules/angular/angular.min.js',
]

gulp.task('default', [
    'thirdPartyCSS',
    'myAppCSS',
    'thirdPartyJS',
    'myAppStartJS',
    'myAppJS'
])

gulp.task('thirdPartyCSS', () => {
    return gulp.src(thirdPartyCSS)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('third-party-app.css'))
        .pipe(gulp.dest(`${buildLocation}/css`))
})

gulp.task('thirdPartyJS', () => {
    return gulp.src(thirdPartyJS)
    .pipe(concat('third-party-app.js'))
    .pipe(gulp.dest(`${buildLocation}/js`))
})

gulp.task('myAppCSS', () => {
    return gulp.src(styleSheetSource)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('my-app.css'))
        .pipe(gulp.dest(`${buildLocation}/css`))
})

gulp.task('myAppStartJS', () => {
    return gulp.src(`./js/main.js`)
        .pipe(concat('my-app-start.js'))
        .pipe(gulp.dest(`${buildLocation}/js`))
})

gulp.task('myAppJS', () => {
    return gulp.src(javascriptSource)
        .pipe(concat('my-app.js'))
        .pipe(gulp.dest(`${buildLocation}/js`))
})

gulp.task('watch', () => {
    gulp.watch('myAppCSS', ['myAppCSS'])
    gulp.watch('myAppJS', ['myAppJS'])
})

gulp.task('build', [
    'thirdPartyCSS',
    'myAppCSS',
    'thirdPartyJS',
    'myAppStartJS',
    'myAppJS'
])