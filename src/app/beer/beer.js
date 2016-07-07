(function () {
    'use strict';

    angular
        .module('paringandhiInfo')
        .controller('BeerController', function MainController($http, $log) {
            var vm = this;

            NProgress.start();
            $http.get("assets/beer.json")
                .then(function (response) {
                    vm.responseData = response.data;
                    $log.log(vm.responseData);
                    NProgress.done();
                });

        });
})();
