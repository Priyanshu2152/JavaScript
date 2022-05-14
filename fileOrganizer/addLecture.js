let fs = require("fs");
let path = require("path");

let input = process.argv.slice(2);

let moduleName = input[0];
let folderName = input[1];
//create module

let modulePath = path.join(process.cwd(), "web dev", moduleName);

if(fs.existsSync(modulePath)){
    console.log(moduleName, "already exists");
}else{
    fs.mkdirSync(modulePath);
}
//create files
for(let i = 1; i<=folderName; i++){
    let lectureName = ("Lecture-" + i);
    let lecturePath = path.join(modulePath, lectureName);
    if(fs.existsSync(lecturePath)){
        console.log(lectureName, "path already exist");
    }else{
        fs.mkdirSync(lecturePath);
    }
}
