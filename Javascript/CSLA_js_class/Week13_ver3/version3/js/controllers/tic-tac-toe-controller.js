    .controller('GameController', ['$firebaseArray', function($firebaseArray){

        let ref = firebase.database().ref().child('games')

        this.games = $firebaseArray(ref)

    }])
