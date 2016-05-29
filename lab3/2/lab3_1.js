/**
 * Created by prosolvo on 4/23/16.
 */

    var fs = require('fs');
    var first = 0, last = 1;

//struct Coordinat
//{
//    public int X { get; set; }
//    public int Y { get; set; }
//}

fs.readFile('input.txt', function(err, data){
   if (err) throw err;

    var left = 0, right = 2, pHeight =1;
    var data = data.toString();
    var N = data[0];

    var l = data.split('\n');
    var lines = [];
    var temp = [];

    //формируем массив массивов
    for(var i=1;i<=N;i++){
        lines.push([parseInt(l[i].split(' ')[0]), parseInt(l[i].split(' ')[1]),parseInt(l[i].split(' ')[2])]);
    }


    lines = lines.sort(compare);

    //lines.forEach(function(l) {
    //    console.log(l);
    //    var isFirst = true;
    //    l.forEach(function(line){
    //    //   console.log(line);
    //        if (isFirst) {
    //            begin = line[0];
    //            end = line[1];
    //            isFirst = false;
    //        }
    //
    //        if (line[0] <= end)
    //        {
    //            if (line[1] > end)
    //                end = line[1];
    //        }
    //        else
    //        {
    //            temp.push(begin);
    //            temp.push(end);
    //            //begin = temp[0];
    //            //end = temp[1];
    //        }
    //    });
    //});

    var end = lines[0][right];
    var trash = [];
    var height = lines[0][pHeight];

    for(var i=0; i<lines.length;i++){
        console.log(i, lines[i], end, height);
        if(lines[i][right]>end && lines[i][pHeight]<=height){
            height = lines[i][pHeight];
            end = lines[i][right];
            lines.splice(i,"");
            console.log(end, height);
        } else {
            console.log("dfd");
            trash.push(lines[i]);
        }
        console.log(" ==========================");
    }

    console.log(trash);
    // т к массив не одномерный, а нам нужна сортировка только 1 го члена используем компаратор
    function compare(a, b) {
        if (a[0][0]<b[0][0]) return -1;
        if (a[0][0]>b[0][0]) return 1;
        return 0;
    }

    //  console.log(lines, N);
    // console.log(length);
});

//1 11 3 13 9 0 12 7 16 3 19 18 22 3 23 13 29 0