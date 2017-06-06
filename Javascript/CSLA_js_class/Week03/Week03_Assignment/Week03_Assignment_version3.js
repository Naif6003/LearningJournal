// console.log('--------------------------WEEK03 HW CS4220 YOSEP KIM----------------------')

// ### 1. Write a function that counts down from 5. Call this funciton only once. 
//It should then the countdown from 5 to 1 and print each number to the console. (30 pts)
// const count = (currentCount, callback) =>{
// 	setTimeout(() =>{
// 		callback(currentCount)
// 	}, time)
// }
// const countdown = (endCount, time) =>{
// 	for(let i = endCount; i > 0; i--){
// 				count(i, time, result => {
// 			console.log(result)
// 		})
// 	}
// }
// countdown(5, 11)


const count = (currentCount, callback) =>{

		callback(currentCount)

}

const countdown = (endCount, time) =>{
	for(let i = endCount; i > 0; i--){
				count(i, time, result => {
			console.log(result)
		})
	}
}
countdown(5)

// ### 2. Write a function that evaluates a letter using Promises. If the letter is lowercase then it resolves.  
//If the letter is uppercase then it rejects. Write another function that takes an array of letters as an argument 
//and uses your Promise function and is able to print the results. (35 pts)
// const iterateCheck = (arrayValue, time) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			if(arrayValue == arrayValue.toLowerCase())
// 				resolve('This letter was resolved: ' + arrayValue)
// 			else
// 				reject('This letter was rejected: ' + arrayValue)
// 		}, time)
// 	})
// }
// const sortLetters = (array, time) => {
// 	for(let i = 0; i < array.length; i++){
// 		iterateCheck(array[i], time)
// 		.then((result) =>{
// 			console.log(result)
// 		})
// 		.catch((result) =>{
// 			console.log(result)
// 		})
// 	}
// }
// const letters = ['A', 'b', 'c', 'D', 'e']
// sortLetters(letters, 21)


const iterateCheck = (arrayValue) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(arrayValue == arrayValue.toLowerCase())
				resolve('This letter was resolved: ' + arrayValue)
			else
				reject('This letter was rejected: ' + arrayValue)
		}, time)
	})
}
const sortLetters = (array, time) => {
	for(let i = 0; i < array.length; i++){
		iterateCheck(array[i], time)
		.then((result) =>{
			console.log(result)
		})
		.catch((result) =>{
			console.log(result)
		})
	}
}
const letters = ['A', 'b', 'c', 'D', 'e']
sortLetters(letters, 21)

//no need of settimeout
// #### 3.  Write a series of functions that utilize callbacks to determine a word is a palidrome. 
//Each function should call the next in the series. (35 pts)
const compares = (string, time) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(string == reverseWord(string))
				resolve('True')
			else
				reject('False')
		}, time)
	})
}
const reverseWord = (string) =>{
	const splitString = string.split("")
	const reverseString = splitString.reverse()
	const joinString =  reverseString.join("")
	return joinString
}
const print = (string, time) =>{
	compares(string, time)
	.then((result) =>{
		console.log(result)
	})
	.catch((result)=>{
		console.log(result)
	})
}

print("kayak", 36)
print("canoe", 36)

// #### Extra Credit. Write a function that is able to call each of the functions in Q1-Q3 and print the answers in order. 
//Hint: You will need to use promises or callbacks in all the previous homework functions in order to achieve this. (15 pts)
// *Do not use setTimeout() or setInterval() as a solution for the extra credit.  NO credit for setTimeout or setInterval.
const callingAllFunctions = () => {
	countdown(5, 87)
	sortLetters(letters, 88)
	print("kayak",89 )
	print("canoe", 89)

}
callingAllFunctions()


//printing out to console for Question numbers
//------------------------------------------------------------------------------------------/
// function printQuestionNumbers(count, time){
// 	setTimeout(function(){
// 		console.log()
// 		if(count == 4){
// 			console.log("Extra Credit Question" )
// 			return
// 		}
// 		console.log("Question " + count)
// 	}, time);
// }
// function consoleOutQuestionsNumbers(){
// 	let time = 1
// 	for(let i =1; i <=4; i++){
// 		printQuestionNumbers(i, time)
// 		time+=15
// 	}
// }
// consoleOutQuestionsNumbers()
//------------------------------------------------------------------------------------------/

//modify 123, to accept a call, 
//modify them for them to be wrapped in promsies

//eight promiseall 

// const sortLetters = (array) => {
// 	return new Promise((resolve, reject) => {  
// 		for (let i = 0; i < array.length; i++){
// 			if(array[i] == array[i].toUpperCase()){
// 				resolve(array[i])
// 				// console.log("This letter was refject: " + array[i])
// 			}
// 			if (array[i] == array[i].toLowerCase()){
// 				reject(array[i])
// 				// console.log("This letter was refject: " + array[i])
// 			}
// 		}
// 	})
// }
// //forEAcgh, don't need promise all
// Promise.all(letters)
// 	.then((result) => {
// 		console.log('this letter was rejected: ' + result)
//  })
// 	.catch((result) => {
// 		console.log('This letter is resolved: ' + result)
//  })



// const print = (str, callback) => {
// 	callback(str)
// }

// print ('hi', (result) => {
// 	console.log(result)
// })