  const config = {
    apiKey: "AIzaSyBY7IOYUvqlxDN3DD5IRrMK3KPnwcvMgqc",
    authDomain: "cs4220-examples-6a6ee.firebaseapp.com",
    databaseURL: "https://cs4220-examples-6a6ee.firebaseio.com",
    projectId: "cs4220-examples-6a6ee",
    storageBucket: "cs4220-examples-6a6ee.appspot.com",
    messagingSenderId: "614218711326"
  };

firebase.initializeApp(config)


// Initialize our Angular Application
angular.module('notesApp', ['firebase'])
    .controller('NotesController', ['$scope', '$firebaseArray', function($scope, $firebaseArray){

        let ref = firebase.database().ref().child('notes')

        $scope.notes = $firebaseArray( ref )

        $scope.currentNote = {}

        $scope.newNote = function(){
           $scope.notes.$add({ title: 'Untitled', body: ''})
        }
        $scope.setCurrentNote = function(note){
            $scope.currentNote = note
        }
        $scope.saveNote = function(){
            $scope.notes.$save($scope.currentNote)
        }

    }])
