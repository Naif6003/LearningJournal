
angular.module('myApp').controller('MainController', function($scope) {
  $scope.modules = []
  $scope.users = []
  $scope.currentModule = ''
  let counter = 0
  let userCounter = 0

//create an empty object because it won't work when this is not created first
  $scope.modulesToAdd = [{
  	id:counter++,
    packageName: '',
    webLink: '',
    users:[]
  }];

//creating a method for putting data into the object from the view, for modules
  $scope.add = function(moduleToAdd) {
    $scope.modulesToAdd.push({
      id:counter++,
      packageName: '',
      webLink: '', 
      users:[]
    })
    const index = $scope.modulesToAdd.indexOf(moduleToAdd);
    $scope.modulesToAdd.splice(index, 1);
    $scope.modules.push(angular.copy(moduleToAdd))
  }


//create an empty object because it won't work when this is not created first
  $scope.usersToAdd = [{
  	id: userCounter++,
  	firstName: '',
  	lastName: '',
  	email: '',
  }]

//creating a method for putting data into the object from the view, for users
  $scope.addUser = function(userToAdd) {
  	$scope.selectedModule 
    $scope.usersToAdd.push({
		id: userCounter++,
		firstName: '',
	 	lastName: '',
		email: '',
    })
  
    const index = $scope.usersToAdd.indexOf(userToAdd)
    $scope.usersToAdd.splice(index, 1)
    $scope.users.push(angular.copy(userToAdd))
  }

  $scope.choice=function(selectedModule){
	  $scope.userChooseModule =selectedModule
	  console.log( $scope.userChooseModule)
	}
})


