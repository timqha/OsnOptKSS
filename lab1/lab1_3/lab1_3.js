// no work
var fs = require("fs");
var N=7;
var K=1;
var time=1;
var g=1;
var k=1;
//for(var i=0;i<N;i++){
//    i+=g;
//    if(g<K){
//        g++;
//    }
//    k+=time;
//}

var i=0;
for(var a1=1,b1=1;a1<N;++i){
    a1+=b1;
    if(b1<K)
        b1++;
}
console.log(i);
fs.writeFile('out.txt', i);
