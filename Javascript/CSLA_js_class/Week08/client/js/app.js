angular
    .module('app', ['ngRoute', 'ngResource', 'FactCtrl', 'FactSrvc'])
    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('')
    }])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/fact.html',
                controller: 'FactController'
            })
            .otherwise({
                redirectTo: '/'
            })

    }])



// angular
//     .module('app', ['ngRoute', 'ngResource', 'FactCtrl', 'FactSrvc'])
//     .config(['$locationProvider', function($locationProvider) {
//         $locationProvider.hashPrefix('')
//     }])
//     .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

//         $routeProvider
//             // .when('/',{
//             //     templateUrl: 'views/date.html',
//             //     controller: 'DateController'
//             // })
//             // .when('/',{
//             //     templateUrl: 'views/random.html',
//             //     contorller: 'RandomController'
//             // })
//             .when('/', {
//                 templateUrl: 'views/fact.html',
//                 controller: 'FactController'
//             })
//             .otherwise({
//                 redirectTo: '/'
//             })
//     }])
    // .module('app', ['ngRoute', 'ngResource', 'FactCtrl', 'FactSrvc','DateCtrl', 'DateSrvc','RandomCtrl', 'RandomSrvc'])


