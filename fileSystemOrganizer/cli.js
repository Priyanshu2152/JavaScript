let fs = require("fs")
let path = require("path");
let helpFnObj = require("./commands/help.js");
let treeFnObj = require("./commands/tree.js");
let organizeFnObj = require("./commands/organize.js");
 
let inputArr = process.argv.slice(2);

let command = inputArr[0];
let dirPath = inputArr[1];


switch(command){
    case "help":
        helpFnObj.helpFn();
        break;
    case "tree":
        treeFnObj.treeFn(dirPath);
        break;
    case "organize":
        organizeFnObj.organizeFn(dirPath);  
        break;
    default:
        console.log("Wrong Command, Type help to see the list of all commands.");
}
