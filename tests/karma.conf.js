// Karma configuration
// Generated on Thu Jun 02 2016 18:25:47 GMT-0300 (BRT)

module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      '../www/lib/ionic/js/ionic.bundle.js',
      '../www/lib/ionic/js/angular/angular-resource.min.js',
      '../www/lib/angular-ui-router/release/angular-ui-router.min.js',
      '../www/lib/angular-sanitize/angular-sanitize.min.js',
      '../www/lib/angular-animate/angular-animate.min.js',
      '../node_modules/angular-mocks/angular-mocks.js',

      '../www/js/app.js',
      '../www/js/**/*.js',
      './unit-tests/*.test.js'
    ],

    exclude: [],

    preprocessors: {
      '../www/js/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage'],

    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox', 'Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    }
  });

  if(process.env.TRAVIS){
    config.browsers = ['Chrome_travis_ci'];
    config.singleRun = true;
  }
}