# gulp-browserify-multi-entry
gulp plugin as browserify mulitple entry file

## options
see <a href="https://github.com/substack/node-browserify#usage">Browserify options</a>

```javascript

    gulp.src('./src/mobules/**/*.js')
            .pipe(gulpBrowserify({
                debug: false,
                // 排除 see browserify external method
                external: [],
                transform: [
                    [ uglifyify, { global: true, sourceMap: false } ]
                ]
            }))
            .pipe(gulp.dest('./build/bt'));

```