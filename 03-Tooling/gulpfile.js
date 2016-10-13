var gulp = require('gulp');
var react = require('gulp-react')
var concat = require('gulp-concat')

gulp.task('default', function(){
    gulp.src('src/*.jsx')
    .pipe(react())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./'))
})
/*
gulp.src('src/*.jsx')
    .pipe(react())
    .pipe(concat('application.js'))
    .pipe(gulp.dest('./'))*/