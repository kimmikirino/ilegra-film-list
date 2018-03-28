'use strict';
/* global angular */

var ilegra = angular.module('ilegra');

ilegra.directive('pageHeader', ['$rootScope', '$location',  function ( $rootScope, $location) {
    return {
        restrict: 'E',
        templateUrl:  'assets/directives/header.html',
        replace: true,
        link: function (scope, iElm, iAttrs, controller) {
        }
    };
}]);
