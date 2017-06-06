var myApp = angular.module('myApp', []);

myApp.factory('Data', function(){

    var service = {
        FirstName: '',
        LastName: '',
        setFirstName: function(name) {
            // this is the trick to sync the data
            // so no need for a $watch function
            // call this from anywhere when you need to update FirstName
            angular.copy(name, service.FirstName); 
        }
    };
    return service;
});


// Step 1 Controller
myApp.controller('FirstCtrl', function( $scope, Data ){
	$scope.itms = []
	$scope.itmsToAdd = [{
		firstName: '',
		lastName: ''
	}]


	  $scope.add = function(itmToAdd) {

	    var index = $scope.itemsToAdd.indexOf(itmToAdd);

	    $scope.itemsToAdd.splice(index, 1);

	    $scope.items.push(angular.copy(itmToAdd))
	  }

});

// Step 2 Controller
myApp.controller('SecondCtrl', function( $scope, Data ){
	$scope.itms = []
	$scope.itmsToAdd = [{
		firstName: '',
		lastName: ''
	}]

    $scope.FirstName = Data.FirstName;

	  $scope.add = function(itmToAdd) {

	    var index = $scope.itemsToAdd.indexOf(itmToAdd);

	    $scope.itemsToAdd.splice(index, 1);

	    $scope.items.push(angular.copy(itmToAdd))
	  }

});

myApp.controller('MainCtrl', function($scope,Data){
	 $scope.items = [];

  $scope.itemsToAdd = [{
    firstName: '',
    lastName: ''
  }];

  $scope.add = function(itemToAdd) {

    var index = $scope.itemsToAdd.indexOf(itemToAdd);

    $scope.itemsToAdd.splice(index, 1);

    $scope.items.push(angular.copy(itemToAdd))
  }

  $scope.addNew = function() {

    $scope.itemsToAdd.push({
      firstName: '',
      lastName: ''
    })
  }
})