'use strict';
/* global angular, $http, topicType, apontadorConfig */
var ilegraServices = angular.module('ilegraServices', ['ngResource', 'appConfig']);

ilegraServices.service('ilegraServices', ['$resource', 'ilegraConfig', function($resource, ilegraConfig){
    this.getFilms = function () {
        return $resource(
            ilegraConfig.endpoint
        ).get();
    };

    this.getAll = function(route) {
        return $resource(
            route
        ).get();
    };
}]);
