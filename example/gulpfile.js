'use strict';

const
    gulp = require('gulp'),
    gulpBrowserify = require('../index');

const
    uglifyify = require('uglifyify');


gulp.task('default', () => {

   gulp.src('./src/bt/**/*View.js')
        .pipe(gulpBrowserify({
            debug: false,
            transform: [
                [ uglifyify, { global: true, sourceMap: false } ]
            ]
        }))
        .pipe(gulp.dest('./build/bt'));
});

gulp.task('default', () => {

    gulp.src('./src/bt/**/*View.js')
        .pipe(gulpBrowserify({
            debug: false,
            // 排除
            external: [],
            transform: [
                [ uglifyify, { global: true, sourceMap: false } ]
            ]
        }))
        .pipe(gulp.dest('./build/bt'));
});