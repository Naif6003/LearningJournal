// console.log('--------------------------WEEK02 HW CS4220 YOSEP KIM----------------------')

// ### 1. Write a function that counts down from 5. Call this funciton only once. 
//It should then the countdown from 5 to 1 and print each number to the console. (30 pts)
    // countDown(5)
    // 5
    // 4
    // 3
    // 2
    // 1

function countdown(second_time){
	setTimeout(function(){
		console.log("Question 1")
		for(let i = second_time ; i > 0; i--){
			console.log(i)
		}
	}, 77);
}

countdown(5)



//   function do_a(){
//   // simulate a time consuming function
//   setTimeout( function(){
//     console.log( '`do_a`: this takes longer than `do_b`' );
//   }, 1000 );
// }
 
// function do_b(){
//   console.log( '`do_b`: this is supposed to come out after `do_a` but it comes out before `do_a`' );
// }
 
// do_a();
// do_b();

// function do_a(){
//   // simulate a time consuming function
//   setTimeout( function(){
//     console.log( '`do_a`: this takes longer than `do_b`' );
//   }, 1000 );
// }
// function do_b(){
//   console.log( '`do_b`: this is supposed to come out after `do_a` but it comes out before `do_a`' );
// }
// do_a();
// do_b();
// const oddEven = (n, callback) => {
// if (n % 2 === 0)
// callback(null, n)
// else
// callback(true, n)
// }
// oddEven(2, (err, result) => {
// if (err)
// console.log('is odd: ' + result)
// else
// console.log('is even: ' + result)
// })
// // // TIMERS
// console.log('Before')
// setTimeout(() => {
//     console.log('inside the timeout')
// }, 1000) // in ms
// // 1000 ms = 1 sec
// console.log('After')

// console.log('Before')
// let count = 0
// const id = setInterval(() => {
//     if (count === 5)
//         clearInterval(id)
//     else
//         console.log('repeat')

//     count++
// }, 10)
// console.log('After')


console.log("Question 2")
// ### 2. Write a function that evaluates a letter using Promises. If the letter is lowercase then it resolves.  
//If the letter is uppercase then it rejects. Write another function that takes an array of letters as an argument 
//and uses your Promise function and is able to print the results. (35 pts)
// -- If a letter is lowercase it should print: 'this letter was resolved: b' <br />
// -- If a letter was uppercase it should print: 'this letter was rejected: A' 

// *DO NOT write 26 'if' or 'switch' statements. <br />
// *Meaning NO: ```if (letter === 'A' || letter === 'B' ... || letter === 'Z')```

//         const letters = ['A', 'b', 'c', 'D', 'e']
//         sortLetters(letters)
        // this letter was rejected: A
        // this letter was resolved: b





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

// Promise.all(letters)
// 	// .then((result) => {
// 	// 	console.log('this letter was rejected: ' + result)
//  // })
// 	.catch((result) => {
// 		console.log('This letter is resolved: ' + result)
//  })

const sortLetters = (array) => {
  const listOfPromises = []
  for (let i = 0; i < array.length; i++){
    listOfPromises.push(singlePromise(array[i]))
    console.log("array[i]: " + array[i])
  }

 // Promise.all(promises)
 //    .then((result) => {
 //   console.log('this letter was resolved: ' + result)
 // })
 //  .catch((result) => {
 //    console.log('This letter is rejected: ' + result)
 // })

Promise.all(listOfPromises)
    .then((result) => {
   console.log('this letter was resolved: ' + result)
 })
  .catch((result) => {
    console.log('This letter is rejected: ' + result)
 })
}


 function singlePromise(arrayValue){
    return new Promise((resolve, reject)=>{
    	setTimeout(() => { 

	        if(arrayValue.toUpperCase()){
	          reject(arrayValue)
	        }
	        if(arrayValue.toLowerCase()){
	          resolve(arrayValue)
	        }
	        console.log("testing aaa::: " + arrayValue)
    	}, 100)
    })
  }



const letters = ['A', 'b', 'c', 'D', 'e']
sortLetters(letters)



// function doSomethingAsync(value) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Resolving " + value);
//       resolve(value);
//     }, Math.floor(Math.random() * 1000));
//   });
// }

// function test() {
//   let i;
//   let promises = [];

//   for (let i = 0; i < 5; ++i) {
//     promises.push(doSomethingAsync(i));
//   }

//   Promise.all(promises)
//       .then((results) => {
//         console.log("All done", results);
//       })
//       .catch((e) => {
//           // Handle errors here
//       });
// }

// test();



// const oddEven = (n) => {
// 	return new Promise((resolve, reject) => {
// 		if (n % 2 === 0)
// 			resolve(n)
// 		else
// 			reject(n)
// 	})
// }
// oddEven(2)
// 	.then((a) => {
// 	console.log('is even: ' + result)
// })
	// .catch((result) => {
// 	console.log('is odd: ' + result)
// })


// if (character == character.toUpperCase()) {
//  alert ('upper case true');
// }
// if (character == character.toLowerCase()){
//  alert ('lower case true');


//pushing everyting inside resolve
const letters = ['A', 'b', 'c', 'D', 'e']
const iterateCheck = (arrayValue, time) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			if(arrayValue == arrayValue.toUpperCase())
				resolve('This letter was rejected: ' + arrayValue)
			if(arrayValue == arrayValue.toLowerCase())
				resolve('This letter was resolved: ' + arrayValue)
		}, time)
	})
}
const sortLetters = (array) => {
	for(let i = 0; i < array.length; i++){
		iterateCheck(array[i], 78)
		.then((result) =>{
			console.log(result)
		})
	}
}
sortLetters(letters)


console.log("Question 3")
// #### 3.  Write a series of functions that utilize callbacks to determine a word is a palidrome. Each function should call the next in the series. (35 pts)

// -- print(): prints the answer to the console. <br />
// -- reverseWord(): reverses the word <br />
// -- compare(): compares the reversed word to the original <br />

//         print('kayak') // true
//         print('canoe') // false




console.log("Extra Credit")
// #### Extra Credit. Write a function that is able to call each of the functions in Q1-Q3 and print the answers in order. Hint: You will need to use promises or callbacks in all the previous homework functions in order to achieve this. (15 pts)
// *Do not use setTimeout() or setInterval() as a solution for the extra credit.  NO credit for setTimeout or setInterval.




