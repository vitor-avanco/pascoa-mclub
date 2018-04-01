module.exports = (plugins) ->
    return () ->
        plugins.gulp.src [
            './dev/**/*',
            '!./dev/app/**/*',
            '!./dev/app/index.html'
        ]
        .pipe plugins.gulp.dest './dist/'