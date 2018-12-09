const grunt = require('grunt');
const sass = require('node-sass');

module.exports = function(grunt) {
    // Configuration
    grunt.initConfig({
        // grunt concat, [concat:js, concat:css]
        concat: {
            js: {
                src: [
                    'node_modules/jquery/dist/jquery.js',
                    'node_modules/popper.js/dist/umd/popper.js',
                    'node_modules/bootstrap/dist/js/bootstrap.js',
                ],
                dest: 'build/app.js'
            },
            css: {
                src: [
                    'node_modules/bootstrap/dist/css/bootstrap.css'
                ],
                dest: 'build/app.css'
            },
        },
        // grunt sass
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'build/main.css' :  'main.scss'
                }
            }
        },
        // grunt uglify
        uglify: {
            build: {
                files: [{
                    src: 'build/app.js',
                    dest: 'build/uglify.js'
                }]
            }
        }
    });
}

// Load plugins
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-contrib-uglify');

// Register tasks
grunt.registerTask('concat-css', ['concat:css']);
grunt.registerTask('concat-js', ['concat:js']);

