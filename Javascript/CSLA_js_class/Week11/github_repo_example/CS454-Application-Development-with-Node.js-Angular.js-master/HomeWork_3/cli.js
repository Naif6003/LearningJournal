
var app = require('./app');
var yargs = require('yargs');

var flags = yargs.usage('$0: Usage node cli.js')
  .options('H', {
    alias: 'help',
    describe: 'Display help'
  })
  .options('M', {
    alias: 'math',
    describe: 'get a Math Fact and print it to the terminal',
  })
  .options('T', {
    alias: 'trivia',
    describe: 'get a Trivia Fact and prints it to the terminal'
  })
  .options('D', {
    alias: 'date',
    describe: 'get a Date Fact or Year Fact depending on how the argument passed (01/30 versus 2010) and prints it to the terminal'
  })
  .options('S', {
    alias: 'save',
    describe: 'allow a user to save the facts as a .json file (facts.json). It is optional and it only compatible with the above commands.'
  })
  .argv;

if (flags.help) {
  yargs.showHelp();
} else {
  app.run(flags);
}