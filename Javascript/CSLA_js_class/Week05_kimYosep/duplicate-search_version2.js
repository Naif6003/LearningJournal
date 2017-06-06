
const
    directory = require('node-dir')
    treeify = require('treeify')
    crypto = require('crypto')
    hash = crypto.createHash('sha256')

const path = process.argv[2];
// const fileDir2 = process.argv[1];
const tree = {}

// directory.readFiles(path,function(error, file, next) {
//     if (error) 
//         throw error

//     // if (file in tree) {
//     //     tree[file] += 1
//     //     console.log("if statement: " + tree[file])
//     // } else {
//     //     tree[file] = 1
//     //      console.log("else statement: " + tree[file])
//     // }

//     // console.log(file)
//     console.log()
//     next()
// },
// function(error, tree) {
//     if (error) 
//         throw error
//     // console.log(tree)
//     console.log(treeify.asTree(tree, true))
// })


// directory.readFiles(path,
//     function(err, content, next) {
//         if (err) throw err;
//         console.log('content:', content);
//         next();
//     },
//     function(err, tree){
//         if (err) throw err;
//         console.log('finished reading files:', tree)

//         tree.forEach(function(element){
//             console.log(element)
//         })


//         console.log(treeify.asTree(tree, true))
//     });

// directory.readFiles(process.argv[2],

//     function(err, content, next) {
//         if (err) throw err;
//         console.log('content:', content);


//         next();
//     },
//     function(err, tree){
//         if (err) throw err;

//         console.log('finished reading files:', tree)

//         tree.forEach(function(element){
//             console.log(element)
//         })},
//     function(err, files){
//         if (err) throw err;
//         console.log('finished reading files:', files)
//     });

directory.files(process.argv[2], function(err, files) {
    if (err) throw err;
    console.log(files);
});

// directory.paths(process.argv[2], function(err, paths) {
//     if (err) 
//         throw err
//     console.log('files:\n',paths.files);
//     console.log('subdirs:\n', paths.dirs);
// });

console.log(
    treeify.asTree({
        oranges: {
            'mandarin': {                                          //├─ oranges
                clementine: null,                                  //│  └─ mandarin
                tangerine: 'so cheap and juicy!'                   //│     ├─ clementine
            }                                                      //│     └─ tangerine: so cheap and juicy!
        },                                                         //└─ apples
        apples: {                                                  //   ├─ gala
            'gala': null,                                          //   └─ pink lady
            'pink lady': null
        }
    }, true))








console.log("The Following Duplicates were Found\n")


// const
//     dir = require('node-dir');
//     treeify = require('treeify');
//     crypto = require('crypto');
//     hash = crypto.createHash('sha256');

// const directory = process.argv[2];

// const fileHash = {}

// dir.readFiles(directory,
//     function(err, content, next) {
//         if (err) throw err;
//         if (content in fileHash) {
//             fileHash[content] += 1
//         } else {
//             fileHash[content] = 1
//         }
//         next();
//     },
//     function(err, files) {
//         if (err) throw err;
//         console.log(fileHash)
//         console.log(treeify.asTree(fileHash, true))
//     });



// My duplicate-search folder
// contains files and a directory.

// ▸ The directory contains additional
// files and a directory.

// ▸ I run my duplicate-search.js
// application from the parent
// directory, and I pass in the ./
// duplicate-search path.

// ▸ The output is displayed in a tree-
// like fashion.





