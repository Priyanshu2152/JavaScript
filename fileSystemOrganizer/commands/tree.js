let fs = require("fs");
let path = require("path");

function treeFn(dirPath){
   dirPath = dirPath != undefined ? dirPath: process.cwd();
    let folderContent = fs.readdirSync(dirPath);
    console.log(path.basename(dirPath));
    for(let i = 0; i<folderContent.length; i++){
        console.log("\t"+ folderContent[i]);
    }
}
module.exports = {
    treeFn:treeFn
}