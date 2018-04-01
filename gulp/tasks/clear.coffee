module.exports = (plugins) ->
    return () ->
        return plugins.gulp.src './dist', read : false 
            .pipe plugins.rimraf force : true