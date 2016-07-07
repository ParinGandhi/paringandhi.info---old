(function () {
    'use strict';

    angular
        .module('paringandhiInfo')
        .controller('BeerController', function ($http, $log, $rootScope) {
            var vm = this;
            $rootScope.projectName = "beer";

            NProgress.start();
            $http.get("assets/beer.json")
                .then(function (response) {
                    vm.responseData = response.data;
                    $log.log(vm.responseData);
                    NProgress.done();
                });

        });
})();
