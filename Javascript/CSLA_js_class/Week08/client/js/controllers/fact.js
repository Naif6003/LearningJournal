angular
    .module('FactCtrl', [])
    .controller('FactController', function($scope, FactService) {
        $scope.getMathFact = () => {
            FactService.get({
                type: 'math',
                number: $scope.number,
            }, (response) => {
                $scope.fact = response
            })
        }

        $scope.getMathTrivia = () => {
            FactService.get({
                type: 'trivia',
                number: $scope.number,
            }, (response) => {
                $scope.fact = response

            })  
        }
        $scope.getMathRandom = () => {
            const mathType = ['trivia', 'math', 'date']
            const item = mathType[Math.floor(Math.random()*mathType.length)]
            const randomNumber =  Math.floor(Math.random() * 100)+ 1
            month = Math.floor(Math.random() * 12)+ 1
            if ((month == 1) || (month == 3) || (month == 5) || (month == 7) || (month == 8) || (month == 10) || (month == 12))
            {
                days = Math.floor(Math.random() * 31)+ 1
            }
            if(month == 2){
                days = Math.floor(Math.random() * 29)+ 1
            }
            else{
                days = Math.floor(Math.random() * 30)+ 1
            }
            dayMonth = ""+ month+"/"+days+""

            if( item === 'math'){
                $scope.number = randomNumber
            }
            if(item ==='trivia'){
                $scope.number = randomNumber
            }

            if(item ==='date'){
                $scope.number = dayMonth
                $scope.dateInput = $scope.number
            }

            FactService.get({
                type: item,
                number: $scope.number,
            }, (response) => {
                $scope.fact = response
            })        
        }
        $scope.getMathDate = () => {
            let dayMonth = '' //const doesn't output the darn thing! so its let
            dayMonth= $scope.number
            $scope.dateInput= ''+ dayMonth +''  

            FactService.get({
                type: 'date',
                number: $scope.number,
            }, (response) => {
                $scope.fact = response
            
            })
        }
    })

           