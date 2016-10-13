var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var jshint = require('gulp-jshint');

gulp.task('default', function(){
    gulpUtil.log('Default task running')
})


gulp.task('copyHtml', function(){
   gulp.src("source/*.html").pipe(gulp.dest("target/"));
})

/*gulp.task('watch', function(){
    gulp.watch('source/js/*.js', function(){
        gulpUtil.log('Detected JS change');
    });
})*/

gulp.task('jshint', function(){
    gulpUtil.log('Dependent task!!');
    return gulp.src('source/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
})

gulp.task('watch', function(){
    gulp.watch('source/js/*.js', ['jshint']);
})


