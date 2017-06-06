// console.log('--------------------------WEEK03 HW CS4220 YOSEP KIM----------------------')

// ### 1. Write a function that counts down from 5. Call this funciton only once. 
//It should then the countdown from 5 to 1 and print each number to the console. (30 pts)
// const counting = (currentCount, callback) =>{
//  setTimeout(() =>{
//      callback(currentCount)
//  }, 11)
// }


// // // TIMERS
// console.log('Before')
// setTimeout(() => {
//     console.log('inside the timeout')
// }, 10) // in ms
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
// }, 55)
// console.log('After')


// setTimeout(function(){
//   console.log('Hello world 5'); // It's waiting like a normal person at a queue
// }, 0);

// setImmediate(function(){
//   console.log('Hello world 4'); 
//   // It's like get to last and be take care of first 
//   // but always after of .nextStick and before of setInterval(, 0)
// });

// process.nextTick(function(){
//    console.log('Hello world 3'); // It's like be at the bottom at this file
// });

// console.log('Hello world 1');
// console.log('Hello world 2');



function async(fn, callback) {
    setTimeout(function() {
        fn();
        callback();
    }, 0);
}
function sync(fn) {
    fn();
}
function foo(){
    console.log('foo');
}

console.log('SYNC TEST --------------');
//synchronous
console.log('start sync');
sync(foo);
console.log('end sync');
console.log('');
console.log('ASYNC TEST --------------');
//asynchronous
console.log('start async');
async(foo, function(){ 
    console.log('async callback');
});
console.log('end async');


console.log('ASYNC TEST 2--------------');
//asynchronous
console.log('start async');

async(foo, function(){ 
    for(let i = 0; i < 5; i++){
        console.log('i: ' + i);
    }
    
});


async(foo, function(){ 
    console.log('async callback 3');
});


const counting = (currentCount, callback) =>{
 const id = setInterval(() =>{
     if(currentCount == 0){
         clearInterval(id)
     }
     else
         callback(currentCount)
     currentCount--
 }, 0)

}

const countdown = (endCount) =>{
 // for(let i = endCount; i > 0; i--){
         counting(endCount, result => {
         console.log(result)
     })
 // }
}
countdown(5)


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
     letters.forEach((letter)=>{
         iterateCheck(letter)
         .then((result) =>{
             console.log(result)
                 flag++
                 if(flag === array.length){
                 callback()
             }
         })
         .catch((result) =>{
             flag++
             console.log(result)
             if(flag === array.length){
                 callback()
             }
         })
     })
 }




// //promise
// // ### 2. Write a function that evaluates a letter using Promises. If the letter is lowercase then it resolves.  
// //If the letter is uppercase then it rejects. Write another function that takes an array of letters as an argument 
// //and uses your Promise function and is able to print the results. (35 pts)
// const iterateCheck = (arrayValue, callback) => {
//  return new Promise((resolve, reject) => {
//      if(arrayValue == arrayValue.toLowerCase())
//          resolve('This letter was resolved: ' + arrayValue)
//      else
//          reject('This letter was rejected: ' + arrayValue)
//  })
// }

// const sortLetters = (array) => {
//  for(let i = 0; i < array.length; i++){
//      iterateCheck(array[i])
//      .then((result) =>{
//          console.log(result)
//      })
//      .catch((result) =>{
//          console.log(result)
//      })
//  }
// }

// const letters = ['A', 'b', 'c', 'D', 'e']
// sortLetters(letters)

// //callbacks
// // #### 3.  Write a series of functions that utilize callbacks to determine a word is a palidrome. 
// //Each function should call the next in the series. (35 pts)

// const reverseString = (string, callback) => {
//  const splitString = string.split("")
//  const reverseString = splitString.reverse()
//  const joinString =  reverseString.join("")
//  callback(joinString)
// }

// const compare =(originalString, callback) =>{
//  reverseString(originalString, result =>{
//      if(originalString == result)
//          console.log("TRUE")
//      else
//          console.log("FALSE")    
//  })
// }

// const print = (string) =>{
//  compare(string, result =>{
//      console.log(result)
//  })
// }
// print("kayak")
// print("canoe")


// // #### Extra Credit. Write a function that is able to call each of the functions in Q1-Q3 and print the answers in order. 
// //Hint: You will need to use promises or callbacks in all the previous homework functions in order to achieve this. (15 pts)
// // *Do not use setTimeout() or setInterval() as a solution for the extra credit.  NO credit for setTimeout or setInterval.

// const callingAllFunction = () =>{
//  countdown(5)
//  sortLetters(letters)
//  print("kayak")
//  print("canoe")
// }