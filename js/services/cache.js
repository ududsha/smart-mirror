(function(annyang) {
  'use strict';

  function CacheService(localStorageService) {
    var service = {};

    service.addToCache = function(key, value) {
      localStorageService.set(key, value);
    }

    service.getFromCache = function(key) {
      return localStorageService.get(key);
    }

    return service;
  }

  angular.module('SmartMirror')
    .factory('CacheService', CacheService);
}(window.annyang));
