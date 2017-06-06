angular
    .module('TVMazeCtrl', [])
    .controller('TVMazeController', function($scope, TVMazeService) {

        $scope.searchArtist = () => {
            TVMazeService.search.get({
                artists: 'search?type=artist&q=' + $scope.artists
            }, (response) => {
                $scope.results = response
            })
        }
        $scope.showDetails = (id) => {
            TVMazeService.search.get({
                artists: 'artists/' + id +'/albums'
            }, (response) => {
                $scope.albums = response,
                $scope.albumType = 'album'
            })
        }
        

    })