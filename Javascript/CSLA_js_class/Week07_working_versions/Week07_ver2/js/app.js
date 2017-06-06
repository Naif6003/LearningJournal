const myApp = angular.module('myApp', ['ngRoute'])
.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}])
.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/', {

            templateUrl: 'views/main.html'
        })
        .when('/directives', {
            templateUrl: 'views/directives.html'
        })
        .when('/filters', {
            templateUrl: 'views/filters.html'
        })
        .when('/list', {
            controller: 'MainController',
            templateUrl: 'views/list.html'
        })
        .otherwise({
            redirectTo: '/'
        })
}])



// myApp.controller('MainController', function($scope) {

//   $scope.items = [];

//   $scope.itemsToAdd = [{
//     firstName: '',
//     lastName: ''
//   }];

//   $scope.add = function(itemToAdd) {

//     var index = $scope.itemsToAdd.indexOf(itemToAdd);

//     $scope.itemsToAdd.splice(index, 1);

//     $scope.items.push(angular.copy(itemToAdd))
//   }

//   $scope.addNew = function() {

//     $scope.itemsToAdd.push({
//       firstName: '',
//       lastName: ''
//     })
//   }
// });


