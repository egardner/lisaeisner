module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                        'js/jquery.js',     // must import jQuery first
                        'js/libs/*.js',     // all JS in the libs folder
                        'js/global.js'
                ],
                dest: 'js/build/production.js', 
            }
        },

        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images'
                }]
            }
        },

        watch: {
            options: {
                livereload: true,
            },

            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
            },

            css: {
                files: ['css/**/*.scss', 'css/global.scss'],
                tasks: ['sass', 'jekyll:dist'],
            },

            html: {
                files: ['**/*.html', '!_site/**/*.html'],
                tasks: ['jekyll:dist']
            }
        },

        connect: {
            client: {
                options: {
                    port: 9000,
                    livereload: true,
                    base: '_site/',
                }
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/build/global.css': 'css/global.scss'
                }
            }
        },

        jekyll: {                             // Task
            options: {                          // Universal options
                //bundleExec: true,
                src : '.'
            },
            dist: {                             // Target
                options: {                        // Target options
                    dest: '_site',
                    config: '_config.yml,'
                }
            },
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-jekyll');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['sass', 'concat', 'uglify', 'imagemin', 'jekyll']);
    grunt.registerTask('preview', ['connect', 'concat', 'uglify', 'sass', 'jekyll:dist', 'watch']);

};