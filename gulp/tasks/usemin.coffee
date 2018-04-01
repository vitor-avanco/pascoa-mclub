module.exports = (plugins) ->
    return () ->
        return plugins.gulp.src './dev/index.html'
            .pipe plugins.usemin
                css : [
                    plugins.cssnano(
                        discardComments : 
                            removeAll : true
                    ),
                    plugins.rev()
                ],
                js   : [ plugins.uglify(), plugins.rev() ],
                html : [
                    plugins.htmlmin
                        minifyJS           : true,
                        removeComments     : true,
                        collapseWhitespace : true
                ]
            .pipe plugins.gulp.dest './dist/'