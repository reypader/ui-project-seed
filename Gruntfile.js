module.exports = function (grunt) {

  var globalConfig = {
    assets: 'ui-src/assets',
    fonts: 'ui-src/fonts',
    styles: 'ui-src/styles',
    modules: 'ui-src/modules',
    bower_path: 'bower_components',
    distribution: {
      root: 'dist',
      assets: '<%= globalConfig.distribution.root %>/assets',
      styles: '<%= globalConfig.distribution.root %>/styles',
      modules: '<%= globalConfig.distribution.root %>/modules'
    }
  };

  grunt.initConfig({
      globalConfig: globalConfig,
      clean: [
        '.tmp',
        'ui-src/require.js',
        '<%= globalConfig.distribution.root %>',
        '<%= globalConfig.styles %>/compiled'
      ],
      jshint: {
        options: {
          'bitwise': true,     // true: Prohibit bitwise operators (&, |, ^, etc.)
          'camelcase': false,    // true: Identifiers must be in camelCase
          'curly': true,     // true: Require {} for every new block or scope
          'eqeqeq': true,     // true: Require triple equals (===) for comparison
          'forin': true,     // true: Require filtering for..in loops with obj.hasOwnProperty()
          'freeze': true,     // true: prohibits overwriting prototypes of native objects such as Array, Date etc.
          'immed': true,    // true: Require immediate invocations to be wrapped in parens e.g. `(function () { } ());`
          'indent': 2,        // {int} Number of spaces to use for indentation
          'latedef': false,    // true: Require variables/functions to be defined before being used
          'newcap': true,    // true: Require capitalization of all constructor functions e.g. `new F()`
          'noarg': true,     // true: Prohibit use of `arguments.caller` and `arguments.callee`
          'noempty': true,     // true: Prohibit use of empty blocks
          'nonbsp': true,     // true: Prohibit 'non-breaking whitespace' characters.
          'nonew': true,    // true: Prohibit use of constructors for side-effects (without assignment)
          'plusplus': false,    // true: Prohibit use of `++` and `--`
          'quotmark': 'single',    // Quotation mark consistency:
          //   false    : do nothing (default)
          //   true     : ensure whatever is used is consistent
          //   'single' : require single quotes
          //   'double' : require double quotes
          'undef': true,     // true: Require all non-global variables to be declared (prevents global leaks)
          'unused': true,     // Unused variables:
                              //   true     : all variables, last function parameter
                              //   'vars'   : all variables only
                              //   'strict' : all variables, all function parameters
          'strict': true,     // true: Requires all functions run in ES5 Strict Mode
          'maxparams': false,    // {int} Max number of formal params allowed per function
          'maxdepth': false,    // {int} Max depth of nested blocks (within functions)
          'maxstatements': false,    // {int} Max number statements per function
          'maxcomplexity': false,    // {int} Max cyclomatic complexity per function
          'maxlen': false,    // {int} Max number of characters per line
          //'varstmt': false,    // true: Disallow any var statements. Only `let` and `const` are allowed.
          ///
          'validthis': true,
          'sub': true,
          'boss': true,
          'eqnull': true,
          'jasmine':true,
          'globals': {
            'CryptoJS': true,
            'define': true,
            'require': true,
            'console': true,
            'document': true,
            'window': true
          }
        },
        all: {
          src: [
            '<%= globalConfig.modules %>/**/*.js'
          ]
        },
        test: {
          src: ['ui-test/**/*.js']
        }
      },
      customize_bootstrap: {
        task: {
          options: {
            bootstrapPath: '<%= globalConfig.bower_path %>/bootstrap',
            src: '<%= globalConfig.styles %>/customized-bootstrap-less',
            dest: '<%= globalConfig.styles %>/compiled'
          }
        }
      },
      less: {
        bootstrap: {
          src: '<%= customize_bootstrap.task.options.dest %>/bootstrap.less',
          dest: '<%= customize_bootstrap.task.options.dest %>/bootstrap.css'
        }
      },
      requirejs: {
        main: {
          options: {
            baseUrl: '<%= globalConfig.modules %>',
            mainConfigFile: '<%= globalConfig.modules %>/main.js',
            name: 'main',
            out: '<%= globalConfig.distribution.modules %>/main.js',
            optimize: 'uglify',
            preserveLicenseComments: false
          }
        }
      },
      bowerRequirejs: {
        main: {
          rjsConfig: '<%= globalConfig.modules %>/main.js',
          options: {
            transitive: true,
            exclude: [
              'requirejs-plugins',
              'cryptojslib'
            ]
          }
        }
      },
      copy: {
        pages: {
          files: [
            {
              expand: true,
              cwd: 'ui-src',
              src: ['**/*.html'],
              dest: '<%= globalConfig.distribution.root %>/',
              filter: 'isFile'
            }
          ]
        },
        assets: {
          files: [
            {
              expand: true,
              cwd: 'ui-src',
              src: ['assets/**', 'fonts/**'],
              dest: '<%= globalConfig.distribution.root %>/',
              filter: 'isFile'
            }
          ]
        },
        js: {
          files: [
            {
              expand: true,
              cwd: 'ui-src',
              src: ['*.js'],
              dest: '<%= globalConfig.distribution.root %>/',
              filter: 'isFile'
            }
          ]
        },
        init: {
          files: [
            {
              expand: true,
              flatten: true,
              src: ['node_modules/requirejs/require.js'],
              dest: 'ui-src/',
              filter: 'isFile'
            },
            {
              expand: true,
              flatten: true,
              src: ['<%= globalConfig.bower_path %>/bootstrap/dist/fonts/*'],
              dest: '<%= globalConfig.fonts %>/',
              filter: 'isFile'
            },
            {
              expand: true,
              flatten: true,
              src: ['<%= globalConfig.bower_path %>/font-awesome/fonts/*'],
              dest: '<%= globalConfig.fonts %>/',
              filter: 'isFile'
            }
          ]
        }
      },
      useminPrepare: {
        html: ['ui-src/**/*.html'],
        options: {
          dest: '<%= globalConfig.distribution.root %>'
        }
      },
      usemin: {
        html: ['<%= globalConfig.distribution.root %>/**/*.html']
      },
      filerev: {
        dist: {
          src: [
            '<%= globalConfig.distribution.styles %>/**/*.css',
          ]
        }
      },
      karma: {
        unit: {
          configFile: 'karma.conf.js',
          singleRun: true
        }
      },
      connect: {
        options: {
          port: 9000,
          livereload: 35729,
          hostname: 'localhost' // * = accessible from anywhere ; default: localhost
        },
        livereload: {
          options: {
            keepAlive: true,
            protocol: 'http',
            //protocol: 'https',
            //key: grunt.file.read('dev_keys/server.key').toString(),
            //cert: grunt.file.read('dev_keys/server.crt').toString(),
            //ca: grunt.file.read('dev_keys/ca.crt').toString(),
            middleware: function (connect) {
              return [
                connect().use(
                  '/bower_components',
                  connect.static('./bower_components')
                ),
                connect.static('./ui-src')
              ];
            }
          }
        }
      },
      watch: {
        livereload: {
          options: {
            livereload: {
              port: '<%= connect.options.livereload %>',
              //key: grunt.file.read('dev_keys/server.key').toString(),
              //cert: grunt.file.read('dev_keys/server.crt').toString(),
              //ca: grunt.file.read('dev_keys/ca.crt').toString()
            }
          },
          files: [
            '<%= globalConfig.modules %>/**/*.js',
            '<%= globalConfig.styles %>/**/*.{css,less}',
            'bower.json'
          ],
          tasks: ['bowerRequirejs', 'test', 'compile-style']
        }
      }
    }
  );

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-filerev');
  grunt.loadNpmTasks('grunt-bower-requirejs');
  grunt.loadNpmTasks('grunt-customize-bootstrap');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-usemin');


  grunt.registerTask('serve', [
    'test',
    'connect',
    'watch'
  ]);

  grunt.registerTask('test', [
    'jshint',
    'init',
    'karma'
  ]);

  grunt.registerTask('release', [
    'test',
    'copy:pages',
    'requirejs',
    'copy:js',
    'copy:assets',
    'build-pages'
  ]);

  grunt.registerTask('compile-style', [
    'customize_bootstrap',
    'less'
  ]);
  grunt.registerTask('init', [
    'clean',
    'copy:init',
    'bowerRequirejs',
    'compile-style'
  ]);

  grunt.registerTask('build-pages', [
    'useminPrepare',
    'concat:generated',
    'cssmin:generated',
    'filerev',
    'usemin'
  ]);

};