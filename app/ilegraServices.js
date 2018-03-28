'use strict';
/* global angular, $http, topicType, apontadorConfig */
var ilegraServices = angular.module('ilegraServices', ['ngResource', 'appConfig']);

ilegraServices.service('ilegraServices', ['$resource', 'ilegraConfig', function($resource, ilegraConfig){

    console.log(ilegraConfig);
    this.getFilms = function (callbackFunction) {
    //   return $http({
    //     method: 'GET',
    //     url: ilegraConfig.endpoint
    //   });
        return $resource(
            ilegraConfig.endpoint
        ).get();
    };
}]);
