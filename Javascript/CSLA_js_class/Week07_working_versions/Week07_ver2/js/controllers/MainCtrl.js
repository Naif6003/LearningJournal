
angular.module('myApp').controller('MainController', function($scope) {
  $scope.modules = [];

  $scope.modulesToAdd = [{
    packageName: '',
    webLink: '',
  }];

  $scope.add = function(moduleToAdd) {

    const index = $scope.modulesToAdd.indexOf(moduleToAdd);

    $scope.modulesToAdd.splice(index, 1);

    $scope.modules.push(angular.copy(moduleToAdd))
  }


  $scope.users = ['a', 'b', 'c']

  $scope.addNew = function() {
    $scope.modulesToAdd.push({
      packageName: '',
      webLink: ''
    })
  }

});



angular.module('myApp').controller('MainController', function($scope) {
  $scope.modules = [];

  $scope.modulesToAdd = [{
    packageName: '',
    webLink: '',
  }];

  $scope.add = function(moduleToAdd) {

    const index = $scope.modulesToAdd.indexOf(moduleToAdd);

    $scope.modulesToAdd.splice(index, 1);

    $scope.modules.push(angular.copy(moduleToAdd))
  }


  $scope.addNew = function() {
    $scope.modulesToAdd.push({
      packageName: '',
      webLink: ''
    })
  }

});







// angular.module('myApp').controller('MainController', function($scope) {
//   $scope.modules = []
//   $scope.users = []


//   $scope.usersToAdd = [{
//     	firstName:'',
//     	lastName:'',
//     	email:'',
//     	module:'',
// 	  }]

//   $scope.modulesToAdd = [{
//   	id : count++,
//     packageName: '',
//     webLink: '',
//  //    users : [{
//  //    	firstName:'',
//  //    	lastName:'',
//  //    	email:'',
//  //    	module:'',
// 	// }]
//   }]


//   $scope.add = function(moduleToAdd) {
//     const index = $scope.modulesToAdd.indexOf(moduleToAdd)
//     $scope.modulesToAdd.splice(index, 1)
//     $scope.modules.push(angular.copy(moduleToAdd))
//   }


//   $scope.addNew = function() {
//     $scope.modulesToAdd.push({
//       id : count++,
//       packageName: '',
//       webLink: '',
//    //    users : [{
//    //  	firstName:'',
//    //  	lastName:'',
//    //  	email:'',
//    //  	module:'',
// 	  // }]
     
//     })
//   }



// })


// $scope.addUser = function() =>{
// 	$scope.usersToAdd.push({
//     	firstName:'',
//     	lastName:'',
//     	email:'',
//     	module:'',
// 	})
// }
