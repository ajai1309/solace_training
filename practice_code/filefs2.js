//non blocking code - asynchronous code
//If sync method/func is to be used :: Method ending with the word "sync" --> readFileSync()
//If async method :: default :: readFile()

var fs= require("fs");

fs.readFile('users1.json', function(err, data) {
	if(err) return console.error(err);
	console.log(data.toString());
});

console.log("Program Ended !!!");
console.log("!!! --- Program Ended --- !!!");
