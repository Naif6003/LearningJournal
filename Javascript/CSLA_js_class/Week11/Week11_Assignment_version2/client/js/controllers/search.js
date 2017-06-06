angular
    .module('TVMazeCtrl', [])
    .controller('TVMazeController', function($scope, TVMazeService) {

        $scope.searchArtist = () => {
            const newSearch = $scope.artists
            if($scope.artists === ''){
                $scope.artists = newSearch
            }
            else{
                $scope.albums = ''
            }
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
    .directive('albumDetails', function() {
        return {
            templateUrl: 'views/details.html'
        }
    })