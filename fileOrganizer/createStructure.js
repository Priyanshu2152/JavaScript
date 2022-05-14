let path = require("path");
let fs = require("fs");
let modules = ["javaScript", "Browser", "React", "Git", "Backend"];
//create folder
let webDevDirPath= path.join(process.cwd(), "web dev")
if(fs.existsSync(webDevDirPath)){
    console.log("folder exist");
}else{
    fs.mkdirSync(webDevDirPath);

}

//create module
for(let i = 0; i<modules.length; i++){

    let modulePath = path.join(webDevDirPath, modules[i]);
    console.log(modulePath);
    
    if(fs.existsSync(modulePath)){
        console.log(module[i], "already exists")
    }else{
        fs.mkdirSync(modulePath)
    }
}