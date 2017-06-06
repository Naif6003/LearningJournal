// console.log('--------------------------WEEK01 CS4220 YOSEPKIM----------------------')

//console.log('##### 1. Write a function that takes a string and reverses it.')
function reverseWord(string){
	let newString = ''
	for (let i = string.length-1; i >=0; --i){

		newString += string[i]
	}
	console.log(newString)
	return newString;

}
reverseWord('hello')
reverseWord('world')
console.log()


//##### 2. Write a function that takes a string and replaces all the vowels (a, e, i, o, u) with *
function replaceVowels(string){
	let replaceVowelString = ''
	for(let i = 0; i < string.length; ++i){
		if ((string[i] == 'a') || (string[i] == 'e') 
			|| (string[i] == 'i') || (string[i] == 'o') 
			|| (string[i] == 'u')){
			replaceVowelString += '*'
			i++
		}
		replaceVowelString += string[i]
	}
	console.log(replaceVowelString)
	return replaceVowelString
}
replaceVowels('javascript') 
replaceVowels('angular')  
console.log()


//##### 3. Write a function that finds letters in the array and outputs their occurances as an object.  The key is the letter and the count is the value. (15 pts)
function countLetters(array){
	// let countingLetters = {}
	const countingLetters = {}
	let count = 0
	for (let i = 0; i < array.length; i++){
		for ( let j = 0; j < array.length; j++){
			if(array[i] == array[j]){
				count = count + 1
				countingLetters[array[i]] = count
			}
		}
		count = 0
	}
	console.log(countingLetters)
}
countLetters(['z', 'y', 'x', 'x', 'w', 'z', 'y', 'u', 'y', 'y'])
    // { z: 2, y: 4, x: 2, w: 1, u: 1 }
console.log()


// ##### 4.  Write a function that creates two new arrays odds and evens. (15 pts)
function oddsAndEvens(array){
	const odds = [] 
	const evens = []
	for (let i = 0; i < array.length; i++){
		if (array[i] % 2 == 0){
			evens.push(array[i])
		}
		if (array[i] % 2 != 0){
			odds.push(array[i])
		}
	}
	console.log("odds = [" + odds + "]")
	console.log("evens = [" + evens + "]")
}
    oddsAndEvens([ 21, 99, 43, 1, 8, 2, 48, 82 ])
    console.log()


//##### 5. Write a function that averages all the numbers including string value numbers in an array.  (15 pts)
function averageArray(array){
	let sumIntValue = 0
	let count = 0
	for(let i = 0; i < array.length; i++){
		if(array[i] > 0){
			sumIntValue+= parseInt(array[i])
			count++
		}
	}
	let averageValue = sumIntValue/count
	console.log(averageValue)
}
averageArray([3, 9, 'hello', 4, '95', 'abc', '1', 8, { key: 'value ' }])
console.log()
// 20


//##### 6.  Write a function that takes an array of cars and a markup percent. Return an object which contains 
//the total markup of all cars and an array of cars with their name as the key and the value as the calculated markup.  (25 pts)
const cars = [
  { type: 'hybrid', wholesale: 25000 },
  { type: 'minivan', wholesale: 28000 },
  { type: 'sedan', wholesale: 31500 },
  { type: 'convertible', wholesale: 45750 }
]

function markupValue(array,markupPercent){
	let total = 0
	const keysAndValues={cars: [], total : 0}
	let cars=[]
	for(let i = 0; i < array.length; i++){
		total+= (array[i].wholesale * (markupPercent/100))
		cars.push({[array[i].type] : (array[i].wholesale * (markupPercent/100)) + array[i].wholesale})

	}
	keysAndValues['cars'] = cars
	keysAndValues['total'] = total
	console.log(keysAndValues)
}
markupValue(cars, 10.5)



// const markupValue = (arr,markup)=>{
// 	const obj = {cars = []}
// for (let i = 0; i < arr.length; i++){
// 	const car = arr[i],
// 	const addMarkup = (car.wholesale = (markup100))
// 	obj.cars.push({[car.type]: car.wholesale + addMarkup
// 		total+= addmarkup
// 	}
// 	obj.total = total
// }
// }