define(['require'], function (require) {
  'use strict';

  config.$inject = [];

  function config() {
    console.log(require.toUrl('./sample.partial.html'));
  }

  return config;
});