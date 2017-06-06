

// Initialize our Angular Application
      const configFirebase = {
        apiKey: "AIzaSyB_aVvzV-uXh24YppVO3ddXf04BBQPEgaU",
        authDomain: "tictactoe-angular.firebaseapp.com",
        databaseURL: "https://tictactoe-angular.firebaseio.com",
        projectId: "tictactoe-angular",
        storageBucket: "tictactoe-angular.appspot.com",
        messagingSenderId: "167853342512"
      }
      firebase.initializeApp(configFirebase)


      
angular.module('gameApp', ['ngRoute','firebase'])
.config(['$locationProvider', function($locationProvider){
    $locationProvider.hashPrefix('')
}])
 .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'partials/main.html'
        })
        .when('/game', {
            controller: 'GamesController',
            templateUrl: 'partials/game.html'

        })
        .otherwise({
            redirectTo: '/'
        })
}])
    .controller('GamesController', ['$scope', '$firebaseArray', function($scope, $firebaseArray, firebaseObject){

        $scope.firebaseObject = firebaseObject
        let ref = firebase.database().ref().child('games')

        $scope.games = $firebaseArray( ref )

        $scope.currentNote = {}

        $scope.newNote = function(){
           $scope.games.$add({ title: 'Untitled', body: ''})
        }
        $scope.setCurrentNote = function(note){
            $scope.currentNote = note
        }
        $scope.saveNote = function(){
            $scope.games.$save($scope.currentNote)
        }

    }])
