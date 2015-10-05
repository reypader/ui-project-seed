'use strict';

var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function (file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
    // then do not normalize the paths
    allTestFiles.push(file);
  }
});

require.config({

  paths: {
    angular: '../../bower_components/angular/angular',
    async: '../../bower_components/requirejs-plugins/src/async',
    'angular-mocks': '../../node_modules/angular-mocks/angular-mocks',
    'cryptojs.core': "../../bower_components/cryptojslib/components/core",
    'cryptojs.base64': "../../bower_components/cryptojslib/components/enc-base64",
    'cryptojs.sha256': "../../bower_components/cryptojslib/components/sha256",
    'cryptojs.md5': "../../bower_components/cryptojslib/components/md5",
    'cryptojs.lib': '../../bower_components/cryptojslib/components/lib-typedarrays-min'
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    'angular-mocks': {
      deps: ['angular']
    },
    'cryptojs.core': {
      exports: "CryptoJS"
    },
    'cryptojs.sha256': {
      deps: ['cryptojs.core'],
      exports: "CryptoJS.SHA256"
    },
    'cryptojs.base64': {
      deps: ['cryptojs.core'],
      exports: "CryptoJS.enc.Base64"
    },
    'cryptojs.md5': {
      deps: ['cryptojs.core'],
      exports: "CryptoJS.MD5"
    },
    'cryptojs.lib': {
      deps: [
        'cryptojs.core'
      ],
      exports: 'CryptoJS.lib'
    },
  },

  baseUrl: '/base/app/modules',

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
