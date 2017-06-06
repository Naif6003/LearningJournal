
angular.module('groupApp', [])
  .controller('GroupCtrl', function($scope) {

    $scope.groups = [
      {	name:'Socket.IO', 
      	description:'Something about Socket.IO', 
      	students: ['student1', 'student2', 'student3'],
      	tasks: [	{descr: 'do something 1', done: false},
      				{descr: 'do something 2', done: false},
      				{descr: 'do something 3', done: false}]
      	},

      {	name:'Mongoose', 
      	description:'Something about Mongoose', 
      	students: ['studentA', 'studentB', 'studentC'],
      	tasks: [	{descr: 'do something A', done: false},
      				{descr: 'do something B', done: false},
      				{descr: 'do something C', done: false}]
      	}
      ];
 
    $scope.addGroup = function() {
	   	if($scope.newModuleName != null){
	      $scope.groups.push({	name:$scope.newModuleName,
	      						description: $scope.newModuleDescription,
	      						students: [],
	      						tasks: [] });
	      $scope.newModuleName = null; 
	      $scope.newModuleDescription = null;
	    };
	};

    $scope.deleteGroup = function(index) {
      $scope.groups.splice(index, 1);
    };

    $scope.addStudent = function() {
	    if($scope.newStudentName != null){
	      var gname = $scope.groupsName;
	      angular.forEach($scope.groups, function(group) {
	      	if(group.name == gname){
	      		group.students.push($scope.newStudentName);
	      	};
	      });
	      $scope.studentsName = null;
	      $scope.newStudentName = null;
	    };
	};

    $scope.deleteStudent = function(group_name, index) {

      $scope.groups[group_name].students.splice(index, 1);
    };

    $scope.addTask = function() {
		if($scope.newTask != null){
	      var gname = $scope.groupsName2;
	      angular.forEach($scope.groups, function(group) {
	      	if(group.name == gname){
	      		group.tasks.push({descr: $scope.newTask, done: false});
	      	};
	      });
	      $scope.newTask = null;
	    };
	};

    $scope.deleteTask = function(group_name, index) {
      $scope.groups[group_name].tasks.splice(index, 1);
    };

    $scope.remaining = function(group_name) {
      var count = 0;
      angular.forEach($scope.groups, function(group) {
      	if (group.name == group_name){
      		angular.forEach(group.tasks, function(task) {
        		count += task.done ? 0 : 1;
      		});
      	};
 	  });
      return count;
    };
});
