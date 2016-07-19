(function () {
    'use strict';

    angular
        .module('paringandhiInfo')
        .controller('APODController', function ($http, $log, $rootScope) {

        $rootScope.projectName = "apod";
        $rootScope.fontName = "Orbitron";
        var vm = this;

        $http.get("https://api.nasa.gov/planetary/apod?api_key=JZm6rGG6uB8CNZa5uh1COBT6kiS09NbRBfw6fWil")
        .then(function(response) {
            vm.apodInfo = response.data;
            $log.log("APOD information:");
            $log.log(vm.apodInfo);
        });
    });
})();
