/**
 * Created by Rodey on 2017/8/5.
 */
'use strict';

const
    through2    = require('through2'),
    PluginError = require('gulp-util').PluginError;

const PLUGIN_NAME = 'gulp-browserify-multi-entry';

function gulpBrowserifyMulitEntry(options){

    options = options || {};
    const browserify   = options['browserify'] || require('browserify');

    return through2.obj(function(file, enc, next){

        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Stream content is not supported'));
            return next(null, file);
        }

        if (file.isBuffer()) {

            let bw = browserify(options).add(file.path);
            if(Array.isArray(options.external)){
                bw = bw.external(options.external || []);
            }

            bw.bundle((err, src) => {
                if(!err){
                    file.contents = new Buffer(src);
                    this.push(file);
                    return next();
                }else{
                    this.emit('error', new PluginError(PLUGIN_NAME, err || 'browserify bundle error'));
                }
            });
        }

    });

}

module.exports = gulpBrowserifyMulitEntry;