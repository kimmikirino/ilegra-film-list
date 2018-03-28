'use strict';
/* global angular, $http, topicType, apontadorConfig */
var ilegraServices = angular.module('ilegraServices', ['ngResource', 'appConfig']);

ilegraServices.service('ilegraServices', ['$resource', 'ilegraConfig', function($resource, ilegraConfig){
    this.getFilms = function (callbackFunction) {
        return $resource(
            ilegraConfig.endpoint
        ).get();
    };
}]);
