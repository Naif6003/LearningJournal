
	gameApp.controller('GameController', ['$firebaseArray', '$routeParams', '$location', function($firebaseArray, $routeParams, $location){
        let ref = firebase.database().ref().child('games')
        this.games = $firebaseArray(ref)
    }])


    gameApp.controller('GamesController', ['$scope', '$firebaseArray','$routeParams', '$location', 
            function($scope, $firebaseArray, $routeParams, $location, firebaseObject){
        databaseURL= "https://tictactoe-angular.firebaseio.com"
        $scope.firebaseObject = firebaseObject
        let ref = firebase.database().ref().child('games')
        $scope.games = $firebaseArray( ref )
        let countMark = 0
        $scope.show=false;
        $scope.playerShow = false
        let letter = 'O'
        $scope.currentNote = {}

        $scope.setCurrentNote = function(note){
            $scope.currentNote = note
        }
        $scope.saveNote = function(){
            $scope.games.$save($scope.currentNote)
        }
        $scope.currentNote.player2 = ''

        $scope.addPlayer2 = function(){
        	$scope.games.$save($scope.currentNote)
        }
	    $scope.setCurrentSqaure = function(row, col) {
	    	countMark++
	    	console.log('countMark: ' + countMark + ' letter: ' + letter)
	    	if(countMark % 2 == 0 ){
	    		letter = 'X'
	    		console.log('countMark: ' + countMark + ' letter: ' + letter)
	    	}
	    	else if(countMark % 2 ==1){
	    		console.log(countMark)
	    		letter = 'O'
	    	}
		console.log('row: ' + row + ' col: ' + col)
		for (let rows in [0,1,2]) {
	      for (let cols in [0,1,2]) {
	      	checkRows()
	      	checkCols()
	      	checkDiag()
	        	$scope.currentNote.tictactoeBoard[row][col] = letter
	        	if($scope.currentNote.title =='Player 1 to move'){
	        		$scope.currentNote.title='Player 2 to move'
	        		$scope.currentNote.playerTurn = $scope.currentNote.player1
	        		$scope.games.$save($scope.currentNote) 
	        	}
	        	else if($scope.currentNote.title =='Player 2 to move'){
	        		$scope.currentNote.title='Player 1 to move'	 
	        		$scope.currentNote.playerTurn = $scope.currentNote.player2
	        		$scope.games.$save($scope.currentNote)       		
	        	}
	        	// $scope.games.$save($scope.currentNote)
		      }
		    }
	    }

	    checkRows = () =>{
	    	if ($scope.currentNote.tictactoeBoard[0][0] != '#' && 
	    		$scope.currentNote.tictactoeBoard[0][0] === $scope.currentNote.tictactoeBoard[0][1] &&
	    		$scope.currentNote.tictactoeBoard[0][1] === $scope.currentNote.tictactoeBoard[0][2])
				{
	    		$scope.currentNote.title = 'GAMEOVER: ' + $scope.currentNote.playerTurn +' WINS'
	    			$scope.games.$save($scope.currentNote)
	    		}
	    	else if ($scope.currentNote.tictactoeBoard[1][0] != '#' && 
	    		$scope.currentNote.tictactoeBoard[1][0] === $scope.currentNote.tictactoeBoard[1][1] &&
	    		$scope.currentNote.tictactoeBoard[1][1] === $scope.currentNote.tictactoeBoard[1][2]) 
				{
	    		$scope.currentNote.title = 'GAMEOVER: ' + $scope.currentNote.playerTurn +' WINS'
	    			$scope.games.$save($scope.currentNote)
	    		}
	    	else if ($scope.currentNote.tictactoeBoard[2][0] != '#' && 
	    		$scope.currentNote.tictactoeBoard[2][0] === $scope.currentNote.tictactoeBoard[2][1] &&
	    		$scope.currentNote.tictactoeBoard[2][1] === $scope.currentNote.tictactoeBoard[2][2]) 
				{
	    		$scope.currentNote.title = 'GAMEOVER: ' + $scope.currentNote.playerTurn +' WINS'
	    			$scope.games.$save($scope.currentNote)
	    		}
	    }

	    checkCols = () =>{
	    	if ($scope.currentNote.tictactoeBoard[0][0] != '#' && 
	    		$scope.currentNote.tictactoeBoard[0][0] === $scope.currentNote.tictactoeBoard[1][0] &&
	    		$scope.currentNote.tictactoeBoard[1][0] === $scope.currentNote.tictactoeBoard[2][0]){
	    		$scope.currentNote.title = 'GAMEOVER: ' + $scope.currentNote.playerTurn +' WINS'
	    			$scope.games.$save($scope.currentNote)
	    		}
	    	else if ($scope.currentNote.tictactoeBoard[0][1] != '#' && 
	    		$scope.currentNote.tictactoeBoard[0][1] === $scope.currentNote.tictactoeBoard[1][1] &&
	    		$scope.currentNote.tictactoeBoard[1][1] === $scope.currentNote.tictactoeBoard[2][1]) {
	    		$scope.currentNote.title = 'GAMEOVER: ' + $scope.currentNote.playerTurn +' WINS'
	    			$scope.games.$save($scope.currentNote)
	    		}
	    	else if ($scope.currentNote.tictactoeBoard[0][2] != '#' && 
	    		$scope.currentNote.tictactoeBoard[0][2] === $scope.currentNote.tictactoeBoard[1][2] &&
	    		$scope.currentNote.tictactoeBoard[1][2] === $scope.currentNote.tictactoeBoard[2][2]) {
	    		$scope.currentNote.title = 'GAMEOVER: ' + $scope.currentNote.playerTurn +' WINS'
	    			$scope.games.$save($scope.currentNote)
	    		}
	    }

	    checkDiag = () =>{
	    	if ($scope.currentNote.tictactoeBoard[0][0] != '#' && 
	    		$scope.currentNote.tictactoeBoard[0][0] === $scope.currentNote.tictactoeBoard[1][1] &&
	    		$scope.currentNote.tictactoeBoard[1][1] === $scope.currentNote.tictactoeBoard[2][2]){
	    		$scope.currentNote.title = 'GAMEOVER: ' + $scope.currentNote.playerTurn +' WINS'
	    			$scope.games.$save($scope.currentNote)
	    		}
	    	else if ($scope.currentNote.tictactoeBoard[0][2] != '#' && 
	    		$scope.currentNote.tictactoeBoard[0][2] === $scope.currentNote.tictactoeBoard[1][1] &&
	    		$scope.currentNote.tictactoeBoard[1][1] === $scope.currentNote.tictactoeBoard[2][0]) {
	    		$scope.currentNote.title = 'GAMEOVER: ' + $scope.currentNote.playerTurn +' WINS'
	    			$scope.games.$save($scope.currentNote)
	    		}
	    }


		$scope.addMessage = function(){
			$scope.games.$save($scope.currentNote)
		}



$scope.currentNote.chat=[]

 $scope.items = [];

  $scope.itemsToAdd = [{
    player: '',
    message: ''
  }];

  $scope.add = function(itemToAdd) {

    var index = $scope.itemsToAdd.indexOf(itemToAdd);

    $scope.itemsToAdd.splice(index, 1);

    $scope.items.push(angular.copy(itemToAdd))


    // $scope.currentNote.chat.push(angular.copy(itemToAdd))

	$scope.games.$save($scope.currentNote)
    $scope.addNew()

  }





  $scope.addNew = function() {
    $scope.itemsToAdd.push({
      player: '',
      message: ''
    })
  }


}])


