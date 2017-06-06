// ##### 1. Write a function that takes a string and reverses it. *Use only string or array methods. 
//     reverseWord('hello') // olleh
//     reverseWord('world') // dlrow
console.log("Question 1")

function reverseWord(string){
	let stringSplit = string.split("")
	let stringSplitReverse = stringSplit.reverse()
	let stringSplitReverseJoined = stringSplitReverse.join("")
	console.log(stringSplitReverseJoined)
}
reverseWord('hello')
reverseWord('world')
console.log()

// ##### 2. Write a function that takes a string and replaces all the vowels (a, e, i, o, u) with *Use only string or array methods.
//     replaceVowels('javascript') // j*v*scr*pt
//     replaceVowels('angular')    // *ng*l*r
console.log("Question 2")

function replaceVowels(string){

      let newStarVowelString = string.replace(/[aeiou]/g, '*')
      console.log(newStarVowelString)

      // console.log(string.replace(/[aeiou]/g, "*"));
}
    replaceVowels('javascript') // j*v*scr*pt
    replaceVowels('angular')    // *ng*l*r
    console.log()

// ##### 3. Write a Calculator Class
// The class should optionally accept a number when instantiated. Use default values where applicable.
// The class should have the following methods:
// - add(): adds a number to the total <br />
// - subtract(): subtracts a number from the total <br />
// - multiply(): multiplys the total by a number <br />
// - divide(): divides the total by a number <br />
// - clear(): clears the total <br />
// - print: prints the total

      // const calculator_v1 = new Calculator(2)
      // calculator_v1
      //       .multiply(3)
      //       .add(10)
      //       .divide(2)
      //       .substract(4)
      //       .print // 4
      //       .clear()
      //       .print // 0

      // const calculator_v2 = new Calculator()
      // calculator_v2
      //       .multiply(3)
      //       .add(10)
      //       .divide(2)
      //       .substract(4)
      //       .print // 1
      //       .clear()
      //       .print // 0
console.log("Question 3")
class Calculator{

      // function Foo () {
      //     this.bar = 'baz';
      // }

      // Foo.prototype.init_1 = function (bar) {
      //     this.bar = bar;
      //     return this;
      // };

      // Foo.prototype.init_2 = function (baz) {
      //     this.bar = 'something to do with '+baz;
      //     return this;
      // };

      // constructor(){
      //       this.value = 0;
      // }

      constructor(value){
            if(isNaN(value)){
                  this.value = 0
            }
            else{
                  this.value = value
            }
            return this.value
      }

      multiply(value){
            this.value*=value
            return this.value
      }

      add(value){
            this.value = this.value + value
            return this.value
      }
      divide(value){
            this.value/=value
            return this.value
      }
      substract(value){
            this.value -=value
            return this.value
      }
      print(){
            console.log("" + this.value)
      }
      clear(){
            this.value = 0
      }
}

      console.log("calc 1")
      const calculator_v1 = new Calculator(2)
      calculator_v1.multiply(3) //6
            calculator_v1.print()
      calculator_v1.add(10) //10
            calculator_v1.print()
      calculator_v1.divide(2) //
            calculator_v1.print()
      calculator_v1.substract(4) //4
      calculator_v1.print()   //4
      calculator_v1.clear()   //0`
      calculator_v1.print()

      console.log("calc 2")
      const calculator_v2 = new Calculator()
      calculator_v2.multiply(3)
      calculator_v2.print() // 0
      calculator_v2.add(10) 
      calculator_v2.print() //10
      calculator_v2.divide(2) //5
      calculator_v2.print()
      calculator_v2.substract(4) //1
      calculator_v2.print() // 1
      calculator_v2.clear()
      calculator_v2.print() // 0
console.log()



console.log('-----------------------------------------------------------')
// ##### 4. Write a Function that takes a 2D array and converts it to an object.  Each item in the array contains an array of only 2 items - the first item is the key and the second is the value
//     const media_arr = [['media', 'facebook'], ['company', 'github'], ['likes', 58445]]
//     convertToObject(media_arr)
//     // { media: 'facebook', company: 'github', likes: 58445 }
console.log("Question 4")
// function convertToObject(media_array){
//       const mappedAlpha = media_arr.map((media_array, index) => {
//       const alpha = {[letter]: index }{
//           alpha.forEach((letter, index) => {
//             console.log(letter, index)
//       })
//     }
// }



// function convertToObject(media_array){
//       const media = {}
//       let key = ''
//       let value = ''
//       for ( let i = 0; i < media_array.length; i++){
//             for (let j = 0; j < media_array.length; j++){
                  
//                   if(media_array[i][j] != undefined){
//                         k = j+1
//                         key = media_array[i][j]
//                         value = media_array[i][k]
//                         console.log('key: ' + key)
//                         console.log('value: ' + value)
//                         // media = {
//                         //       [key] : value 
//                         // }

//                         // Object.assign(media,{key: value})
//                   }
//                                           // console.log(key)
//                   // media = {varible: variable }

//             }

//       }

//       // console.log("media: " + media)
// }
// Object.assign(pet, { name: 'Fido' })

const media_arr = [['media', 'facebook'], ['company', 'github'], ['likes', 58445]]

function convertTopObject(array){
      let newObject = {}
      array.forEach((item) => {
            newObject[item[0]] = item[1]
      })
      console.log(newObject)
}
convertTopObject(media_arr)


// var words = ['one', 'two', 'three', 'four'];
// array.forEach(function(word) {
//   console.log(word);
//   if (word === 'two') {
//     words.shift();
//   }
// });

// convertToObject(media_arr)
// convertToObject(media_arr)
 

// let mediaSplit = media_arr.split().split()
// console.log('media split: ' + mediaSplit)

console.log('-----------------------------------------------------------')
// var key = "happyCount";
// var obj = {};
// obj[key] = 43;
// var key2 = "happyCount2";
// obj[key2] = 2;
// media_arr.push(obj);

// console.log(obj)

//     const alpha = ['a', 'b', 'c']
//     alpha.forEach((letter, index) => {
//       console.log(letter, index)
// })
    
//     const mappedAlpha = media_arr.map((letter, index) => {
//       return { [letter]: index }
// })

// console.log(media_arr) // [ { a: 0 }, { b: 1 }, { c: 2 } ]
console.log()

// ##### 5. Write a Function that takes an object and converts it to a 2D array.  
//Each key, value pair in the object should be added to an array - the first item 
//is the key and the second is the value. *Use object and array methods.
//     const media_obj = { media: 'facebook', company: 'github', likes: 58445 }
//     convertToArray(media_obj)
//     // [['media', 'facebook'], ['company', 'github'], ['likes', 58445]]

console.log("Question 5")
const media_obj = { media: 'facebook', company: 'github', likes: 58445 }

// function convertTopObject(array){
//       let newObject = {}
//       array.forEach((item) => {
//             newObject[item[0]] = item[1]
//       })
//       console.log(newObject)
// }

// function convertToArray(obj){
//       let arr=[]
//       Object.keys(obj).forEach(key){
//             arr.push([key, obj[key]])
//       }
//       console.log(arr)
// }





//benjamin graham intillegent investor
//catherine graham autobiography


// function Car (desc) {
//     this.desc = desc;
//     this.color = "red";
// }
 
// Car.prototype = {
//     getInfo: function() {
//       return 'A ' + this.color + ' ' + this.desc + '.';
//     }
// };
// //instantiate object using the constructor function
// var car =  Object.create(Car.prototype);
// car.color = "blue";
// console.log(car.getInfo()); //displays 'A blue undefined.' ??!

// wp exam


//works
function convertToArray(obj){
      const array = []
      Object.keys(obj).forEach(function(key){
            array.push([key,obj[key]])
      })
      console.log(array)
}

//works
const convertToArray = (obj) =>{
      const arr = []
            Object.keys(obj).forEach(function(key){
            arr.push([key, obj[key]])
      })
      console.log(arr)
}

convertToArray(media_obj)



//---------------------------------------------

      let object = {}
array.map(function(x)){
      object[x[0]] = x[1] 

}









// ##### 4. Write a Function that takes a 2D array and converts it to an object.  Each item in the array contains an array of only 2 items - the first item is the key and the second is the value
console.log("Question 4")
const media_arr = [['media', 'facebook'], ['company', 'github'], ['likes', 58445]]
function convertTopObject(array){
      const newObject = {}
      array.forEach((item) => {
            newObject[item[0]] = item[1]
      })
      console.log(newObject)
}
convertTopObject(media_arr) // { media: 'facebook', company: 'github', likes: 58445 }
console.log()

// ##### 5. Write a Function that takes an object and converts it to a 2D array.  
console.log("Question 5")
function convertToArray(object){
      const array = []
      Object.keys(object).forEach((key) =>{
            array.push([key,object[key]])
      })
      console.log(array)
}
const media_obj = { media: 'facebook', company: 'github', likes: 58445 }
convertToArray(media_obj) // [['media', 'facebook'], ['company', 'github'], ['likes', 58445]]
