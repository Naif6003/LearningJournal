

// // when we create a new game, it'll make a player one.  


// function Game(firstPlayer, secondPlayer, title, winner, whichPlayersTurn, tictactoeBoard, playerTurn){
//     this.player1 = firstPlayer
//     this.player2 = secondPlayer
//     this.title = title
//     this.winner = winner
//     this.whichPlayersTurn = whichPlayersTurn
//     this.tictactoeBoard = tictactoeBoard
//     this.playerTurn = playerTurn
// }


// gameApp.controller('CreateGameController', ['$scope', '$firebaseArray','$routeParams', '$location', 
//             function($scope, $firebaseArray, $routeParams, $location, firebaseObject){
//         $scope.firebaseObject = firebaseObject
//         let ref = firebase.database().ref().child('games')
//         $scope.games = $firebaseArray( ref )      
//         $scope.gameStart = function() {


//         const myGame = new Game($scope.username, null, 'player 1 is ' + $scope.username, null, null, [['', '', ''], ['', '', ''], ['', '', '']] )
//         $scope.games.$add(myGame)
//         // $scope.games.$add({title: 'this is player ' + $scope.username, 
//         //     player1: $scope.username, 
//         //     player2: null, 
//         //     playerTurn: null,
//         //     board: [['', '', ''], ['', '', ''], ['', '', '']]
//         // })
//         .then(function( newGamesId ) {
//              for (let key in $scope.games) {

//             const object = $scope.games[key]
 
//             for (let k in object) {

//                 if(!object.hasOwnProperty(k)) continue;
//                 if(k ==='$id')
//                     newGamesId = object[k]
//                     $scope.tictactoeId = object[k]
//                 console.log(k + " = " + object[k]);
//             }
//         }
//             console.log('The ID of the game that was just added is + ' + newGamesId )

//             $location.path("/games/" + newGamesId);
//       })
//       }

// }])


