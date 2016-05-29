/**
 * Created by prosolvo on 01/05/16.
 */
var fs = require('fs');
fs.readFile('input.txt', function(err, data) {
    if (err) throw err;
    var data = data.toString();
    var N = data[0];
    var l = data.split('\n');
    var lines = [];

    //формируем массив массивов
    for (var i = 1; i <= N; i++) {
        lines.push([parseInt(l[i].split(' ')[0]), parseInt(l[i].split(' ')[1]), parseInt(l[i].split(' ')[2])]);
    }

    // подготовительные работы, получения массива и его сортировка.
    var houses = lines.sort(compare);
    var result = [];
    var left = 0, height = 1, right = 2;

    function start() {

        // findFirstHouse
        var hStart = houses[0][left];
        var hHeight = houses[0][height];

        result.push(hStart, hHeight);

        var tempHigh = 0;

        // находим самое  большое число в ведённых данных.
        var maxHeight = findmaxHouseHeight();

        for (var x = hStart + 1; x <= maxHeight; x++) {
            tempHigh = findMaxHeight(x);
            if (tempHigh != hHeight) {
                result.push(x, tempHigh);
                hHeight = tempHigh;
            }
        }
        console.log(result);
    }

    function findMaxHeight(x) {
        var maxHeight = 0;
        //console.log('x = ' + x);
        for (i = 0; i < houses.length; i++) {
            if (x >= houses[i][left] && x <= houses[i][right]) {
                //console.log(houses[i]);
                if (houses[i][right] == x) continue;
                if (houses[i][height] > maxHeight)
                    maxHeight = houses[i][height];
            }
        }
        return maxHeight;
    }

    function findmaxHouseHeight() {
        var maxH = 0;
        var maxL = 0;
        var maxR = 0;
        houses.forEach(function (l) {
            if (maxH < l[height]) maxH = l[height];
            if (maxL < l[left]) maxL = l[left];
            if (maxR < l[right]) maxR = l[right];
        });
        if (maxH >= maxL && maxH >= maxR) return maxH;
        if (maxL >= maxH && maxL >= maxR) return maxL;
        if (maxR >= maxL && maxR >= maxH) return maxR;
    }

    // т к массив не одномерный, а нам нужна сортировка только 1 го члена используем компаратор
    function compare(a, b) {
        if (a[0][0]<b[0][0]) return -1;
        if (a[0][0]>b[0][0]) return 1;
        return 0;
    }

start();
});