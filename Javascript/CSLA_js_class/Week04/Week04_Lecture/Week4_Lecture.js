const
	fs = require('fs'),
	path = require('path')

fs.readFile('file.txt', 'ut8', (err,data) =>{
	if(err) threw err
		console.log(data)
})


// yargs, command line arguments


const flags = {}
let key 

//cd fs-read/
//npm init,

// description: reads files from cmd line
// entry: (index.js) cli.js  --what is the entry point
// author: yosep kim
//liscencse IsC


//install 
//npm install --save yargs

const flags = yargs.usage('$0: Useage node cli.js')
	.options('h', {
		aslias: 'help',
		describe: 'displays help'

	})
	.argv
if(flags.help)
	yargs.showHelp)
