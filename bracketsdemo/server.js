var fs = require("fs");

console.log('Hello to node js')


fs.readFile('node.txt', function(err, data){
    console.log('Contents of file : ' + data)
})

