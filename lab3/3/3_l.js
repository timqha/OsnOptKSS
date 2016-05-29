var fs = require('fs');
//var sort = require('sort-stream');
var parse = require('csv-parse');
var transform = require('stream-transform');
var sort = require("sort-stream2")
var through = require("through2")

// Create a readble stream from the input file.
fs.createReadStream('./Input3_3.txt')
    // Use `csv-parse` to parse the input using a tab character (\t) as the
    // delimiter. This produces a record for each row which is an array of
    // field values.
    .pipe(parse({
        delimiter: '\t'
    }))
    // Use `sort-stream` to sort the parsed records on the third field.
    .pipe(sort(function (a, b) {
        //console.log(a);
        return a - b;
    }))
    // Use `stream-transform` to transform each record (an array of fields) into
    // a single tab-delimited string to be output to our destination text file.
    .pipe(transform(function(row) {
        return row.join('\t') + '\r';
    }))
    // And finally, output those strings to our destination file.
    .pipe(fs.createWriteStream('./cross_sorted.txt'));