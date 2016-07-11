(function () {
    'use strict';

    angular
        .module('paringandhiInfo')
        .controller('QuotesController', function ($http, $log, $rootScope, $timeout) {
            var vm = this;
            $rootScope.projectName = "quotes";
            var index = Math.floor((Math.random() * 43) + 1);


            $http.get("assets/quotes.json")
                .then(function (response) {
                    vm.randomQuote = response.data[index];
                    $log.log("Random quote:");
                    $log.log(vm.randomQuote);


                });

        });
})();
