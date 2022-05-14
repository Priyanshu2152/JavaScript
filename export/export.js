function lib(){
    console.log("I am function");
} 

function inner(){
    console.log("i am inner");
}

let a = 10;
//exporting lib() function into other file(client.js);
module.exports = {
    fn: lib,
    varName: a
}