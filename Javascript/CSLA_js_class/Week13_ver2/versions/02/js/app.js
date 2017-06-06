

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

function Game(player1, player2, title, winner, tictactoeBoard, playerTurn){
        this.player1 =  player1
        this.player2 = player2
        this.title = title
        this.winner = winner,
        this.tictactoeBoard  = tictactoeBoard
        this.playerTurn = playerTurn
}



const gameApp= angular.module('gameApp', ['ngRoute','firebase'])
gameApp.config(['$locationProvider', function($locationProvider){
    $locationProvider.hashPrefix('')
}])
 gameApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'partials/main.html',
            controller:'CreateGameController'
        })
        .when('/game', {
            controller: 'GamesController',
            templateUrl: 'partials/game.html'
        })
        .when('/games/:gameId', {
            templateUrl: 'partials/game.html', 
            controller: 'GamesController'
        })
        .otherwise({
            redirectTo: '/'
        })
}])
.controller('CreateGameController', ['$scope', '$firebaseArray','$routeParams', '$location', 
            function($scope, $firebaseArray, $routeParams, $location, firebaseObject){
        $scope.tictactoeId =null
        $scope.firebaseObject = firebaseObject
        let ref = firebase.database().ref().child('games')
        $scope.games = $firebaseArray( ref )      
        $scope.gameStart = function() {
                gameToAdd = {
                    player1:  $scope.player1,
                    player2: '',
                    title: 'Player 1 to move',
                    winner: '',
                    tictactoeBoard: [['#', '#', '#'], ['#', '#', '#'], ['#', '#', '#']],
                    playerTurn:  $scope.player1,
                    chat:[{
                            player: '',
                            message: ''
                          }],
                    }
        $scope.games.$add(gameToAdd)

        .then(function( gameId ) {
            for (let key in $scope.games) {

            const object = $scope.games[key]
 
            for (let k in object) {
                if(k ==='$id')
                    gameId = object[k]
                    $scope.tictactoeId = object[k]
                console.log(k + " = " + object[k]);
            }
        }
            console.log('The ID of the game that was just added is + ' + gameId )

            $location.path("/games/" + gameId);
      })
      }

}])

