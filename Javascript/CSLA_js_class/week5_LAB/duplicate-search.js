const
    directory = require('node-dir')
treeify = require('treeify')

const fileDir = process.argv[1];
// const fileDir2 = process.argv[1];
const files = {}

directory.readFiles(fileDir,function(err, content, next) {
    if (err) 
        throw err
    if (content in files) {
        files[content] += 1
    } else {
        files[content] = 1
    }
    next()
},
function(err, files) {
    if (err) throw err;
    console.log(files)
    console.log(treeify.asTree(files, true))
})

// directory.readFiles(fileDir2,function(err, content, next) {
//     if (err) 
//         throw err
//     if (content in files) {
//         files[content] += 1
//     } else {
//         files[content] = 1
//     }
//     next()
// },
// function(err, files) {
//     if (err) throw err;
//     console.log(files)
//     console.log(treeify.asTree(files, true))
// })




//takes directory as commanline
//traverse the directory 

//traverse all sub directyory

//prints all filenames file paths that are dupliscates