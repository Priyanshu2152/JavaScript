let fs  = require("fs");
let path = require("path");
let f1Path = "../f1.txt";
let f2Path = "../f2.txt";
let f3Path = "../f3.txt";
let f4Path = "../f4.txt";
let outputContent = "";
console.log("before");

fs.readFile(f1Path, fn1cb );


function fn1cb(err, data){
    if(err){
        console.log("error");
    }else{
        console.log("data"+ data);
    }
    fs.readFile(f2Path, fn2cb );
    outputContent += data;

}
function fn2cb(err, data){
    if(err){
        console.log("error");
    }else{
        console.log("data"+ data);
    }
    fs.readFile(f3Path, fn3cb );
    outputContent += data;


}
function fn3cb(err, data){
    if(err){
        console.log("error");
    }else{
        console.log("data"+ data);
    }
   outputContent += data;
    fs.writeFile(f4Path, outputContent, writeFnCb);

}
function writeFnCb(err, data){
    console.log("File created");

}
console.log("after");

for(let i = 0; i<10; i++){
    console.log("I", i);
}
