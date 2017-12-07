module.exports = {
    'path': {
        'dev': {
            'html': 'dev/',
            'css': 'dev/styles/',
            'images': 'dev/images/',
            'fonts': 'dev/fonts/',
            'js': 'dev/js/'
        },
        'app': {
            'html': 'app/**/*.html',
            'stylus': ['app/stylus/*.styl', 'app/lib/css/bootstrap.min.css'],
            'images': 'app/images/**/*.*',
            'fonts': 'app/fonts/**/*.*',
            'scripts': ['app/js/**/*.js', 'bower_components/jQuery/dist/jquery.min.js']
        },
        'watch': {
            'html': 'app/**/*.html',
            'stylus': 'app/stylus/**/*.styl',
            'images': 'app/images/**/*.*',
            'fonts': 'app/fonts/**/*.*',
            'scripts': 'app/js/**/*.js'
        },
        'clean': './dev',
    },
    'serverConfig': {
        'server': {
            'baseDir': "./dev"
        },
        'tunnel': true,
        'host': 'localhost',
        'port': 9000
    }
}
