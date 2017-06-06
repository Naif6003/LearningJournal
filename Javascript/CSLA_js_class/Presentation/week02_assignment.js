// console.log('--------------------------WEEK02 HW CS4220 YOSEP KIM----------------------')

// ##### 1. Write a function that takes a string and reverses it. *Use only string or array methods. 
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
console.log("Question 2")
function replaceVowels(string){

      let newStarVowelString = string.replace(/[aeiou]/g, '*')
      console.log(newStarVowelString)
}
replaceVowels('javascript') // j*v*scr*pt
replaceVowels('angular')    // *ng*l*r
console.log()

// ##### 3. Write a Calculator Class
console.log("Question 3")
class Calculator{
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
calculator_v1.add(10) //10
calculator_v1.divide(2) //
calculator_v1.substract(4) //4
calculator_v1.print()   //4
calculator_v1.clear()   //0`
calculator_v1.print()   
console.log("calc 2")
const calculator_v2 = new Calculator()
calculator_v2.multiply(3)
calculator_v2.add(10) 
calculator_v2.divide(2) //5
calculator_v2.substract(4) //1
calculator_v2.print() // 1
calculator_v2.clear()
calculator_v2.print() // 0
console.log()


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
convertToObject(media_arr) // { media: 'facebook', company: 'github', likes: 58445 }
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
