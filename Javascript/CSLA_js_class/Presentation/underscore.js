// console.log('--------------------------WEEK03 HW CS4220 YOSEP KIM----------------------')

// ### 1. Write a function that counts down from 5. Call this funciton only once. 
//It should then the countdown from 5 to 1 and print each number to the console. (30 pts)

function countdown(count, callback){
	const id = setInterval(function(){
		for(let i = count ; i > 0; i--){
			console.log(i)
			if (i  === count){
				clearInterval(id)
		        callback()
	    	}
		}
	}, 111);
}

// countdown(5)
//was playing with the extra credit callback wrapping! 
//countdown()

countdown(5, function(){})

// // ### 2. Write a function that evaluates a letter using Promises. If the letter is lowercase then it resolves.  
// //If the letter is uppercase then it rejects. Write another function that takes an array of letters as an argument 
// //and uses your Promise function and is able to print the results. (35 pts)

const iterateCheck = (arrayValue) => {
	return new Promise((resolve, reject) => {
		if(arrayValue == arrayValue.toLowerCase())
			resolve('This letter was resolved: ' + arrayValue)
		else
			reject('This letter was rejected: ' + arrayValue)
	})
}

const sortLetters = (array, callback) => {
	let flag = 0
	for(let i = 0; i < array.length; i++){
		iterateCheck(array[i])
		.then((result) =>{
			console.log(result)
			flag++
			if(flag === array.length){
				callback()
			}
		})
		.catch((result) =>{
			console.log(result)
			flag++
			if(flag === array.length){
				callback()
			}
		})
	}
}

const letters = ['A', 'b', 'c', 'D', 'e']

//was playing with the extra credit callback wrapping! 
//sortLetters(letters)
sortLetters(letters, function(){})

//callbacks
// #### 3.  Write a series of functions that utilize callbacks to determine a word is a palidrome. 
//Each function should call the next in the series. (35 pts)

const reverseString = (string, callback) => {
	const splitString = string.split("")
	const reverseString = splitString.reverse()
	const joinString =  reverseString.join("")
	callback(joinString)
}
const compare =(originalString, callback) =>{
	reverseString(originalString, result =>{
		if(originalString === result){
			console.log("TRUE")
			callback()
		}
		else{
			console.log("FALSE")
			callback()	
		}
	})
}

const print = (string, callback ) =>{
	compare(string, callback, result =>{
		console.log(result)
		callback()
	})
}

//was playing with the extra credit callback wrapping! 
// print("kayak")
// print("canoe")

print("kayak", function(){})
print("canoe" ,function(){})



// #### Extra Credit. Write a function that is able to call each of the functions in Q1-Q3 and print the answers in order. 
//Hint: You will need to use promises or callbacks in all the previous homework functions in order to achieve this. (15 pts)
// *Do not use setTimeout() or setInterval() as a solution for the extra credit.  NO credit for setTimeout or setInterval.
// 

const callingAllFunctions = () => {
	countdown(5, () =>{
		sortLetters(letters, () =>{
              print("karak", () => {
                    print("conoe", () => {})
                })
             })
		})
	}

callingAllFunctions()

