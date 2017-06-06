const
    _ = require('underscore-node')
    blueColorFont = '\x1b[34m'  
    redColorFont = '\x1b[31m'   
    yellowColorFont = '\x1b[33m' 

// We are going to sovle HW2 questions 4 and 5 with underscore
//_.object, _.values, _.each, _.map

console.log(redColorFont,'\n---------------_.object--------------') 

const csula = _.object(
		['C', 'S', 'U', 'L', 'A'], 
		['California', 'State', 'University', 'Los','Angeles']
	)
console.log( csula) //-> { C: 'California', S: 'State', U: 'University', L: 'Los', A: 'Angeles' }


console.log( blueColorFont,'\n---------------_.values--------------') 

const csulaValues = _.values(csula)
console.log(csulaValues) //-> [ 'California', 'State', 'University', 'Los', 'Angeles' ]



console.log(yellowColorFont,'\n---------------_.each--------------') 

const newArray = []
_(csulaValues).each(function(elem,key){
		newArray.push([key,elem])
	})
console.log( newArray) //->[ [ 0, 'California' ],[ 1, 'State' ],[ 2, 'University' ],[ 3, 'Los' ],[ 4, 'Angeles' ] ]



console.log(redColorFont,'\n---------------_.map--------------') 

const keys = _.map(newArray, function(value, key){ return key  })
console.log(keys) //->[ 0, 1, 2, 3, 4 ]

// ##### 4. Write a Function that takes a 2D array and converts it to an object.  
// Each item in the array contains an array of only 2 items - 
// the first item is the key and the second is the value


convertToObjectUnderscore =(array)=>{
	const newObjectFrom2DArray = _.object(_.map(array, _.values))
	console.log(blueColorFont, newObjectFrom2DArray)
}
const newObject = convertToObjectUnderscore(newArray) 

//[ [ 0, 'California' ],[ 1, 'State' ],[ 2, 'University' ],[ 3, 'Los' ],[ 4, 'Angeles' ] ]
// { '0': 'California','1': 'State','2': 'University','3': 'Los','4': 'Angeles' }


// ##### 5. Write a Function that takes an object and converts it to a 2D array.  
convertToArrayUnderscore = (objectParameter) =>{
	const array = []
	_(objectParameter).each(function(elem,key){
		array.push([key,elem])
	})
	console.log(yellowColorFont, array); 
}
convertToArrayUnderscore(csula)		

// C: 'California', S: 'State', U: 'University', L: 'Los', A: 'Angeles' }
//[ [ 'C', 'California' ],[ 'S', 'State' ],[ 'U', 'University' ],[ 'L', 'Los' ],[ 'A', 'Angeles' ] ]












