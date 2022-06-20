const request = require('request');
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
    //console.log(body);
    
}

};
function extractData(body){
    const jsdom = require("jsdom");
const JSDOM = jsdom.JSDOM;
let dom = new JSDOM(body);
let document = dom.window.document;
   let output = document.querySelectorAll("table.ds-w-full.ds-table.ds-table-xs.ds-table-fixed");
   
   let firstInningBowling = output[1];
   let secondInningBowling = output[3];
    
   let newHtml ="<table>"+firstInningBowling.innerHTML + "</table>" + "<table>" + secondInningBowling.innerHTML + "</table";

 //console.log("result: ", resElem);
//  fs.writeFileSync("table.html", newHtml);
   //let res = resElem.textContent;
  
  // console.log("result: ", res );
  //console.log(newHtml);
  getDataFromBowlingTables(newHtml);

   console.log("reached for parsing");


}
console.log("after");

function getDataFromBowlingTables(newHtml){
    const jsdom = require("jsdom");
    const JSDOM = jsdom.JSDOM;
    let dom = new JSDOM(newHtml);
    let document = dom.window.document;
       let allRows = document.querySelectorAll("tbody tr.ds-text-tight-s");

       for(let i =0; i<allRows.length; i++){
           let singletr = allRows[i];
           let allColls = singletr.querySelectorAll("td");

           let name = allColls[0].textContent;
           let wickets = allColls[4].textContent;
            console.log("name: ",name, "wickets: ", wickets );           
           }
console.log(allRows.length);
        }

        
