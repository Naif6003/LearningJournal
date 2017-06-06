


const addThree = function(n){
  return n + 3
}


console.log(addThree(3));

const alpha = ['a', 'b', 'c', 'd']

const beta = ['a', 1, {value:10}, new Date()];


alpha.push('e');


const arr = ['hello', 'world', '!']
for(let i=0; i < arr.length; i++){
  console.log(arr[i])
}

const str='hello world !'
for (let i = 0; i < str.length; i++){
  console.log(str[i])
}

// --------------------------------------------------------------------


function getWithLet(flag){
  if(flag){
    let value = 'hello'
    return value
  }
  else{
    let value = 'howdy'
    return value
  }
}

console.log(getWithLet(true));
console.log(getWithLet(false));

// --------------------------------------------------------------------
//GOTCHA MOMENTS IN JAVASCRIPT

// this is false
console.log(8 *null);

//4
console.log('5' - 1);

//51 concatnates
console.log('5' + 1);

//NaN not a number
console.log('five' * 2);

//true, make sure you compare strict code and use the same type
console.log('2' == 2)

//true,  make sure you compare strict code and use the same type
console.log(false == 0)

//false
console.log(undefined == false)
console.log(null == false)

// --------------------------------------------------------------------

function addTwo(n){
  return n + 1
}

console.log(addTwo(2))


// --------------------------------------------------------------------

const addThree = function(n){
  return n+3
}
console.log(addThree(2))



// --------------------------------------------------------------------


const addThreeMore=(n)=>{
  return n+3
}

console.log(addThreeMore(2))

// --------------------------------------------------------------------

//write a function that prints integers from 1 to 30
//but multiples of 3 we are printing 'Fizz' and multiples of 5 print 'Buzz'
//for multiples of 3 and 5 we print 'FizzBuzz'


const fizzBuzz =() =>{
  for (let i = 1; i <= 30; i++){
    if(i % 15 ==0){
      console.log('FizzBuzz')
    }
    else if(i %3 == 0){
      console.log('Fizz')
    }
    else if(i%5 == 0){
      console.log('Buzz')
    }
    else{
      console.log(i)
    }
  }
}
fizzBuzz()


// --------------------------------------------------------------------
const transformer = {
  name : 'Optimus Prime',
  teams: 'Autobots',
  colors: ['red', 'blue', 'white']
  example: {
    nested:true
  }
}
transformer.homeworld = 'cybertron'
transformer['vehicle']='truck'
// transformer['type of vehicle'] = 'truck'
console.log(transformer)

console.log(transformer.name)

console.log(transformer.example.nested)

//look at this top part nexted


// --------------------------------------------------------------------

const
  name = 'Cydney',
  key= 'occupateion',
  val = 'software engineer'

  const person = {name, [key]: val }

console.log(person)



// --------------------------------------------------------------------
//push

const alpha = ['a', 'b', 'c']

alpha.push('d')
console.log(alpha)



// --------------------------------------------------------------------

const alpha = ['a', 'b', 'c', 1.4232, {a:'b'}]

alpha.push('d')
console.log(alpha)



// --------------------------------------------------------------------





// --------------------------------------------------------------------




// --------------------------------------------------------------------





// --------------------------------------------------------------------




// --------------------------------------------------------------------
