// Generated on 2014-05-16 using generator-angular 0.8.0
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

    /**
     * Set project object
     */
    paths: {
      app: '<%= yeoman.app %>',
      dist: '<%= yeoman.dist %>',
      temp: './.tmp',
      test: './test',
      // All the source files/folders
      in: {
        sass: '<%= paths.app %>/styles/main.scss',
        sassdir: '<%= paths.app %>/styles/',
        html: '<%= paths.app %>/*.php',
        htmldir: '<%= paths.app %>/html/',
        js: '<%= paths.app %>/scripts/**/*.js',
        jsdir: '<%= paths.app %>/scripts/',
        bower_comp: '<%= paths.app %>/scripts/bower_components/',
        resources: '<%= paths.app %>/resources/**/*',
        fonts: '<%= paths.app %>/resources/fonts/',
        api: '<%= paths.app %>/api/**/*',
        root: '<%= paths.app %>/*',
      },
      // All the build folders
      out: {
        js: '<%= paths.dist %>/scripts/',
        resources: '<%= paths.dist %>/resources/',
        html: '<%= paths.dist %>/',
        htmldir: '<%= paths.dist %>/html/',
        css: '<%= paths.dist %>/css/',
        api: '<%= paths.dist %>/api/',
        fonts: '<%= paths.dist %>/resources/fonts/',
        documentation: '<%= paths.dist %>/documentation/',
        root: '<%= paths.dist %>',
      },
      // All the watch locations
      watch : {
        sass: '<%= paths.app %>/styles/**/*.scss',
        html: '<%= paths.app %>/*.php',
        js: ['<%= paths.app %>/scripts/**/*.js', '!<%= paths.app %>/scripts/bower_components/**/*.js'],
        bower_comp: '<%= paths.app %>/scripts/bower_components/**/*.js',
        resources: '<%= paths.app %>/resources/**/*',
        api: '<%= paths.app %>/api/**/*',
        root: '<%= paths.app %>/*',
      },
      jsdoc: {
        src: [
          '<%= paths.app %>/scripts/*.js', 
          '<%= paths.app %>/scripts/controllers/*.js' , 
          '<%= paths.app %>/scripts/directives/*.js', 
          '<%= paths.app %>/scripts/pages/*.js', 
          '<%= paths.app %>/scripts/services/*.js'
        ],
        dest: '<%= paths.dist %>/documentation',
        temp: 'node_modules/grunt-jsdoc/node_modules/ink-docstrap/template',
        config: './jsdoc.conf.json'
      }
    },

    jsdoc : {
        dist: {
            src: ['<%= paths.jsdoc.src %>'], 
            options: {
                destination: '<%= paths.jsdoc.dest %>',
                template: '<%= paths.jsdoc.temp %>',
                configure: '<%= paths.jsdoc.config %>'
            }
        }
    },

    // Includes javascript and css files with in the HTML this comment:
    // <!-- include: "type": "js", "files": "scripts/app.js" --> or this
    // <!-- include: "type": "css", "files": "css/*.css" -->
    includeSource: {
      options: {
        basePath: '<%= paths.app %>',
        baseUrl: '/',
        templates: {
          html: {
            js: '<script src="{filePath}"></script>',
            css: '<link rel="stylesheet" type="text/css" href="{filePath}" />',
          },
          scss: {
            scss: '@import "{filePath}";',
            css: '@import "{filePath}";',
          },
        }
      },
      server: {
        files: {
          '<%= paths.temp %>/index.php': '<%= paths.app %>/index.php'
        }
      },
      dist: {
        files: {
          '<%= paths.dist %>/index.php': '<%= paths.app %>/index.php'
        }
      }
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['<%= paths.watch.js %>'],
        tasks: ['newer:clean:js', 'newer:concat:js', 'newer:uglify:js', 'newer:jshint:all'],
        options: {
          livereload: true
        }
      },
      jsvendor: {
        files: ['<%= paths.watch.bower_comp %>'],
        tasks: ['newer:clean:jsvendor', 'newer:concat:jsvendor', 'newer:uglify:jsvendor', 'newer:copy:jsvendor'],
        options: {
          livereload: true
        }
      },
      html: {
        files: [
          '<%= paths.app %>/index.php',
        ],
        tasks: ['clean:html', 'copy:htmldir'],
        options: {
          livereload: true
        }
      },
      resources: {
        files: ['<%= paths.watch.root %>'],
        tasks: ['clean:root', 'copy:root', 'copy:resources'],
        options: {
          livereload: true
        }
      },
      api: {
        files: ['<%= paths.watch.api %>'],
        tasks: ['clean:api', 'copy:api'],
        options: {
          livereload: true
        }
      },
      compass: {
        files: ['<%= paths.watch.sass %>'],
        tasks: ['clean:css', 'compass:dist', 'cssmin:dist'],
        // options: {
        //   livereload: true
        // }
      },
      includeSource: {
        files: [
          '<%= paths.app %>/index.php'
        ],
        tasks: ['includeSource:server']
      },
      bower: {
        files: ['bower.json'],
        tasks: ['bowerInstall']
      },
      jsTest: {
        files: ['<%= paths.test %>/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= paths.watch.html %>',
          '<%= paths.watch.resources %>',
        ]
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
          base: [
            '<%= paths.temp %>',
            '<%= paths.app %>'
          ]
        }
      },
      test: {
        options: {
          port: 9001,
          base: [
            '<%= paths.temp %>',
            '<%= paths.test %>',
            '<%= paths.app %>'
          ]
        }
      },
      dist: {
        options: {
          base: '<%= paths.dist %>'
        }
      },
      doc: {
        options: {
          port: 9006,
          base: [
            '<%= paths.jsdoc.dest %>'
          ]
        }
      },
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      ignore_warning: {
        options: {
          '-W015': true,
        },
        src: ['<%= paths.watch.js %>'],
      },
      all: [
        'Gruntfile.js',
        '<%= paths.watch.js %>'
      ],
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['<%= paths.test %>/spec/**/*.js']
      }
    },

    // Automatically inject Bower components into the app
    bowerInstall: {
      app: {
        src: '<%= paths.app %>/index.php',
        ignorePath: '<%= paths.app %>'
      },
      sass: {
        src: ['<%= paths.in.sass %>'],
        ignorePath: '<%= paths.in.bower_comp %>'
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      // options: {
      //   sassDir: '<%= paths.in.sassdir %>',
      //   cssDir: '<%= paths.in.css %>',
      //   imagesDir: '<%= paths.app %>/resources/img',
      //   javascriptsDir: '<%= paths.in.scripts %>',
      //   fontsDir: '<%= paths.app %>/resources/fonts',
      //   importPath: '<%= paths.app %>/bower_components',
      //   trace: true,
      //   outputStyle: 'expanded',
      //   raw: 'Sass::Script::Number.precision = 10\n'
      // },
      dist: {
        options: {
          sassPath: '<%= paths.in.sassdir %>',
          cssDir: '<%= paths.out.css %>',
          environment: 'production',
          debugInfo: false,
          outputStyle: 'compact',
          imagesDir: '<%= paths.out.resources %>img',
          fontsDir: '<%= paths.out.fonts %>',
          httpImagesPath: '<%= paths.out.resources %>/img',
          httpGeneratedImagesPath: '<%= paths.out.resources %>/img/generated',
          httpFontsPath: '<%= paths.out.fonts %>',
        }
      },
      server: {
        options: {
          environment: 'development',
          outputStyle: 'nested',
          cssDir: '<%= paths.out.css %>',
        }
      }
    },

    // Renames files for browser caching purposes
    // rev: {
    //   dist: {
    //     files: {
    //       src: [
    //         '<%= yeoman.dist %>/scripts/**/*.js',
    //         '<%= yeoman.dist %>/css/**/*.css',
    //         '<%= yeoman.dist %>/resources/img/**/*.{png,jpg,jpeg,gif,webp,svg}'
    //       ]
    //     }
    //   }
    // },

    // The following *-min tasks produce minified files in the dist folder
    cssmin: {
      dist: {
        expand: true,
        cwd: '<%= paths.out.css %>',
        src: ['*.css', '!*.min.css'],
        dest: '<%= paths.out.css %>',
        ext: '.min.css'
      }
    },

    // ngmin tries to make the code safe for minification automatically by
    // using the Angular long form for dependency injection. It doesn't work on
    // things like resolve or inject so those have to be done manually.
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '**/*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= paths.dist %>/*.php']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      // dist: {
      //   files: [{
      //     expand: true,
      //     dot: true,
      //     cwd: '<%= paths.app %>',
      //     dest: '<%= paths.dist %>',
      //     src: [
      //       '<%= paths.in.html %>',
      //       '<%= paths.in.resources %>',
      //       '<%= paths.in.js %>',
      //       '<%= paths.in.api %>',
      //     ]
      //   }]
      // },
      resources: {
        expand: true,
        cwd: '<%= paths.app %>',
        src: ['resources/**'],
        dest: '<%= paths.dist %>',
      },
      htmldir: {
        expand: true,
        cwd: '<%= paths.app %>',
        src: ['html/**'],
        dest: '<%= paths.dist %>',
      },
      api: {
        expand: true,
        cwd: '<%= paths.app %>',
        src: ['api/**'],
        dest: '<%= paths.dist %>',
      },
      root: {
        expand: true,
        cwd: '<%= paths.app %>',
        src: ['*ico', '*.txt', '*.php'],
        dest: '<%= paths.dist %>',
      },
      jsvendor: {
        expand: true,
        cwd: '<%= paths.app %>',
        src: [
          'scripts/bower_components/jquery/dist/jquery.js', 
          'scripts/bower_components/es5-shim/es5-shim.js',
          'scripts/bower_components/angular/angular.js',
          'scripts/bower_components/json3/lib/json3.min.js',
          'scripts/bower_components/angular-resource/angular-resource.js',
          'scripts/bower_components/angular-cookies/angular-cookies.js',
          'scripts/bower_components/angular-sanitize/angular-sanitize.js',
          'scripts/bower_components/angular-route/angular-route.js',
          'scripts/bower_components/gmaps/gmaps.js',
          'scripts/bower_components/flow.js/dist/flow.js',
          'scripts/bower_components/ng-flow/dist/ng-flow.js',
          'scripts/bower_components/jquery-ui/ui/jquery-ui.js',
          'scripts/bower_components/textAngular/dist/textAngular.min.js',
        ],
        dest: '<%= paths.dist %>',
      }
    },

        // Empties folders to start fresh
    clean: {
      css: '<%= paths.out.css %>',
      js: [
        '<%= paths.out.js %>/pppp.js',
        '<%= paths.out.js %>/pppp.min.js'
      ],
      jsvendor: [
        '<%= paths.out.js %>/bower_components/',
        '<%= paths.out.js %>/vendor.js',
        '<%= paths.out.js %>/vendor.min.js'
      ],
      resources: '<%= paths.out.resources %>',
      html: '<%= paths.out.html %>',
      api: '<%= paths.out.api %>',
      documentation: '<%= paths.out.documentation %>',
      root: '<%= paths.out.root %>',
      server: '<%= paths.temp %>'
    },


    concat: {
      js: {
        src: ['<%= paths.in.js %>', '!<%= paths.in.bower_comp %>**/*.js'],
        dest: '<%= paths.out.js %>pppp.js',
      },
      jsvendor: {
        src: [
          '<%= paths.app %>/scripts/bower_components/jquery/dist/jquery.js', 
          '<%= paths.app %>/scripts/bower_components/es5-shim/es5-shim.js',
          '<%= paths.app %>/scripts/bower_components/angular/angular.js',
          '<%= paths.app %>/scripts/bower_components/json3/lib/json3.min.js',
          '<%= paths.app %>/scripts/bower_components/angular-resource/angular-resource.js',
          '<%= paths.app %>/scripts/bower_components/angular-cookies/angular-cookies.js',
          '<%= paths.app %>/scripts/bower_components/angular-sanitize/angular-sanitize.js',
          '<%= paths.app %>/scripts/bower_components/angular-route/angular-route.js',
          '<%= paths.app %>/scripts/bower_components/gmaps/gmaps.js',
          '<%= paths.app %>/scripts/bower_components/flow.js/dist/flow.js',
          '<%= paths.app %>/scripts/bower_components/ng-flow/dist/ng-flow.js',
          '<%= paths.app %>/scripts/bower_components/jquery-ui/ui/jquery-ui.js',
          '<%= paths.app %>/scripts/bower_components/textAngular/dist/textAngular.min.js',
        ],
        dest: '<%= paths.out.js %>vendor.js',
      },
    },

    uglify: {
      js: {
        files: {
          '<%= paths.out.js %>/pppp.min.js': ['<%= paths.out.js %>pppp.js']
        }
      },
      jsvendor: {
        files: {
          '<%= paths.out.js %>/vendor.min.js': ['<%= paths.out.js %>vendor.js']
        }
      },
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'compass:server'
      ],
      test: [
        'compass'
      ],
      dist: [
        'compass:dist',
      ]
    },


  });


  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'bowerInstall',
      'includeSource:server',
      'concurrent:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('document', [
    'clean:server',
    'jsdoc',
    'connect:doc:keepalive'
  ]);

  grunt.registerTask('build', [
    'clean:css',
    'clean:html',
    'clean:js',
    'clean:api',
    'clean:resources',
    'clean:documentation',
    'clean:root',
    'bowerInstall',
    'includeSource:dist',
    // 'cdnify',
    'jsdoc',
    'copy:htmldir',
    'copy:api',
    'copy:resources',
    'copy:root',
    'copy:jsvendor',
    'concat:js',
    'concat:jsvendor',
    'compass:dist',
    // 'connect:doc:keepalive'
    'cssmin:dist',
    'uglify:js',
    'uglify:jsvendor',
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
