// Generated on 2014-03-26 using generator-angular 0.7.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: {
            // configurable paths
            app: require('./bower.json').appPath || 'app',
            dist: 'dist'
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: ['<%= yeoman.app %>/*.js',
                        '<%= yeoman.app %>/components/**/*.js',
                        '<%= yeoman.app %>/mainpage/**/*.js',
                        '<%= yeoman.app %>/viewer/**/*.js'],
                tasks: ['karma:continuous',
                        'newer:jshint:all'],
                options: {
                    livereload: true
                }
            },
            compass: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: ['<%= yeoman.dist %>/{,*/}*.html',
                    '<%= yeoman.dist %>/components/**/*.html',
                    '<%= yeoman.dist %>/mainpage/**/*.html',
                    '<%= yeoman.dist %>/viewer/**/*.html',
                    '.tmp/styles/{,*/}*.css',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}']
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    base: ['.tmp',
                           '<%= yeoman.app %>']
                }
            },
            test: {
                options: {
                    port: 9001,
                    base: ['.tmp',
                           'test',
                           '<%= yeoman.app %>']
                }
            },
            dist: {
                options: {
                    base: '<%= yeoman.dist %>'
                }
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: ['Gruntfile.js',
                  '<%= yeoman.app %>/*.js',
                  '<%= yeoman.app %>/components/**/*.js',
                  '<%= yeoman.app %>/mainpage/**/*.js',
                  '<%= yeoman.app %>/viewer/**/*.js'],
            test: {
                options: {
                    jshintrc: 'test/.jshintrc'
                },
                src: ['<%= yeoman.app %>/*.js',
                      '<%= yeoman.app %>/components/**/*.js',
                      '<%= yeoman.app %>/mainpage/**/*.js',
                      '<%= yeoman.app %>/viewer/**/*.js']
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: ['.tmp',
                          '<%= yeoman.dist %>/*',
                          '!<%= yeoman.dist %>/.git*']
                }]
            },
            server: '.tmp'
        },


        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        // Automatically inject Bower components into the app
        'bower-install': {
            app: {
                html: '<%= yeoman.app %>/index.html',
                ignorePath: '<%= yeoman.app %>/'
            }
        },


        // Compiles Sass to CSS and generates necessary files if requested
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>/styles',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: '<%= yeoman.app %>/images',
                javascriptsDir: '<%= yeoman.app %>/scripts',
                fontsDir: '<%= yeoman.app %>/styles/fonts',
                importPath: '<%= yeoman.app %>/bower_components',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/styles/fonts',
                relativeAssets: false,
                assetCacheBuster: false,
                raw: 'Sass::Script::Number.precision = 10\n'
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= yeoman.dist %>/images/generated'
                }
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },

        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: ['<%= yeoman.dist %>/*.js',
                          '<%= yeoman.dist %>/components/**/*.js',
                          '<%= yeoman.dist %>/mainpage/**/*.js',
                          '<%= yeoman.dist %>/viewer/**/*.js',
                          '<%= yeoman.dist %>/styles/{,*/}*.css',
                          '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                          '<%= yeoman.dist %>/styles/fonts/*']
                }
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            options: {
                dest: '<%= yeoman.dist %>'
            }
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                assetsDirs: ['<%= yeoman.dist %>']
            }
        },

        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>',
                    src: ['*.html',
                          'components/**/*.html',
                          'mainpage/**/*.html',
                          'viewer/**/*.html'],
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },

        // Allow the use of non-minsafe AngularJS files. Automatically makes it
        // minsafe compatible so Uglify does not destroy the ng references
        ngmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>/scripts',
                    src: 'scripts.concat.js',
                    dest: '<%= yeoman.dist %>/scripts/ngmin'
                }]
            }
        },

        // Replace Google CDN references
        cdnify: {
            dist: {
                html: ['<%= yeoman.dist %>/*.html']
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: ['*.{ico,png,txt}',
                          '.htaccess',
                          '*.html',
                          'components/**/*.html',
                          'mainpage/**/*.html',
                          'viewer/**/*.html',
                          'bower_components/**/*',
                          'images/{,*/}*.{webp}',
                          'fonts/*']
                }, {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= yeoman.dist %>/images',
                    src: ['generated/*']
                }]
            },
            styles: {
                expand: true,
                cwd: '<%= yeoman.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: ['compass:server'],
            test: ['compass'],
            dist: ['compass:dist',
                   'imagemin',
                   'svgmin']
        },

        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        cssmin: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/styles/main.css': ['.tmp/styles/{,*/}*.css',
                                                           '<%= yeoman.app %>/styles/{,*/}*.css']
                }
            }
        },

        // Closure compiler task
        'closure-compiler': {
            frontend: {
                closurePath: '/home/n/nicolas.rannou/gitroot/closure-compiler',
                js: '<%= yeoman.dist %>/scripts/ngmin/scripts.concat.js',
                jsOutputFile: '<%= yeoman.dist %>/scripts/scripts.min.js',
                maxBuffer: 500,
                options: {
                    compilation_level: 'ADVANCED_OPTIMIZATIONS',
                    language_in: 'ECMASCRIPT5_STRICT',
                    externs: ['/home/n/nicolas.rannou/gitroot/closure-compiler/contrib/externs/angular-1.2.js',
                              '<%= yeoman.app %>/externs.dropbox',
                              '<%= yeoman.app %>/externs.google'],
                    warning_level:'VERBOSE'
                }
            }
        },

        // JSDOC
        jsdoc : {
            dist : {
                src: ['<%= yeoman.app %>/*.js',
                      '<%= yeoman.app %>/components/**/*.js',
                      '<%= yeoman.app %>/mainpage/**/*.js',
                      '<%= yeoman.app %>/viewer/**/*.js',],
                options: {
                    destination: '<%= yeoman.dist %>/doc'
                }
            }
        },

        // CONCATENATION
        concat: {
            dist: {
                options: {
                    banner: '\'use strict\';\n',
                    process: function(src, filepath) {
                        return '// Source: ' + filepath + '\n' +
                        src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
                    },
                },
                files: {
                    '<%= yeoman.dist %>/scripts/scripts.concat.js': ['<%= yeoman.app %>/components/picker/pickerBase/pickerBase.js',
                                                                     '<%= yeoman.app %>/components/picker/pickerDropbox/pickerDropbox.js',
                                                                     '<%= yeoman.app %>/components/picker/pickerGoogledrive/pickerGoogledrive.js',
                                                                     '<%= yeoman.app %>/components/picker/pickerUrl/pickerUrl.js',
                                                                     '<%= yeoman.app %>/components/picker/picker.js',
                                                                     '<%= yeoman.app %>/components/indexer/patient/patient.js',
                                                                     '<%= yeoman.app %>/components/indexer/study/study.js',
                                                                     '<%= yeoman.app %>/components/indexer/indexer.js',
                                                                     '<%= yeoman.app %>/components/**/!(*_test).js',
                                                                     '<%= yeoman.app %>/mainpage/mainpage.js',
                                                                     '<%= yeoman.app %>/mainpage/**/!(*_test).js',
                                                                     '<%= yeoman.app %>/viewer/viewer.js',
                                                                     '<%= yeoman.app %>/viewer/**/!(*_test).js',
                                                                     '<%= yeoman.app %>/*.js']
                }
            },
            extern:{
                files: {
                    '<%= yeoman.dist %>/scripts/vendor.js': ['<%= yeoman.app %>/bower_components/angular/angular.min.js',
                                                             '<%= yeoman.app %>/bower_components/angular-cookies/angular-cookies.min.js',
                                                             '<%= yeoman.app %>/bower_components/angular-mocks/angular-mocks.min.js',
                                                             '<%= yeoman.app %>/bower_components/angular-resource/angular-resource.min.js',
                                                             '<%= yeoman.app %>/bower_components/angular-route/angular-route.min.js',
                                                             '<%= yeoman.app %>/bower_components/angular-sanitize/angular-sanitize.min.js',
                                                             '<%= yeoman.app %>/bower_components/angular-scenario/angular-scenario.min.js',
                                                             '<%= yeoman.app %>/bower_components/es5-shim/es5-shim.min.js',
                                                             '<%= yeoman.app %>/bower_components/jquery/jquery.min.js',
                                                             '<%= yeoman.app %>/bower_components/json3/lib/json3.min.js',
                                                             '<%= yeoman.app %>/bower_components/sass-bootstrap/dist/bootstrap.min.js'],
                }
            }
        },

        // Test settings
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            },
            //continuous integration mode: run tests once in PhantomJS browser.
            continuous: {
                configFile: 'karma.conf.js',
                singleRun: true,
                browsers: ['PhantomJS']
            },
        }
    });


    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run(['clean:server',
                        'bower-install',
                        'concurrent:server',
                        'autoprefixer',
                        'connect:livereload',
                        'watch']);
    });

    grunt.registerTask('server', function () {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve']);
    });

    grunt.registerTask('test', ['clean:server',
                                'concurrent:test',
                                'autoprefixer',
                                'connect:test',
                                'karma:continuous']);

    grunt.registerTask('build', ['clean:dist',
                                 'bower-install',
                                 'useminPrepare',
                                 'concurrent:dist',
                                 'autoprefixer',
                                 'concat:dist',
                                 'concat:extern',
                                 'ngmin',
                                 'copy:dist',
                                 'cdnify',
                                 'cssmin',
                                 'closure-compiler',
                                 'rev',
                                 'usemin',
                                 'htmlmin',
                                 'jsdoc']);

    grunt.registerTask('default', ['newer:jshint',
                                   'test',
                                   'build']);
};
