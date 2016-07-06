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
        controllerAs: 'main'
      })
    .when('/quotes', {
        templateUrl: 'app/quotes/quotes.html',
        controller: 'QuotesController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
