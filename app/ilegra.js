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
    $scope.show = false;
    $scope.loading = true;

    $scope.getEpisode = function(ep) {
      return episode[ep];
    };

    $scope.convertDate = function(createdDate) {
      const date = new Date(createdDate);
      return date.getDay() + '/' + (date.getMonth()+1) + '/' + date.getFullYear(); 
    };

    $scope.showModal = function() {
      $scope.show = !$scope.show; 
      if ($scope.show) {
        $("body").addClass("modal-open");
      } else {
        $("body").removeClass("modal-open");
      }
    };

    $scope.isLoading = function() {
      $scope.loading = !$scope.loading;
    };

    $scope.seeChars = function(chars, title) {
      $scope.isLoading();
      $scope.characters = [];
      $scope.title = title;
      chars.map(function(char) {
        ilegraServices.getAll(char).$promise.then(function(data){
          $scope.characters.push(data);
          if ($scope.characters.length === chars.length) {
            $scope.isLoading();
            $scope.showModal();

          }
        });
      });
    };

    ilegraServices.getFilms().$promise.then(function(data) {
      $scope.films = data.results;
      $scope.isLoading();
    });
  }]);
