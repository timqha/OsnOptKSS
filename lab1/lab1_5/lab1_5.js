/**
 * Created by prosolvo on 3/19/16.
 */
var fs = require('fs');
fs.readFile("start.txt", function(err, data){
    if(err) throw err;
    var text = data.toString();
    var lines = text.split('\n');
    var radius = lines[0].charAt(2);
    var coordinates = [];
    lines.forEach(function(line){
        coordinates.push(line.split(' '));
        //create array
        //  [ [ '4', '1' ],
        //    [ '0.0', '0.0' ],
        //    [ '2.0', '0.0' ],
        //    [ '2.0', '2.0' ],
        //    [ '0.0', '2.0' ] ]

    });
    // Для замыкания.
    coordinates.push(coordinates[1]);
    var lineLength = function(cord1, cord2){
      // cord1[0] X1
      // cord1[1] Y1
        return Math.sqrt(Math.pow((parseInt(cord2[0])-parseInt(cord1[0])),2)+Math.pow((parseInt(cord2[1])-parseInt(cord1[1])),2));
    };
    var P=0;
    for(var i = 1; i<coordinates.length-1;i++){
        P+=Math.ceil(lineLength(coordinates[i],coordinates[i+1]));
        console.log(lineLength(coordinates[i],coordinates[i+1]));
    }
// 180*(n-2)
    P+=((180*(lines[0].charAt(0)-2))/360)*2*Math.PI*parseInt(radius);
    console.log(P);
});