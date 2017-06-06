//create functions that 

const fs = require('fs')
const clc = require('cli-color')
const inquirer = require('inquirer')
const hw4_words = require('./hw4_words')


module.exports.run = (difficulty) =>{
    // const game = new Game()
    initializeGame(difficulty)

}

const initializeGame = (difficulty) => {
    const
        usingThisList = []
        usingThisListLength = 0

    if(difficulty == "easy"){
        usingThisList = hw4_words.easy()
        usingThisListLength = usingThisList.length
    }
    else{
        usingThisList = hw4_words.hard()
        usingThisListLength = usingThisList.length
    }
    console.log('inside initialize game')
}




// //01
// const menuSwtich = () =>{

//     const nestingsCounter = 0;
//     const maxNestings = 10;
//         inquirer.prompt([{
//             // type: "list",
//             type: 'list',
//             name: "choice",
//             message: "What would you like to do?",
//             choices: [{
//                 name: 'Guess a letter.',
//                 value: 'guessLetter'
//             },
//             {
//                 name: 'Get a hint.',
//                 value: 'hint'
//             },
//             {
//                 name: 'View guessed letters\n',
//                 value: 'guessedLetters'
//             }]
//         }]).then(function(data){
//               switch (data.choice) {
//                 case 'guessLetter':
//                 console.log("guess letter")
//                     // readlinefunction()
//                     // this.guessLetter()
//                     // guessTheLetter() 
//                     console.log('guess a letter')   
//                   break

//                 case 'hint':
//                   console.log("view hint")
//                   break

//                 case 'guessedLetters':
//                   console.log("view guess letters")
//                   break
//             }
//         })
//     }




// class Game{
//     constructor(){
//         this.gamePlay = 4
//         this.usingThisList = []
//         this.usingThisListLength = 0
//         this.min = 0
//         this.usingThisWord = ''
//         this.hiddenWord = ""
//         this.letter = ''
//         this.guessedLetters = []
//         this.status = ''
//     }

//     init(difficulty){
//         if(difficulty == "easy"){
//             this.usingThisList = hw4_words.easy()
//             this.usingThisListLength = this.usingThisList.length
//         }
//         else{
//             this.usingThisList = hw4_words.hard()
//             this.usingThisListLength = this.usingThisList.length
//         }
//         this.randomWord()
//         this.displayGame()
//     }


//     displayGame(status){
//         const gameOver = clc.red.bold
//         const win = clc.green.bold
//         const prevGuessedLetters = clc.blue.bold
//         const gameBoard = clc.yellowBright.bold

//         console.log(gameBoard('--------MYSTERY GAME---------------------\n\n\n\n\n'))
//         this.displayWord()
//         console.log(gameBoard('\n\n\n\n\n-----------------------------------------'))
//         this.menuSwtich()
//     }

//     displayWord(){
//         console.log(this.usingThisWord)
//     }

//     randomWord(){
//         this.usingThisWord = this.usingThisList[ Math.floor(Math.random() * this.usingThisListLength) +  this.min] 
//     }

//     menuSwtich(){

//     const nestingsCounter = 0;
//     const maxNestings = 10;
//         inquirer.prompt([{
//             // type: "list",
//             type: 'list',
//             name: "choice",
//             message: "What would you like to do?",
//             choices: [{
//                 name: 'Guess a letter.',
//                 value: 'guessLetter'
//             },
//             {
//                 name: 'Get a hint.',
//                 value: 'hint'
//             },
//             {
//                 name: 'View guessed letters\n',
//                 value: 'guessedLetters'
//             }]
//         }]).then(function(data){
//               switch (data.choice) {
//                 case 'guessLetter':
//                 console.log("guess letter")
//                     // readlinefunction()
//                     this.guessLetter()
//                     // guessTheLetter() 
//                     console.log('guess a letter')   
//                   break

//                 case 'hint':
//                   console.log("view hint")
//                   break

//                 case 'guessedLetters':
//                   console.log("view guess letters")
//                   break
//             }
//         })
//     }

//     checkGameStatus(){
//         if (usingThisList.length < 0){
//             return false
//         }
//         else 
//             return true
//     }

//     pushGuessedLetters(){
//         this.guessedLetters.push(this.letter)
//         console.log("guessed letters" + this.guessedLetters)
//     }


//     check(){
//         const iterateCheck = (arrayValue) => {
//         return new Promise((resolve, reject) => {
//             if(arrayValue == arrayValue.toLowerCase())
//                 resolve('This letter was resolved: ' + arrayValue)
//             else
//                 reject('This letter was rejected: ' + arrayValue)
//             })
//         }
//     }

// //change this
//     guessALetter(){
//         inquirer.prompt([{
//             type: 'input',
//             name: 'answer',
//             message: `Guess a letter: `,
//             filter: (input) => {
//                 return input.toLowerCase()
//             }
//         }]).then((input) => {
//             // If a chosen character exists in Mystery Word, update wordHidden
//             // If user's guess is incorrect, increment guessedCount
//             if (this.word.includes(input.answer)) {
//                 const indexes = getAllIndexes(this.word, input.answer)
//                 indexes.forEach((index) => {
//                     this.wordHidden[index] = input.answer
//                 })
//             } else {
//                 this.guessCount++
//             }

//             this.guessedLetters.push(input.answer)
//             if (this.checkGameStatus())
//                 this.printMenu()
//         })
//     }
// }







// var userQuestions = [
//     {
//         type: 'input',
//         name: 'name',
//         message: 'What is user\'s name?',
//         validate: function (value) {
//             if ((/.+/).test(value)) { return true; }
//             return 'name is required';
//         }
//     }, {
//         type: 'input',
//         name: 'age',
//         message: 'How old is he?',
//         validate: function (value) {
//             var digitsOnly = /\d+/;
//             if (digitsOnly.test(value)) { return true; }
//             return 'Invalid age! Must be a number genius!';
//         }
//     }
// ];

// inquirer.prompt([{
//     type: 'recursive',
//     message: 'Add a new user ?',
//     name: 'users',
//     prompts: userQuestions
// }]).then(function(answers) {
//     console.log(answers.users);
// });


// const add = (n1, n2, callback) => {
//     const total = n1 + n2

//     // by executing the callback function here it will "call back" to the log function with the result
//     callback(total)
// }


// const log = (n1, n2) => {
//     add(n1, n2, (result) => {
//         console.log(result) // prints 5
//     })
// }

