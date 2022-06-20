// //Q1 print the result
const request = require("request");
const jsdom = require("jsdom");
let fs = require("fs");

let url = 'https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/kolkata-knight-riders-vs-lucknow-super-giants-66th-match-1304112/full-scorecard' ;


request(url, cb);
console.log("before");

function cb (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
if(error){
    console.log(error.message, "error");
}else if(response && response.statusCode == 404){
    console.log("page not found");
}
else{
    extractData(body);
    console.log("content receievd ");
  
    }

}

function extractData(body){

const JSDOM = jsdom.JSDOM;
let dom = new JSDOM(body);
let document = dom.window.document;

let output = document.querySelectorAll(".ds-text-compact-xxs.ds-p-2.ds-px-4 p>span");
let resElem = output[0];
let res = resElem.textContent;

console.log("result: ", res);
console.log("reached for parsing");
}
// Q1 print the result 
// npm i request jsdom 
// const request = require("request");
// const fs = require("fs");
// const jsdom = require("jsdom");
// let url = 'https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/kolkata-knight-riders-vs-lucknow-super-giants-66th-match-1304112/full-scorecard';
// request(url, cb);
// console.log('Before')
// function cb(error, response, body) {
//     if (error) {
//         console.log('error:', error.message); // Print the error message
//     } else if (response && response.statusCode == 404) {
//         console.log("Page not found");
//     } else {
//         console.log("content recieved");
//         // console.log(body);
//         extractData(body);
//     }
// }
// function extractData(body) {
//     const JSDOM = jsdom.JSDOM;
//     // pass to newJSDOM 
//     let dom = new JSDOM(body);
//     // 2. // no meaning 
//     // document represent the whole html page 
//     let document = dom.window.document;
//     let output = document.querySelectorAll(".ds-text-tight-m.ds-font-regular.ds-truncate.ds-text-typo-title");
//     let resultElem = output[0];
//     // textcontent 
//     let res = resultElem.textContent;
//     console.log("result :", res);
//     // using document and your selectors you find element in html page 
//     // console.log("reached for parsing");
// }


// {/* <p class="ds-text-tight-m ds-font-regular ds-truncate ds-text-typo-title"></p>  */}