module.exports = (plugins) ->
    return () ->
        plugins.gulp.src './dist/index.html'
            .pipe plugins.replace 'http://localhost:3000/', 'https://pcampos-career.umbler.net/projects/mercedes-club/'
            .pipe plugins.gulp.dest './dist/'
