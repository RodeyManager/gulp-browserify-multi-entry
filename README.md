# gulp-browserify-multi-entry
gulp plugin as browserify mulitple entry file

## options
see <a href="https://github.com/substack/node-browserify#usage">Browserify options</a>

```javascript

    const
        gulp = require('gulp'),
        gulpBrowserify = require('gulp-browserify-mulit-entry'),
        vueify = require('vueify'),
        babelify = require('babelify');

    gulp.src('./src/mobules/**/*.js')
            .pipe(gulpBrowserify({
                debug: false,
                // 排除 see browserify external method
                external: [],
                transform: [
                    vueify,
                    [
                        babelify, {
                        presets: [ 'es2015', 'stage-2'],
                        compact: true }
                    ]
                ]
            }))
            .pipe(gulp.dest('./build/bt'));

```