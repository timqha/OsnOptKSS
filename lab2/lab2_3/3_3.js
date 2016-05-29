var Dequeue = require('dequeue');
var fs = require('fs');
fs.readFile('input3.txt', function(err, data){
    if(err) throw err;
    var text = data.toString();
    var N = parseInt(text[0]);
    var M = parseInt(text[2]);
    var L = parseInt(text[4]);
    var people = new Dequeue();
    for(var i=L+1;i<=N;i++) people.push(i);
    for(i=1;i<=L;i++) people.push(i);
    while(people.length !=1){
        for(i=0; i<M; i++) people.unshift(people.pop());
        people.shift();
    }
   var last = people.shift();
    console.log(last);
});