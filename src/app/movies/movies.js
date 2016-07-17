(function () {
    'use strict';

    /** This controller will take the name of the movie that was searched for and submit it to the Open Movie Database API. The API will return movie information such as the poster image, year, genre, etc as well as rotten tomatoes ratings and other information. **/

    angular
        .module('paringandhiInfo')
        .controller('MoviesController', function ($http, $log, $rootScope, $timeout) {
            $rootScope.projectName = "movies";
            $rootScope.fontName = "Galada";
            var vm = this;

            // This function wil call the API with the name of the searched movie and return the response data
            vm.getMovieTitle = function () {
                var url = "http://www.omdbapi.com/?tomatoes=true&t=" + vm.searchMovie;
                $log.log(url);
                $http.get(url)
                    .then(function (response) {
                        vm.movieInfo = response.data;
                        if (vm.movieInfo.Response === "False") {
                            vm.showError = true;
                            vm.showDetails = false;
                        } else {
                            $log.log("Movie information:");
                            $log.log(vm.movieInfo);
                            vm.showError = false;
                            vm.showDetails = true;
                        }

                    });
            }; // End getMovieTitle

            // This function allows you to press the enter key to submit the search
            vm.pressEnter = function ($event) {
                if ($event.keyCode === 13) {
                    vm.getMovieTitle();
                }
            }; // End pressEnter

        }); // End MoviesController
})();
