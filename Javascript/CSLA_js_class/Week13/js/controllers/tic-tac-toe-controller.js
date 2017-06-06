// angular.module('gameApp')
//     .controller('GameController',  function($scope){

//         let ref = firebase.database().ref().child('games')

//         this.games = $scope(ref)

//     })


    .controller('GameController', ['$firebaseArray', function($firebaseArray){

        let ref = firebase.database().ref().child('games')

        this.games = $firebaseArray(ref)

    }])
