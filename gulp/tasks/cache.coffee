module.exports = (plugins) ->
    return () ->
        plugins.gulp.src './dev/app/config/app.cache.js', read : false
            .pipe plugins.rimraf force : true

        return plugins.gulp.src './dev/app/**/*.html'
            .pipe plugins.ngTemplate
                moduleName : 'mercedes-clube-ui',
                prefix     : './app/',
                filePath   : 'app.cache.js'
            .pipe plugins.gulp.dest './dev/app/config/'
