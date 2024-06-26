module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            development: {
                files: {
                    'main.css': 'main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'main.css': 'main.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                'dist/js/scripts.min.js': ['assets/js/*.js']
                }
            }
        }

    })



grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-uglify');

grunt.registerTask('default', ['less', 'uglify']);

}