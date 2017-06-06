angular
  .module('app', ['ngRoute', 'ngResource', 'TVMazeCtrl', 'TVMazeSrvc'])
  .filter('trustHTML', function ($sce) {
      return (text) => {
        return $sce.trustAsHtml(text)
      }
  })
  .config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('')
  }])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/search.html',
        controller: 'TVMazeController'
      })
      .when('/search/:id',{
        templateUrl:'views/details.html',
        
    })
      
      .otherwise({
        redirectTo: '/'
      })

  }])

//  .when('/movie/:id', {
//          templateUrl: 'views/movie.html',
//          controller: 'MovieController',
//          resolve: {
//            movie: function($route, MovieService){
//              return MovieService.get({ id: $route.current.params.id})
//            }
//          }
//        })