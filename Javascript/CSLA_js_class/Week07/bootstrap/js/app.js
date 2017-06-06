const myApp = angular.module('myApp', ['ngRoute'])
.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}])
.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/', {
            controller: 'MainController',
            templateUrl: 'views/index.html'
        })
        .when('/directives', {
            templateUrl: 'views/directives.html'
        })
        .when('/filters', {
            templateUrl: 'views/filters.html'
        })
        .when('/list', {
            templateUrl: 'views/list.html'
        })
        .otherwise({
            redirectTo: '/'
        })
}])

