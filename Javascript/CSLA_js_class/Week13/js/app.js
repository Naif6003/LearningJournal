// const firebaseConfig = {
//     apiKey: "AIzaSyAhYs3mRF_YWQf-_djqz-qo0voGO8fXd-s",
//     authDomain: "tic-tac-toe-game-523c4.firebaseapp.com",
//     databaseURL: "https://tic-tac-toe-game-523c4.firebaseio.com",
//     projectId: "tic-tac-toe-game-523c4",
//     storageBucket: "tic-tac-toe-game-523c4.appspot.com",
//     messagingSenderId: "862424676969"
//   };
//   firebase.initializeApp(firebaseConfig);

// const firebaseConfig= {
//     databaseURL: "https://cs4220-examples-6a6ee.firebaseio.com"
// }
// firebase.initializeApp(firebaseConfig)


// const gameApp = angular.module('gameApp', ['ngRoute', 'firebase', 'angularMoment'])
// .config(['$locationProvider', function($locationProvider) {
//   $locationProvider.hashPrefix('');
// }])
// .config(['$routeProvider', function($routeProvider) {

//     $routeProvider
//         .when('/', {

//             templateUrl: 'partials/main.html'
//         })
//         .when('/game', {
//             controller: 'GameController',
//             templateUrl: 'partials/game.html'
//         })
//         .otherwise({
//             redirectTo: '/'
//         })
// }])

// const firebaseConfig = {
//     apiKey: "AIzaSyAhYs3mRF_YWQf-_djqz-qo0voGO8fXd-s",
//     authDomain: "tic-tac-toe-game-523c4.firebaseapp.com",
//     databaseURL: "https://tic-tac-toe-game-523c4.firebaseio.com",
//     projectId: "tic-tac-toe-game-523c4",
//     storageBucket: "tic-tac-toe-game-523c4.appspot.com",
//     messagingSenderId: "862424676969"
//   };

// const firebaseConfig= {
//     databaseURL: "https://cs4220-examples-6a6ee.firebaseio.com"
// }
//   firebase.initializeApp(firebaseConfig);

// Initialize our Angular Application
      const configFirebase = {
        apiKey: "AIzaSyBY7IOYUvqlxDN3DD5IRrMK3KPnwcvMgqc",
        authDomain: "cs4220-examples-6a6ee.firebaseapp.com",
        databaseURL: "https://cs4220-examples-6a6ee.firebaseio.com",
        projectId: "cs4220-examples-6a6ee",
        storageBucket: "cs4220-examples-6a6ee.appspot.com",
        messagingSenderId: "614218711326"
      };
      firebase.initializeApp(configFirebase);


      
angular.module('notesApp', ['ngRoute','firebase'])
.config(['$locationProvider', function($locationProvider){
    $locationProvider.hashPrefix('')
}])
 .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {

            templateUrl: 'partials/main.html'
        })
        .when('/game', {
            controller: 'NotesController',
            templateUrl: 'partials/game.html'

        })
        .otherwise({
            redirectTo: '/'
        })
}])
   