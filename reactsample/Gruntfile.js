/// <binding ProjectOpened='default' />
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            css: {
                files: ['src/*.scss'],
                tasks: ['sass']
            }
        },
        sass: {
            dist: {
                options: {
                    sourceMap: true
                },
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['*.scss'],
                    dest: 'src',
                    ext: '.css'
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass', 'watch']);
};