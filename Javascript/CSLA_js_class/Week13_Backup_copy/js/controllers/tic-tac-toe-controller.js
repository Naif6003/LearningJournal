	.controller('GameController', ['$firebaseArray', '$routeParams', '$location', function($firebaseArray, $routeParams, $location){

        let ref = firebase.database().ref().child('games')

        this.games = $firebaseArray(ref)

    }])
