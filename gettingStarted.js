// let arr1 =[1, 2, 4, 5];
// let arr2 = [2, 4, 3, 6, 7];

// for(let i = 0; i<arr1.length; i++){
    
//     let isPresent = false;
//     let elementPut = arr1[i];
//     for(let j = 0; j<arr2.length; j++){
//         if (elementPut == arr2[j]){
//             isPresent =true;
//          }
//         }
//         if (isPresent == false)
//         arr2.push(elementPut);
//     }
    
    

// console.log(arr2);
    // for(let i = 0; i<10; i++){
    //     if(i%2==0){
    //         console.log(i);
    //     }
    // }
    // function fn(a, b){
    //     console.log(a," ", b);
    //     return "returnv"

    // }
    // fn(10, 20);

    // let val = fn(20, 30);
    // //console.log(val);

//  function binarytodeci(binary){
//      let v = binary/10;
//  let binary = binarytodeci(13);
//  console.log(binary);

//  const recordCollection = {
//     2548: {
//       albumTitle: 'Slippery When Wet',
//       artist: 'Bon Jovi',
//       tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//       albumTitle: '1999',
//       artist: 'Prince',
//       tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//       artist: 'Robert Palmer',
//       tracks: []
//     },
//     5439: {
//       albumTitle: 'ABBA Gold'
//     }
//   };
//   function getValues(recordCollection, id, prop){
//       console.log(recordCollection[id][prop]);

//   }
//  getValues(recordCollection, 5439, "albumTitle");
//  getValues(recordCollection, 2468, "tracks");
// // let obj = {
//     age: "21",
//     name: "Priyanshu"
// }

// let cast = "rajput";

// // function getValues(cast){
// //     console.log(obj[cast]);

// // }
// getValues("name");
// getValues("age");
// console.log(obj[cast]);

// let a = [20, 30, 40, 50 , 60, 70];

// console.log(a.slice(1, 3));

// let os = require("os");
// console.log(os.arch());
// console.log("........................................")
// console.log(os.cpus());
// console.log("........................................")
// console.log(os.platform());



//FILE SYsTEm
let fs = require("fs");
// let content = fs.readFileSync("readMe.txt", "UTF8");
// console.log(content);

// let writeContent = fs.writeFileSync("createMe.txt", "File Created");
// console.log("writeContent");

//  fs.appendFileSync("readMe.txt", "i hv added  something new");//append(add)

// fs.unlinkSync("createMe.txt");//delete

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//fs.mkdirSync("NwwFOLDER"); //create
//fs.rmdirSync("toBeremove"); //delete
//let content = fs.readdirSync("/Users/priyanshurana/HTML:CSS"); //read path
//console.log(content);

 let path = require("path");

// console.log(__dirname); //tells directory name
// console.log(__filename); //file name

// let folderName = "C:";
// let nextFolderName = "Next";
// let childFolder = "child";
// let actualFolder = "actual";

// let addreas = path.join(folderName, nextFolderName, childFolder, actualFolder);
// console.log(addreas);


