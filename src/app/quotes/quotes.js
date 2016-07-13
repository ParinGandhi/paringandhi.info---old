(function () {
    'use strict';

    /** This controller will read quotes from a JSON file and randomize which quote will be displayed **/

    angular
        .module('paringandhiInfo')
        .controller('QuotesController', function ($http, $log, $rootScope, $timeout) {
            var vm = this;
            var index = Math.floor((Math.random() * 43) + 1);
            $rootScope.projectName = "quotes";

            // This function will read the JSON file containing the quotes
            $http.get("assets/quotes.json")
                .then(function (response) {
                    vm.randomQuote = response.data[index];
                    $log.log("Random quote:");
                    $log.log(vm.randomQuote);
                }); // End get function
        }); // End QuotesController
})();
