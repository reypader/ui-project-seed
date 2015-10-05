require.config({
  paths: {
    async: '../../bower_components/requirejs-plugins/src/async',
    angular: '../../bower_components/angular/angular',
    'cryptojs.core': '../../bower_components/cryptojslib/components/core',
    'cryptojs.md5': '../../bower_components/cryptojslib/components/md5',
    'cryptojs.base64': '../../bower_components/cryptojslib/components/enc-base64',
    'cryptojs.sha256': '../../bower_components/cryptojslib/components/sha256',
    'cryptojs.lib': '../../bower_components/cryptojslib/components/lib-typedarrays-min',
    bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap',
    jquery: '../../bower_components/jquery/dist/jquery'
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    'cryptojs.core': {
      exports: 'CryptoJS'
    },
    'cryptojs.md5': {
      deps: [
        'cryptojs.core'
      ],
      exports: 'CryptoJS.MD5'
    },
    'cryptojs.lib': {
      deps: [
        'cryptojs.core'
      ],
      exports: 'CryptoJS.lib'
    },
    'cryptojs.sha256': {
      deps: [
        'cryptojs.core'
      ],
      exports: 'CryptoJS.SHA256'
    },
    'cryptojs.base64': {
      deps: [
        'cryptojs.core'
      ],
      exports: 'CryptoJS.enc.Base64'
    }
  },
  packages: [

  ],
  waitSeconds: 30
});
require([
  'angular'
], function (angular) {
  'use strict';

  angular.bootstrap(document, []);
});
