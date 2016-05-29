/**
 * Created by prosolvo on 4/19/16.
 */
var Dequeue = require('dequeue');
var fs = require('fs');
fs.readFile('input.txt', function(err, data){
    if(err) throw err;
    var text = data.toString();
    var N = parseInt(text[0]);
    var M = parseInt(text[2]);
    var people = new Dequeue();
    for(var i=1;i<=N;i++) people.push(i);
    while(people.length != 1){
        for(i=1; i<M; i++) people.push(people.shift());
        people.shift();
    }
    var last = people.shift();
    console.log(last);
});
