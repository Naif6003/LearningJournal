angular.module('search.controller', [])
	.directive('showPreview', function() {
		return {
			restrict: 'EA',
			scope: {sh: '='},
			templateUrl: '../views/show.preview.html'
		}
	})
	.controller('SearchController', function ($scope, SearchService) {
		$scope.search = function (){
			SearchService.query({ name: $scope.name }, function (response) {
				//if(response.length)
				//	$scope.shows = { main: response[0], alternatives: response };
				//else
					$scope.shows = response;
			});
		};
});
