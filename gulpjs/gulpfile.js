const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

/*
    -- TOP LEVEL FUNCTIONS --
    gulp.task :: Define Tasks
    gulp.src :: Point to files to use
    gulp.dest :: Point to folders to output 
    gulp.watch :: Watch files and folders for changes
*/

//Show Messages  -- gulp message
gulp.task('message', function(){
    return console.log('Gulp is running ....');
});


//By Default show message -- gulp
gulp.task('default', function(){
    return console.log('Gulp is running ...');
});


//Copy all html files -- gulp copyHtml
gulp.task('copyHtml', function(){
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

//Optimizes Images
gulp.task('imageMin', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
    );
    
//Compile Sass
gulp.task('sass', function(){
    gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

//Minify JS
// gulp.task('minify', function(){
//     gulp.src('src/js/*')
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'));
// });


// gulp.task('default', ['sass', 'imageMin', 'copyHtml', 'minify', 'message']);

//Combine the script files
gulp.task('scripts', function(){
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

//Run all the tasks in an array
gulp.task('default', ['sass', 'imageMin', 'copyHtml', 'scripts', 'message']);

//Watch all the files
gulp.task('watch', function(){
    // gulp.watch('src/js/*.js', ['scripts']);
    // gulp.watch('src/images/*', ['imageMin']);
    // gulp.watch('src/sass/*.scss', ['sass']);
    // gulp.watch('src/*.html', ['copyHtml']);
});