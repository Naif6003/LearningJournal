const
    _ = require('underscore-node')
    blueColorFont = '\x1b[34m' //blue without underscore
    redColorFont = '\x1b[31m'  //red in underscore
    yellowColorFont = '\x1b[33m'


//object,  values, each, map,

console.log(redColorFont,'---------------_.object--------------') 
const csula = _.object(
		['C', 'S', 'U', 'L', 'A'], 
		['California', 'State', 'University', 'Los','Angeles']
	)
console.log( csula) //expected-> { C: 'California', S: 'State', U: 'University', L: 'Los', A: 'Angeles' }


console.log( blueColorFont,'---------------_.values--------------') 
const csulaValues = _.values(csula)
console.log(csulaValues) //expected-> [ 'California', 'State', 'University', 'Los', 'Angeles' ]


console.log(yellowColorFont,'---------------_.each--------------') 
const newArray = []
_(csulaValues).each(function(elem,key){
		newArray.push([key,elem])
	})
console.log( newArray) //[ [ 0, 'California' ],[ 1, 'State' ],[ 2, 'University' ],[ 3, 'Los' ],[ 4, 'Angeles' ] ]



console.log(redColorFont,'---------------_.map--------------') 

// map_.map(list, iteratee, [context]) Alias: collect 
// Produces a new array of values by mapping each value in list through a transformation function (iteratee). 
// The iteratee is passed three arguments: the value, then the index (or key) of the iteration, and finally a reference to the entire list.








convertToObjectUnderscore =(array)=>{
	const newObjectFrom2DArray = _.object(_.map(array, _.values))
	console.log(blueColorFont, newObjectFrom2DArray)
}
const newObject = convertToObjectUnderscore(newArray) 	//expected-> ?




convertToArrayUnderscore = (objectParameter) =>{
	const array = []
	_(objectParameter).each(function(elem,key){
		array.push([key,elem])
	})
	console.log(yellowColorFont, array); 
}
convertToArrayUnderscore(csula)		//expected-> ?







// t = _.map(csula, _.values)
// console.log(t)

// _.object()
// a = _.map([1, 2, 3], function(num){ return num * 3; });
// // => [3, 6, 9]
// b = _.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
// // => [3, 6, 9]
// c = _.map([[1, 2], [3, 4]], _.first);
// // => [1, 3]

// console.log(a)
// console.log(b)
// console.log(c)



// d = _.map({csulaArray, function(num){
// 	return num
// }})

// console.log(d)






// values_.values(object) 
// Return all of the values of the object's own properties.

_.values({one: 1, two: 2, three: 3})
// => [1, 2, 3]


// each_.each(list, iteratee, [context]) Alias: forEach 
// Iterates over a list of elements, yielding each in turn to an iteratee function. 
// The iteratee is bound to the context object, if one is passed. 
// Each invocation of iteratee is called with three arguments: (element, index, list). 
// If list is a JavaScript object, iteratee's arguments will be (value, key, list). 
// Returns the list for chaining.

// _.each([1, 2, 3],  console.log('11'));
// => alerts each number in turn...
// _.each({one: 1, two: 2, three: 3}, console.log('11'));
// => alerts each number value in turn...











// ##### 4. Write a Function that takes a 2D array and converts it to an object.  Each item in the array 
// 			contains an array of only 2 items - the first item is the key and the second is the value
console.log(yellowColorFont, "\n		Week2 HW Question 4			")

const media_arr = [['media', 'facebook'], ['company', 'github'], ['likes', 58445]]	
convertToObject = (array) => {
      const newObject = {}
      array.forEach((item) => {
            newObject[item[0]] = item[1]
      })
      console.log(blueColorFont, newObject)
}
convertToObject(media_arr) 		//expected-> { media: 'facebook', company: 'github', likes: 58445 }

			

//-------------------------------underscore version	
convertToObjectUnderscore =(array)=>{
	const newObjectFrom2DArray = _.object(_.map(array, _.values))
	console.log(redColorFont, newObjectFrom2DArray)
}
convertToObjectUnderscore(media_arr) 	//expected-> ?






// ##### 5. Write a Function that takes an object and converts it to a 2D array.  
console.log(yellowColorFont, "\n	 	Week2 HW Question 5			")
const media_obj = { media: 'facebook', company: 'github', likes: 58445 }
convertToArray = (object) =>{
	  const array = []
      Object.keys(object).forEach((key) =>{
            array.push([key,object[key]])
      })
      console.log(blueColorFont, array)
}
convertToArray(media_obj) 		//expected-> [['media', 'facebook'], ['company', 'github'], ['likes', 58445]]


//-------------------------------underscore version	
convertToArrayUnderscore = (objectParameter) =>{
	const array = []
	_(objectParameter).each(function(elem,key){
		array.push([key,elem])
	})
	console.log(redColorFont, array); 
}
convertToArrayUnderscore(media_obj)		//expected-> ?






