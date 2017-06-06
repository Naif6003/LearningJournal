
angular.module('myApp').controller('MainController', function($scope) {
  $scope.modules = []
  $scope.users = []
  $scope.selectedModule ={}
  $scope.selectedUser = {}
  let counter = 0       //need to add counter or there's a bug 
  let packageNameVersions = 1
  let originalPackageName = ''


//create an empty object because it won't work when this is not created first
  $scope.modulesToAdd = [{
  	id:counter++,
    packageName: '',
    webLink: '',
    originalPackageName : '',
    packageNameVersions : 1,
    users:[]
  }]

//creating a method for putting data into the object from the view, for modules
  $scope.add = function(moduleToAdd) {
    let moduleCount = 0
    $scope.modulesToAdd.push({
      id:counter++,
      packageName: '',
      webLink: '', 
      originalPackageName: '',
      packageNameVersions: 1,
      users:[]
    })
    $scope.webLink = moduleToAdd.webLink
    moduleToAdd.webLink = 'http://' + moduleToAdd.webLink 

for (let key in $scope.modules){
  if((moduleToAdd.packageNameVersions === 1 ) && ($scope.modules[key].originalPackageName === '')){
      $scope.modules[key].originalPackageName = $scope.modules[key].packageName
      moduleToAdd.originalPackageName = $scope.modules[key].originalPackageName 
  }
  if($scope.modules[key].originalPackageName == moduleToAdd.packageName){
    $scope.modules[key].packageNameVersions++
    $scope.modules[key].id++
    moduleToAdd.packageNameVersions = $scope.modules[key].packageNameVersions
    let count = 1
    for(let flag in $scope.modules){
          moduleToAdd.packageName = $scope.modules[key].originalPackageName + ' - Group '  + moduleToAdd.packageNameVersions
        
        if(moduleToAdd.originalPackageName === $scope.modules[key].originalPackageName ){
            if(moduleToAdd.packageNameVersions === $scope.modules[key].packageNameVersions){
                                count++
            }
           }
        
           if(moduleToAdd.packageNameVersions ===count ){
            // $scope.test2 = 'inside test1'

            for(let i in $scope.modules){ 
              if((moduleToAdd.originalPackageName == $scope.modules[i].originalPackageName)){
                $scope.modules[i].packageName = $scope.modules[i].originalPackageName + ' - Group '  + 1
                // $scope.test = 'this is a test 2'
              }
            }
          }
//          else if(moduleToAdd.packageNameVersions >2){
//            // $scope.test2 = 'inside test3'
//            moduleToAdd.packageName = $scope.modules[key].originalPackageName + ' - Group '  + moduleToAdd.packageNameVersions
//          }
      }
    }
   }
    const index = $scope.modulesToAdd.indexOf(moduleToAdd)
    $scope.index = index
    $scope.modulesToAdd.splice(index, 1)
    $scope.modules.push(angular.copy(moduleToAdd))
  }

  $scope.webAddress = function (url){
  $window.open(url);
}

//create an empty object because it won't work when this is not created first
  $scope.usersToAdd = [{
  	firstName: '',
  	lastName: '',
  	email: '',
  }]

//creating a method for putting data into the object from the view, for users
  $scope.addUser = function(userToAdd) {
    $scope.usersToAdd.push({
  		firstName: '',
  	 	lastName: '',
  		email: '',
    })
    const indexAddUser = $scope.usersToAdd.indexOf(userToAdd)
    $scope.usersToAdd.splice(indexAddUser, 1)
    $scope.users.push(angular.copy(userToAdd))
    $scope.selectedModule.users.push(angular.copy(userToAdd))
    $scope.selectedUser = userToAdd
  }

    $scope.deleteModule = (id) => {
        const index =  $scope.modules.map(function(moduleToDelete) {return moduleToDelete.id }).indexOf(id)
        $scope.modules.splice(index,1)

        if($scope.modules.length<2){  
            for(let i in $scope.modules){ 
                $scope.modules[i].packageName = $scope.modules[i].originalPackageName 
            }
        }
    }

})


