var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');


var imagemin = require('gulp-imagemin');
gulp.task('sass', function () {

    gulp.src('./static/src/scss/*.scss')

        .pipe(sass())

        .pipe(gulp.dest('./static/css'));


});
gulp.task('js', function () {

gulp.src('./static/src/js/*.js')

.pipe(jshint())

.pipe(jshint.reporter('fail'))

.pipe(concat('theme.js'))

.pipe(gulp.dest('./static/js'));

});
gulp.task('img', function() {

  gulp.src('./static/src/img/*.{png,jpg,gif}')

    .pipe(imagemin({

      optimizationLevel: 7,

      progressive: true

    }))
    .pipe(gulp.dest('./static/img'));

});
gulp.task('watch', function() {

  gulp.watch('./static/src/scss/*.scss', ['sass']);

  gulp.watch('./static/src/js/*.js', ['js']);

  gulp.watch('./static/src/img/*.{png,jpg,gif}', ['img']);

});


gulp.task('default', ['sass', 'js', 'img', 'watch']);
// gulp.task('default', function(){
//
//     console.log('default gulp task...')
//
// });
