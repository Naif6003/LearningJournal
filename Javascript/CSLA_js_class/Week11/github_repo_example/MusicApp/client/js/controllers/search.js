angular
    .module('SearchCtrl', [])
    .controller('SearchController', function($scope, SearchService) {

        $scope.searchAlbum = () => {
            SearchService.search.query({
                searchTerm: $scope.albumName
            }, (response) => {
            	$scope.details = undefined;
                $scope.results = response;
            })
        }

        $scope.showDetails = (artistId) => {
            SearchService.details.query({
                artistId: artistId
            }, (response) => {
            	$scope.selectedArtistId = artistId;
                $scope.details = response;
            })
        }
    })
    .directive('albumDetails', function() {
  		return {
    		templateUrl: 'views/detail.html'
  		}
	});