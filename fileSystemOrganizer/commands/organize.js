let fs = require("fs");
let path = require("path");
let types = {
    media : ["mp4", "mkv", "mp3","png", "jpg"], 
    archives : ["zip", "rar", "tar", "xz", "gz"],
    app : ["exe", "dmg", "deb", "pkg"],
    documents : ["docx", "dpc", "pdf", "xls", "odt", "odp"]
}

function organizeFn(dirPath){
    dirPath = dirPath != undefined ? dirPath: process.cwd();
    organizeHelper(dirPath);
    
}
function organizeHelper(dirPath){
let organizeDirPath = path.join(dirPath, "organized_dir");
let doesOrganizedFolderExist = fs.existsSync(organizeDirPath);
if(doesOrganizedFolderExist == false){
    fs.mkdirSync(organizeDirPath);
}
let names = fs.readdirSync(dirPath);
for(let i = 0; i<names.length; i++){
    let ans = isFile(names[i], dirPath);
    if(ans == true){
        console.log(names[i], "isFile", ans);
    }
}

}
function isFile(dirPath, names){
   let assetPath = path.join(dirPath, names);
   let ans = fs.lstatSync(assetPath).isFile();
   return ans;
}


module.exports = {
    organizeFn:organizeFn
}