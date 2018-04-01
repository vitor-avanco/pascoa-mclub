# Loads dependency plugins
plugins = require('gulp-load-plugins')
    pattern : ['*'],
    scope   : ['devDependencies']

# Starts the serve
sync = plugins.browserSync.create();

# Imports the builder tasks
getTask = (task) -> require('./tasks/' + task)(plugins, sync);

plugins.gulp.task 'cache',   getTask 'cache'
plugins.gulp.task 'compass', getTask 'compass'
plugins.gulp.task 'clear',   getTask 'clear'
plugins.gulp.task 'copy',    getTask 'copy'
plugins.gulp.task 'usemin',  getTask 'usemin'
plugins.gulp.task 'deploy',  getTask 'deploy'

# Sets the register tasks
plugins.gulp.task 'default', () ->
    console.log '==============================='
    console.log '|                             |'
    console.log '|    Use commands:            |'
    console.log '|      $ gulp compile:dev     |'
    console.log '|      $ gulp compile:dist    |'
    console.log '|      $ gulp serve:dev       |'
    console.log '|      $ gulp serve:dist      |'
    console.log '|                             |'
    console.log '==============================='

plugins.gulp.task 'compile:dev',                      (done) -> plugins.runSequence 'cache', 'compass', done
plugins.gulp.task 'compile:dist', [ 'compile:dev' ],  (done) -> plugins.runSequence 'clean', 'copy', 'usemin', done
plugins.gulp.task 'serve:dev',    [ 'compile:dev' ],  (done) ->
    sync.init
        server :
            baseDir : './dev/',
            routes  : 
                '/node_modules' : 'node_modules'
    , done

    plugins.gulp.watch './dev/app/**/*.html', [ 'cache'   ]
    plugins.gulp.watch './dev/app/**/*.scss', [ 'compass' ]
    plugins.gulp.watch [
        './dev/**/*',
        '!./dev/app/**/*.{scss,css,map}'
    ]
    .on 'change', sync.reload

plugins.gulp.task 'serve:dist',   [ 'compile:dist' ], (done) -> registers.serveDist

plugins.gulp.task 'compile:dist', [ 'compile:dev'  ], (done) -> plugins.runSequence 'clear', 'copy', 'usemin', done
plugins.gulp.task 'serve:dev',    [ 'compile:dev'  ], (done) -> 
    sync.init
        server :
            baseDir : './dev/',
            routes  : 
                '/node_modules' : 'node_modules'
    , done
    
    plugins.gulp.watch './dev/app/**/*.html', [ 'cache'   ]
    plugins.gulp.watch './dev/app/**/*.scss', [ 'compass' ]
    plugins.gulp.watch [
        './dev/**/*',
        '!./dev/app/**/*.{scss,css,map}'
    ]
    .on 'change', sync.reload
    

plugins.gulp.task 'serve:dist', [ 'compile:dist' ], (done) ->
    sync.init server : './dist', done