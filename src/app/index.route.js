(function() {
  'use strict';

  angular
    .module('paringandhiInfo')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
    .when('/quotes', {
        templateUrl: 'app/quotes/quotes.html',
        controller: 'QuotesController',
        controllerAs: 'vm'
      })
    .when('/beer', {
        templateUrl: 'app/beer/beer.html',
        controller: 'BeerController',
        controllerAs: 'vm'
      })
    .when('/movies', {
        templateUrl: 'app/movies/movies.html',
        controller: 'MoviesController',
        controllerAs: 'vm'
      })
    .when('/mortgage', {
        templateUrl: 'app/mortgage/mortgage.html',
        controller: 'MortgageController',
        controllerAs: 'vm'
      })
    .when('/apod', {
        templateUrl: 'app/apod/apod.html',
        controller: 'APODController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
