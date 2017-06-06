angular
    .module('TVMazeCtrl', [])
    .controller('TVMazeController', function($scope, TVMazeService) {

        $scope.searchArtist = () => {
            TVMazeService.search.get({
                artists: $scope.artists
            }, (response) => {
                $scope.results = response
            })
        }
        $scope.showDetails = (id) => {
            TVMazeService.search.get({
                artists: $scope.item.id
            }, (response) => {
                $scope.results = response
            })
        }

    })

