(function () {
    'use strict';

    /** This controller will read a JSON file containing a list of beers acquired from the Barnivore website and retreive information such as beer name, company information
    and whether or not it is vegan. It also incorporates a loading screen while the list is being loaded **/
    angular
        .module('paringandhiInfo')
        .controller('BeerController', function ($http, $log, $rootScope) {
            var vm = this;
            $rootScope.projectName = "beer";

            NProgress.start();
            // This function will read a JSON file containing the list of beers
            $http.get("assets/beer.json")
                .then(function (response) {
                    vm.responseData = response.data;
                    $log.log(vm.responseData);
                    NProgress.done();
                }); // End get function

        }); // End BeerController
})();
