//create functions that 

const fs = require('fs')
const clc = require('cli-color')
// const inquirer = require('inquirer')
const inquirer = require("inquirer-promise");
const hw4_words = require('./hw4_words')


module.exports.run = (difficulty) =>{
    // const game = new Game()              //unhandeled promise errors!!!! UGH!
    // game.init(difficulty)
    initializeGame(difficulty)

}

const initializeGame = (difficulty) => {
    let  //TypeError: Assignment to constant variable with const even with the array object which was weird
        usingThisList = []
        usingThisListLength = 0

    let usingThisWord = '' //TypeError when using const
    const 
        guesses = 4
        usingThisWord_underlines = []
        userGuessedLetters = []

    if(difficulty == "easy"){
        usingThisList = hw4_words.easy()
        usingThisListLength = usingThisList.length
        usingThisWord = randomWord(usingThisList,usingThisListLength )
        usingThisWord_underlines = new Array(usingThisWord.length).fill('_')
        menuSwitch(guesses, usingThisWord, usingThisWord_underlines, userGuessedLetters)
    }
    else{
        usingThisList = hw4_words.hard()
        usingThisListLength = usingThisList.length
        usingThisWord = randomWord(usingThisList,usingThisListLength )
        usingThisWord_underlines = new Array(usingThisWord.length).fill('_')
        menuSwitch(guesses, usingThisWord, usingThisWord_underlines, userGuessedLetters)

    }

    displayGame(usingThisWord_underlines, 'continue')
    menuSwitch(guesses, usingThisWord, usingThisWord_underlines)
}
function randomWord(usingThisList, usingThisListLength){
    const usingThisWord = usingThisList[ Math.floor(Math.random() * usingThisListLength) +  0] 
    // console.log(usingThisWord)
    return usingThisWord
}

//01
const menuSwitch = (guesses, usingThisWord, usingThisWord_underlines, userGuessedLetters) =>{
        inquirer.prompt([{
            // type: "list",
            type: 'list',
            name: "choice",
            message: "What would you like to do?",
            choices: [{
                name: 'Guess a letter.',
                value: 'guessLetter'
            },
            {
                name: 'Get a hint.',
                value: 'hint'
            },
            {
                name: 'View guessed letters\n',
                value: 'viewGuessedLetters'
            }]
        }]).then(function(data){
              switch (data.choice) {
                case 'guessLetter':
                    guessLetter(guesses, usingThisWord, usingThisWord_underlines, userGuessedLetters)
                    break

                case 'hint':
                    displayGame( usingThisWord_underlines, 'gameOvr')
                    break

                case 'viewGuessedLetters':
                    displayGame(usingThisWord_underlines, 'win')

                    // console.log("view guess letters")
                    break

                default:
                               Again()

            }
        })
}

const guessLetter = (guesses, usingThisWord, usingThisWord_underlines, userGuessedLetters) => {
console.log(usingThisWord)
    let index =  0                      //UnhandledPromiseRejectionWarning: Unhandled promise rejection 
    let arrayTempWord =[]               //UnhandledPromiseRejectionWarning: Unhandled promise rejection 
     inquirer.prompt([{
            type: 'input',
            name: 'letterInput',
            message: 'Guess a Letter:',
            filter: (input) => {
                return input.charAt(0)
            }
        }]).then((input) => {
        if(usingThisWord.toLowerCase().indexOf(input.letterInput) > -1){  //with a non-zero exit code.
            arrayTempWord = usingThisWord.split("")
            console.log(arrayTempWord)
            for(let i = 0; i < arrayTempWord.length; i++){  
                if(arrayTempWord[i].toLowerCase() === input.letterInput.toLowerCase())
                    usingThisWord_underlines[i] = arrayTempWord[i]
            }
            displayGame( usingThisWord_underlines, 'guessedLetts')
            if(usingThisWord_underlines.indexOf("_") < 0){
                displayGame(usingThisWord_underlines, 'win')
            }
            else if(guesses == 0){
                displayGame(usingThisWord_underlines, 'gameOvr' )
            }
            else{
                userGuessedLetters.push(input.letterInput)
                menuSwitch(guesses, usingThisWord, usingThisWord_underlines)

            }
            console.log(input.letterInput)
        }
        if(usingThisWord.toLowerCase().indexOf(input.letterInput) < 0){

            displayGame( usingThisWord_underlines, 'guessedLetts')

            if(usingThisWord_underlines.indexOf("_") < 0){
                displayGame(usingThisWord_underlines, 'win')
            }
            else if(guesses == 0){
                displayGame(usingThisWord_underlines, 'gameOvr' )
            }
            else{
                userGuessedLetters.push(input.letterInput)
                menuSwitch(guesses, usingThisWord, usingThisWord_underlines)

            }

        }
    })

}

    

const recieveHint = (usingThisWord_underlines,usingThisWord )=>{
     for(let i = 0; i < arrayTempWord.length; i++){  
                if(arrayTempWord[i].toLowerCase() == input.letterInput.toLowerCase())
                    usingThisWord_underlines[i] = input.letterInput
            }

}


const displayGame  = (usingThisWord_underlines, status) =>{
        const gameOvr = clc.redBright.bold
        const win = clc.greenBright.bold
        const prevGuessedLetters = clc.blue.bold
        const gameBoard = clc.yellowBright.bold
        const letters = []


        if(status == 'continue'){
            console.log(gameBoard('--------MYSTERY GAME---------------------\n\n\n\n\n'))
            console.log(gameBoard(`             ${usingThisWord_underlines.join(" ")}        `))
            console.log(gameBoard('\n\n\n\n\n-----------------------------------------')) 
        }
        if(status == 'guessedLetts'){
            console.log(gameBoard('--------MYSTERY GAME---------------------\n\n\n\n\n'))
            console.log(gameBoard(`             ${usingThisWord_underlines.join(" ")}        `))
            console.log(gameBoard('\n\n\n\n\n-----------------------------------------')) 
        }

        if(status == 'gameOvr'){
            console.log(gameOvr('--------MYSTERY GAME---------------------\n\n\n\n\n'))
            console.log(gameOvr(`THIS IS HINT MESSAGE BUT SHOWING LOSE MESSAGE for EQ!`))
            console.log(gameOvr('\n\n\n\n\n-----------------------------------------')) 
        }
        if(status=='win'){
            console.log(win('--------MYSTERY GAME---------------------\n\n\n\n\n'))
            console.log(win(`THIS IS WORDS MESSAGE BUT SHOWING WIN MESSAGE for EQ!`))
            console.log(win('\n\n\n\n\n-----------------------------------------')) 
        }

    }

    const Again = () =>{
    inquirer.prompt([{
            type: 'input',
            name: 'answer',
            message: 'Play again? Y/N:',
            filter: (input) => {
                return input.charAt(0)
            }
        }]).then((input) => {
            if(input.answer.toLowerCase().includes("y"))
            {
                Play(WordList)
            }
            else
                console.log()
        })

}


//kept getting promise errors on creating classes.  moved onto making just functions

class Game{
    constructor(){
        this.gamePlay = 4
        this.usingThisList = []
        this.usingThisListLength = 0
        this.min = 0
        this.usingThisWord = ''
        this.hiddenWord = ""
        this.letter = ''
        this.guessedLetters = []
        this.status = ''
    }

    init(difficulty){
        if(difficulty == "easy"){
            this.usingThisList = hw4_words.easy()
            this.usingThisListLength = this.usingThisList.length
        }
        else{
            this.usingThisList = hw4_words.hard()
            this.usingThisListLength = this.usingThisList.length
        }
        this.randomWord()
        this.displayGame()
    }

    displayGame(status){
        const gameOver = clc.red.bold
        const win = clc.green.bold
        const prevGuessedLetters = clc.blue.bold
        const gameBoard = clc.yellowBright.bold

        console.log(gameBoard('--------MYSTERY GAME---------------------\n\n\n\n\n'))
        this.displayWord()
        console.log(gameBoard('\n\n\n\n\n-----------------------------------------'))
        this.menuSwtich()
    }

    displayWord(){
        console.log(this.usingThisWord)
    }

    randomWord(){
        this.usingThisWord = this.usingThisList[ Math.floor(Math.random() * this.usingThisListLength) +  this.min] 
    }

    menuSwtich(){
    const nestingsCounter = 0;
    const maxNestings = 10;
        inquirer.prompt([{
            // type: "list",
            type: 'list',
            name: "choice",
            message: "What would you like to do?",
            choices: [{
                name: 'Guess a letter.',
                value: 'guessLetter'
            },
            {
                name: 'Get a hint.',
                value: 'hint'
            },
            {
                name: 'View guessed letters\n',
                value: 'guessedLetters'
            }]
        }]).then(function(data){
              switch (data.choice) {
                case 'guessLetter':
                console.log("guess letter")
                    // readlinefunction()
                    this.guessLetter()
                    // guessTheLetter() 
                    console.log('guess a letter')   
                  break

                case 'hint':
                  console.log("view hint")
                  break

                case 'guessedLetters':
                  console.log("view guess letters")
                  break
            }
        })
    }

    checkGameStatus(){
        if (usingThisList.length < 0){
            return false
        }
        else 
            return true
    }

    pushGuessedLetters(){
        this.guessedLetters.push(this.letter)
        console.log("guessed letters" + this.guessedLetters)
    }


    check(){
        const iterateCheck = (arrayValue) => {
        return new Promise((resolve, reject) => {
            if(arrayValue == arrayValue.toLowerCase())
                resolve('This letter was resolved: ' + arrayValue)
            else
                reject('This letter was rejected: ' + arrayValue)
            })
        }
    }
}





