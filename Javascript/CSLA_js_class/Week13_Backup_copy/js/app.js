

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


function Game(firstPlayer, secondPlayer, title, winner, whichPlayersTurn, tictactoeBoard){
    this.player1 = firstPlayer
    this.player2 = secondPlayer
    this.title = title
    this.winner = winner
    this.whichPlayersTurn = whichPlayersTurn
    this.tictactoeBoard = tictactoeBoard
}


angular.module('gameApp', ['ngRoute','firebase'])
.config(['$locationProvider', function($locationProvider){
    $locationProvider.hashPrefix('')
}])
 .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

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
    .controller('GamesController', ['$scope', '$firebaseArray','$routeParams', '$location', 
            function($scope, $firebaseArray, $routeParams, $location, firebaseObject){
        databaseURL= "https://tictactoe-angular.firebaseio.com"
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


        $scope.tttClick= function(row,col){
            setCell(row, column, $scope.player)
            // $scope.currentNote.tictactoeBoard[row][col]
        }


  $scope.mouseOver = function( row, col, $event) {
    if ($scope.games.tictactoeBoard[row][col] == '') {
      $event.target.style.cursor = 'pointer';
    }
  }

  $scope.mouseOut = function($event) {
    $event.target.style.cursor = 'default';
  }

  $scope.movee = function(row, col) {
    $scope.games.tictactoeBoard[row][col] == 'P'
  }



    

    $scope.cellClick = function (row, column) {
        if ($scope.winner) {
            alert('Already game over.')
            return
        }
        if ($scope.player != $scope.currentPlayer) {
            alert('Not your turn.')
            return
        }
        setCell(row, column, $scope.player)
        // checkBoard()
        // $scope.currentPlayer = nextPlayer($scope.currentPlayer)
    }


    $scope.currentPlayer = 'O'
    $scope.player = 'O'
    $scope.winner = null
    $scope.board = [
        ['', '', ''],
        [null, null, null],
        [null, null, null]
    ]


    $scope.cellClass = function (row, column) {
        var value = cell(row, column)
        return 'cell cell-' + value
    }
    $scope.cellText = function (row, column) {
        var value = cell(row, column)
        return value ? value : '-'
    }

    $scope.newGame = function () {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                setCell(i, j, null)
            }
        }
        $scope.currentPlayer = 'O'
        $scope.player = 'O'
        $scope.winner = null
    }


    // == utility functions ==

    // returns the value of cell
    function cell(row, column) {
        return $scope.board[row][column]
    }

    // sets the value of cell
    function setCell(row, column, value) {
        $scope.board[row][column] = value
    }

    // returns the next player
    function nextPlayer(player) {
        return {
            O: 'X',
            X: 'O'
        }[player]
    }

  

    }])






//when we create a new game, it'll make a player one.  

.controller('CreateGameController', ['$scope', '$firebaseArray','$routeParams', '$location', 
            function($scope, $firebaseArray, $routeParams, $location, firebaseObject){
        $scope.firebaseObject = firebaseObject
        let ref = firebase.database().ref().child('games')
        $scope.games = $firebaseArray( ref )      
        $scope.gameStart = function() {


        const myGame = new Game($scope.username, null, 'player 1 is ' + $scope.username, null, null, [['', '', ''], ['', '', ''], ['', '', '']] )
        $scope.games.$add(myGame)
        // $scope.games.$add({title: 'this is player ' + $scope.username, 
        //     player1: $scope.username, 
        //     player2: null, 
        //     playerTurn: null,
        //     board: [['', '', ''], ['', '', ''], ['', '', '']]
        // })
        .then(function( newGamesId ) {
             for (let key in $scope.games) {

            const object = $scope.games[key]
 
            for (let k in object) {

                if(!object.hasOwnProperty(k)) continue;
                if(k ==='$id')
                    newGamesId = object[k]
                    $scope.tictactoeId = object[k]
                console.log(k + " = " + object[k]);
            }
        }
            console.log('The ID of the game that was just added is + ' + newGamesId )

            $location.path("/games/" + newGamesId);
      })
      }

}])


function getGamesID(gameId){
    return gameId
}