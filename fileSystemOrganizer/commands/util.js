let fs = require("fs");
let path = require("path");
let types = {
    media : ["mp4", "mkv", "mp3"], 
    archives : ["zip", "rar", "tar", "xz", "gz"],
    app : ["exe", "dmg", "deb", "pkg"],
    documents : ["docx", "dpc", "pdf", "xls", "odt", "odp"]
}


function returnFolderName(fileName){
    let extName = path.extname(fileName);
    extName.slice(1);
    for(let key in types){
        let  totalExtension = types[key];
        for(let i = 0; i<totalExtension.length; i++){
            if(totalExtension[i] == extName){
            console.log(key);
            return;
          }
        }
    }
   console.log("others");
}

returnFolderName("abc.pdf");
returnFolderName("");