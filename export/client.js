console.log("i am client");
//importing data from export.js
let clientObj = require("./export.js");

clientObj.fn();
console.log(clientObj.varName);