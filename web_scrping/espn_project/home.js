const request = require('request');
let fs = require("fs");
let jsdom = require("jsdom");
let matchPageObj = require("./allMatchPage");

let url = 'https://www.espncricinfo.com/series/indian-premier-league-2022-1298423' ;


request(url, cb);
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
let viewResult = document.querySelector(".ds-block.ds-text-center.ds-uppercase.ds-text-ui-typo-primary.ds-underline-offset-4");

let link = viewResult.getAttribute("href");
let full_link = "https://www.espncricinfo.com" + link;
console.log("link: ", full_link);

matchPageObj.allMatchFn(full_link);


}