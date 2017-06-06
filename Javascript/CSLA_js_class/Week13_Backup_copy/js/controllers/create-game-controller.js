// .controller('GamesController', ['$scope', '$firebaseArray','$routeParams', '$location', 
//             function($scope, $firebaseArray, $routeParams, $location, firebaseObject){
//         databaseURL= "https://tictactoe-angular.firebaseio.com"
//         $scope.firebaseObject = firebaseObject
//         let ref = firebase.database().ref().child('games')

//         $scope.games = $firebaseArray( ref )

//         $scope.currentNote = {}

//         $scope.newNote = function(){
//            $scope.games.$add({ title: 'Untitled', body: ''})
//         }
//         $scope.setCurrentNote = function(note){
//             $scope.currentNote = note
//         }
//         $scope.saveNote = function(){
//             $scope.games.$save($scope.currentNote)
//         }


//         $scope.createGame = function() {
//         if (!$scope.username.length) {
//           return;
//         }

//         $scope.games.$add({title: 'this is player ' + $scope.username, player1: $scope.username, player2: null, board: [['', '', ''], ['', '', ''], ['', '', '']]})
//         let gameId = null

//         for (let key in $scope.games) {
//             // skip loop if the property is from prototyp

//             const object = $scope.games[key]
 
//             for (let k in object) {
//                 // skip loop if the property is from prototype
//                 if(!object.hasOwnProperty(k)) continue;

//                 // your code

//                 if(k ==='$id')
//                     gameId = object[k]

//                 console.log(k + " = " + object[k]);
//             }
//         }
//         $location.path("/games/" + gameId);
//       }

//     }])
