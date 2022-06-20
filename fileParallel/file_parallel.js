let fs  = require("fs");
let path = require("path");
let f1Path = "../f1.txt";
let f2Path = "../f2.txt";
let f3Path = "../f3.txt";

console.log("before");

fs.readFile(f1Path, fn1cb );
fs.readFile(f2Path, fn2cb );
fs.readFile(f3Path, fn3cb );
function fn1cb(err, data){
    if(err){
        console.log("error");
    }else{
        console.log("data"+ data);
    }

}
function fn2cb(err, data){
    if(err){
        console.log("error");
    }else{
        console.log("data"+ data);
    }

}
function fn3cb(err, data){
    if(err){
        console.log("error");
    }else{
        console.log("data"+ data);
    }

}

console.log("after");

for(let i = 0; i<10; i++){
    console.log("I", i);
}
