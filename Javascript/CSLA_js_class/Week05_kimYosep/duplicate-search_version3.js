const
    directory = require('node-dir')
    treeify = require('treeify')
    crypto = require('crypto')
    hash = crypto.createHash('sha256')
const path = process.argv[2];
// const path = process.argv[1];
const tree = {}
let fileContent = []

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


// the callback for each file can optionally have a filename argument as its 3rd parameter
// and the finishedCallback argument is optional, e.g.

// directory.readFiles(path, function(err, content, filename, next) {
//         console.log('processing content of file', filename);
//         next();
//     });



// display contents of files in this script's directory
// directory.readFiles(path,
//     function(err, content, next) {
        
//         if (err) throw err;
//         // console.log('content:', content);
//         // fileContent.push(content)
//         // next();

//         if (content in tree) {
//             tree[content] += 1
//             console.log("if statement: " + tree[content])
//         } else {
//             tree[content] = 1
//              console.log("else statement: " + tree[content])
//         }

//         console.log(content)
//         console.log()
//         next()


//     },
//     function(err, files){
//         if (err) 
//             throw err;
//         console.log('finished reading files:', files);
//             console.log(treeify.asTree(files, true))

//         fileContent.forEach(function(element){
//             console.log(element)
//         })
//     });


// array2 = ["This is the data to hash"]
// array3 = []





const alice = crypto.createECDH('secp256k1');
const bob = crypto.createECDH('secp256k1');

// Note: This is a shortcut way to specify one of Alice's previous private
// keys. It would be unwise to use such a predictable private key in a real
// application.
alice.setPrivateKey(
  crypto.createHash('sha256').update('alice', 'utf8').digest()
);

// Bob uses a newly generated cryptographically strong
// pseudorandom key pair
bob.generateKeys();

const aliceSecret = alice.computeSecret(bob.getPublicKey(), null, 'hex');
const bobSecret = bob.computeSecret(alice.getPublicKey(), null, 'hex');

// aliceSecret and bobSecret should be the same shared secret value
console.log(aliceSecret === bobSecret);




// hash.on('readable', () =>{
//     array2.forEach(function(element){
//         element = hash.read()
//         console.log(element.toString('hex'))
//     })
    
// })

// hash.on('readable', () =>{
//     array2.forEach(function(element){
//         element = hash.read()
//         if(element)
//             console.log(element.toString('hex'))
//     })
// })

// array2.forEach(function(element){
//     hash.write(element)
// })

// hash.end();







// hash.on('readable', () => {
//   const data = hash.read();
//   if (data)
//     console.log(data.toString('hex'));
//     // Prints:
//     //   6a2da20943931e9834fc12cfe5bb47bbd9ae43489a30726962b576f4e3993e50
// });

// hash.write('some data to hash2');
// hash.write('some data to ');
// hash.end();




// console.log("fileContent" + fileContent)
// fileContent.forEach(function(element){
//     console.log(element)
// })

// Reset on an update() after a digest()
// Expose a reset() or reinitialize() method


//-----------------------------------------------------------------------
// array2 = ["This is the data to hash", "This is the data to hash"]
// array3 = [hash.update(array2[0]), hash.update(array2[1])]
// console.log(hash.update(array2[0]).digest('hex'))
// hash.update(array2[0])
// hash.update(array2[1])

// console.log(hash.digest('hex'))
//console.log()
//console.log(array3[1].update(array2[1]).reinitialize('hex'))
// console.log(hash.digest('hex'));


//   this._handle.update(data, encoding);
//                ^

// Error: Digest already called



//------------------------------------------------------------------------


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
//         console.log('finished reading files:', files);
//     });



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





