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

    const episode = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
    
    $scope.getEpisode = (ep) => {
      return episode[ep];
    };

    $scope.created = (createdDate) => {
      const date = new Date(createdDate);
      return date.getDay() + '/' + (date.getMonth()+1) + '/' + date.getFullYear(); 
    };

    ilegraServices.getFilms().$promise.then((data) => {
      console.log(data);
      $scope.films = data.results;
    });
  }]);
