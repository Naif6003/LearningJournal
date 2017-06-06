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
    FgRed = "\x1b[31m"  //red letters in conse


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
        })
        console.log(FgBlue, "The Following Duplicates were Found\n")

        //comparing the hash files and than if there are any duplicates, putting that data into the object and also 
        //the second file duplicate
        for (let i = 0; i < fileContentOfHashes.length; i++){ 
            for (let j = i + 1; j < fileContentOfHashes.length; j++){
                if (fileContentOfHashes[i] === fileContentOfHashes[j]){
                    fileDirctory[files[i]] = { [files[j]]: null }       //[files[j]] this saves the key as the actual value saved into files[j]
                }
            }
        }
        //treeify example is like an object with keys and vaules.  example tree at bottom
        console.log(FgRed, treeify.asTree(fileDirctory, true))
    })
