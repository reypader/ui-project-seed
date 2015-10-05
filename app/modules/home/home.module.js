define([
  'angular',
  './home.config',
  './home.controller'
], function (angular,
             config,
             controller) {
  'use strict';

  angular.module('homeModule', [])
    .config(config)
    .controller('HomeController', controller);
});
