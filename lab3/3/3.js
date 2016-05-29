var fs = require('fs'),
    readline = require('readline'),
    stream = require('stream');

var instream = fs.createReadStream('myfile.txt');
var outstream = new stream;
outstream.readable = true;
outstream.writable = true;

var rl = readline.createInterface({
    input: instream,
    output: outstream,
    terminal: false
});

rl.on('line', function(line) {
    console.log(line);
    //Do your stuff ...
    //Then write to outstream
    //rl.write(cubestuff);
});