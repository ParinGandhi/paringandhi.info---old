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
      .otherwise({
        redirectTo: '/'
      });
  }

})();
