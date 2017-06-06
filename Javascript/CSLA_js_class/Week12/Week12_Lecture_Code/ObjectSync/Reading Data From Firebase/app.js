  const config = {
    apiKey: "AIzaSyBY7IOYUvqlxDN3DD5IRrMK3KPnwcvMgqc",
    authDomain: "cs4220-examples-6a6ee.firebaseapp.com",
    databaseURL: "https://cs4220-examples-6a6ee.firebaseio.com",
    projectId: "cs4220-examples-6a6ee",
    storageBucket: "cs4220-examples-6a6ee.appspot.com",
    messagingSenderId: "614218711326"
  };

firebase.initializeApp(config)
angular.module('fbApp', ['firebase'])
    .controller('SyncController', ['$scope', '$firebaseObject', function ($scope, $firebaseObject) {

        let ref = firebase.database().ref().child("syncDemoData")

        $scope.data = $firebaseObject(ref)



        // download the data into a local object
        let syncObject = $firebaseObject(ref);

        // synchronize the object with a three-way data binding
        syncObject.$bindTo($scope, "threeWayData")

    }])

