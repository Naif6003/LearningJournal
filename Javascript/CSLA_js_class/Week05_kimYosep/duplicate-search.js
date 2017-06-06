const
    directory = require('node-dir')
    treeify = require('treeify')
    crypto = require('crypto')
    path = process.argv[2];       //file path starts from where the program is running
    tree = {}
    fileContent = []
    fileContentOfHashes = []
    fileDirctory = {}
    FgBlue = "\x1b[34m" //blue letters in console
    FgRed = "\x1b[31m"  //red letters in cons


// display contents of files in this script's directory
directory.readFiles(path,
    function(err, content, next) {
        if (err) throw err;
        fileContent.push(content)
        next();
    },
    function(err, files){
        if (err) 
            throw err;

        //pushing the files into an array and then push the crypto hash string into another array
        fileContent.forEach(function(element){
            let hash = crypto.createHash('sha256') //need to reiterate the object because direct() cant be instantiated more than once
            fileContentOfHashes.push(hash.update(element).digest('hex'))
        }):
        console.log(FgBlue, "\n\n\nThe Following Duplicates were Found:")

        //comparing the hash files and than if there are any duplicates, putting that data into the object and also 
        //the second file duplicate
        for (let i = 0; i < fileContentOfHashes.length; i++){ 
            for (let j = i + 1; j < fileContentOfHashes.length; j++){
                if (fileContentOfHashes[i] === fileContentOfHashes[j]){
                    fileDirctory[files[i]] = { [files[j]]: null }       //[files[j]] this saves the key as the actual value saved into files[j]
                }
            }
        }
        console.log(FgRed,"")
        //treeify example is like an object with keys and vaules.  example tree at bottom
        console.log(treeify.asTree(fileDirctory, true))
        console.log("\n")

    })

//Yosep Kim cs4220 - Node and Angular 































































//scratch work

//  path = process.argv[1];    //shows the whole path
//-----------------------------------------------------------------------

//fileContentOfHashes.forEach(function(element){
    // console.log(element)    
        // files.forEach(function(element2){
        //     fileDirctory[element2] = null
        // })
//})

//------------------------------------------------------------------------

// console.log(
//     treeify.asTree({
//         oranges: {
//             'mandarin': {                                          //â”œâ”€ oranges
//                 clementine: null,                                  //â”‚  â””â”€ mandarin
//                 tangerine: 'so cheap and juicy!'                   //â”‚     â”œâ”€ clementine
//             }                                                      //â”‚     â””â”€ tangerine: so cheap and juicy!
//         },                                                         //â””â”€ apples
//         apples: {                                                  //   â”œâ”€ gala
//             'gala': null,                                          //   â””â”€ pink lady
//             'pink lady': null
//         }
//     }, true))


// My duplicate-search folder
// contains files and a directory.

// â–¸ The directory contains additional
// files and a directory.

// â–¸ I run my duplicate-search.js
// application from the parent
// directory, and I pass in the ./
// duplicate-search path.

// â–¸ The output is displayed in a tree-
// like fashion.




