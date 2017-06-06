  const config = {
    apiKey: "AIzaSyBY7IOYUvqlxDN3DD5IRrMK3KPnwcvMgqc",
    authDomain: "cs4220-examples-6a6ee.firebaseapp.com",
    databaseURL: "https://cs4220-examples-6a6ee.firebaseio.com",
    projectId: "cs4220-examples-6a6ee",
    storageBucket: "cs4220-examples-6a6ee.appspot.com",
    messagingSenderId: "614218711326"
  };

firebase.initializeApp(config)


angular.module('fbApp', ['firebase', 'angularMoment'])
    .controller('SyncController', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {

        let ref = firebase.database().ref().child("guestbook")

        $scope.posts = $firebaseArray(ref)

        $scope.addPost = function(){
            $scope.posts.$add({
                message: $scope.message,
                date: new Date().toUTCString()
            })
            $scope.message = ''
        }

        $scope.removePost = function(post){
            $scope.posts.$remove(post);
        }


    }])