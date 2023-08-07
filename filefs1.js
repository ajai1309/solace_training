/*
Blocking codePoint
In order to read the file , package used is : fs
fs.readFileSync() :: method uses the synchronous style of communication
readFileSync() --> would use blocking style of communication.
If sync method/func is to be used :: Method ending with the word "sync" --> readFileSync()
If async method :: default :: readFile()
*/



var fs= require("fs");
var data = fs.readFileSync('node1.txt');

console.log(data.toString());
console.log("Program Ended");