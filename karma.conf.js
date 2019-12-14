// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
<<<<<<< HEAD
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
=======
    frameworks: ['jasmine', '@angular/cli'],
>>>>>>> aed10a091be6f1f07faacd509ef2f6a9c3cea105
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
<<<<<<< HEAD
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/bitware-app'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
=======
      require('@angular/cli/plugins/karma')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
>>>>>>> aed10a091be6f1f07faacd509ef2f6a9c3cea105
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
<<<<<<< HEAD
    singleRun: false,
    restartOnFileChange: true
=======
    singleRun: false
>>>>>>> aed10a091be6f1f07faacd509ef2f6a9c3cea105
  });
};
