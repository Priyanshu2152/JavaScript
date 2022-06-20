
const request = require('request');
let fs = require("fs");
let jsdom = require("jsdom");

function AllMatchPageExecutor(){
    request(url, cb);
}




console.log("before");

function cb (error, response, body) {

if(error){
    console.log(error.message, "error");
}else if(response && response.statusCode == 404){
    console.log("page not found");
}
else{
   console.log("Content recieved");
    //console.log(body);
    extractData(body);  
}}

function extractData(body){
   
const JSDOM = jsdom.JSDOM;
let dom = new JSDOM(body);
let document = dom.window.document;
let allMatches= document.querySelectorAll(".ds-flex.ds-mx-4,ds-pt-2.ds-pb-3.ds-space-x-4.ds-border-t.ds-border-line-default-translucent");
for(let i = 0; i<allMatches.length; i++){
let currMatch = allMatches[i];
let allAnchors = currMatch.querySelectorAll("a");
let scorecard = allAnchors[2];
let scoreCardLink = scorecard.getAttribute("href");
let full_link = "https://www.espncricinfo.com" + scoreCardLink;
 

console.log("scorecard", full_link);
 }
}
 
module.exports = {
 allMatchFn : AllMatchPageExecutor
}