(function () {
    'use strict';

    /** This controller will read a JSON file containing a list of beers acquired from the Barnivore website and retreive information such as beer name, company information
    and whether or not it is vegan. It also incorporates a loading screen while the list is being loaded **/
    angular
        .module('paringandhiInfo')
        .controller('MusicController', function ($http, $log, $rootScope) {
            var vm = this;
        var song;
            var oldSong;

            $rootScope.projectName = "music";
        $rootScope.fontName = "Farsan";


            // This function will read a JSON file containing the list of beers
            $http.get("assets/music.json")
                .then(function (response) {
                    vm.responseData = response.data;
                    $log.log(vm.responseData);
                }); // End get function

            vm.playSong = function (track) {
                if (song) {
                    oldSong = song;
                }
                if (oldSong) {
                    stopOldSong();
                }
                song = new Audio(track.source);
                vm.cover = track.cover;
                song.play();
            }

            function stopOldSong () {
                oldSong.pause();
                    oldSong.currentTime = 0;
            }

        vm.stopSong = function () {
            song.pause();
            song.currentTime = 0;
        };

        vm.pauseSong = function () {
            song.pause();
        };

        vm.resumePlay = function () {
            song.play();
        };

            /*var track01 = new Audio("assets/music/Charlie Puth - We Don't Talk Anymore_pn.mp3");
            vm.playTrack = function (track) {

              track01.play();
            };

            vm.stopTrack = function () {
                track01.pause();
                track01.currentTime = 0;
            };*/

        }); // End BeerController
})();
