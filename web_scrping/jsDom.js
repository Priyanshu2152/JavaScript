let fs = require("fs");
let htmlContent = fs.readFileSync("dom.html", "utf-8");
const jsdom = require("jsdom");
const JSDOM = jsdom.JSDOM;
let dom = new JSDOM(htmlContent);
let document = dom.window.document;
 const allPs= document.querySelectorAll("p");
console.log(allPs.length);
 let pKaContent = allPs[0].textContent;
 console.log("pKacontent", pKaContent);

const allIds = document.querySelectorAll("#unique");
let contentId = allIds[0].textContent;
console.log(contentId);

