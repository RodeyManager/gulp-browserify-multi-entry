'use strict';

const
    gulp = require('gulp'),
    gulpBrowserify = require('../index');

const
    babelify = require('babelify');


gulp.task('default', () => {

   gulp.src('./src/bt/**/*View.js')
        .pipe(gulpBrowserify({
            debug: false,
            transform: [
                [ babelify, { presets: [ 'es2015', 'es2016', 'stage-2'], compact: true } ]
            ]
        }))
        .pipe(gulp.dest('./build/bt'));
});