// NUMBERS
console.log(parseInt('5'))     // 5
console.log(parseInt('5.5'))   // 5
console.log(parseInt('hello')) // NaN

console.log(parseFloat('5'))     // 5
console.log(parseFloat('5.5'))   // 5.5
console.log(parseFloat('hello')) // NaN

// STRINGS
const str = 'HellO'
console.log(str.toUpperCase())
console.log(str.toLowerCase())


const spaced = '    hello world  '

const greeting = 'hello world'

console.log(greeting.trim())

console.log(greeting.split(''))
console.log(greeting.split(' '))
console.log(greeting.substring(0,0))
console.log(greeting.substring(0,5))



// OBJECTS
const pet = {
    type: 'dog',
    breed: 'border collie',
    colors: ['black', 'white']
}


const dog = {
    name : 'Fido',
    colors:['grey']
}

Object.assign(pet, dog)
console.log(pet)

const keys = Object.keys(pet)
console.log(keys)



// ARRAYS
const alpha = ['a', 'b', 'c']
const list = [ 'red', 'blue', 'green', 'yellow']

const last = list.pop()
const first = list.shift()
console.log(alpha.join(','))
console.log(alpha.join(' | '))
// list unshift('red')
list.push('yellow')


console.log(list)
console.log(first)
console.log(last)




// list.forEach(color, index) =>{
//     console.log(color, index)
// }


const mappedList = list.map((item, index) => {
    if(index != 0)
    return {[item]: index}
})

console.log(mappedList)

// DESTRUCTURING
const arr = [ 1, 2, 3, 4 ]

const fido = {
    type: 'dog',
    breed: 'border collie',
    colors: ['black', 'white']
}



// const {type : animal, breed, colors: [c2, c3], name: dogName = 'Fido'} = fido
// console(dogName)


// const fn = ({type, breed, colors})=>{
//     console.log(type, breed, colors)
// }
// fn(fido)


const foodLoop = (arr) =>{
    arr.forEach(item) => {
        consoloe.log("i like  $(item}")
    }
}


// TEMPLATE LITERALS
const foods = [ 'pizza', 'pasta', 'sushi' ]


// CLASSES
class Polygon {
    constructor(height, width) {
        this.height = height
        this.width = width
    }
}



