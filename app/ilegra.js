'use strict';
/* global angular, confirm */

var ilegra = angular.module('ilegra', [
  'ngRoute',
  'compiledTemplates',
  'ilegraServices',
  'appConfig'
]);

ilegra.config(['$routeProvider', '$httpProvider',
    function($routeProvider, $httpProvider) {
        $httpProvider.defaults.withCredentials = false;

        $routeProvider
            .when('/films', {
                templateUrl: 'components/films.html',
                controller: 'filmsController'
            })
            .otherwise({
              redirectTo: '/films'
            });
    }
]);

ilegra.run(['$rootScope', '$location', function($rootScope, $location) {
}]);

/************************************************************************************************
 * Controllers
 ************************************************************************************************/
ilegra.controller('filmsController', ['$scope', '$rootScope', 'ilegraServices',
  function( $scope, $rootScope, ilegraServices) {
    console.log('teste');
    ilegraServices.getFilms().$promise.then((data) => {
      console.log(data);
      $scope.films = data.results;
    });
  }]);
