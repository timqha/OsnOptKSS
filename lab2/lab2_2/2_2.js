/**
 * Created by prosolvo on 4/18/16.
 */
//Задана строка, содержащая арифметическое выражение.
// В записи допускаются цифры, символы ‘+’, ‘-‘, ‘*’, ‘/’, ‘.’, ().
// Вычислить выражение. При вычислении выражения следует учитывать
// порядок выполнения арифметических действий.
// Если выражение вычислить невозможно – выдать сообщение об ошибке.
//    Исходные данные
//В единственной строке находится арифметическое выражение.
// В выражении могут использоваться символы 0-9, +, -, *, / и пробел.
//2+2*2-(2/2+2)
// ответ 3
var stackOperations = [];
var stackOperand = [];

var fs = require('fs');

//var delimiter = "([ ]+)|((?<=op)|(?=op))".replace("op", "[-+()/*]";
var number = /(?:^[+-])?\d+(?:\.\d+)?/;

//Pattern highPriority = Pattern.compile("[*(/]");
//Pattern lowerPriority = Pattern.compile("[-+)]");
function isNumeric(numeral) {
    return !isNaN(parseFloat(numeral) && isFinite(numeral));
}
var isNumber = false, outOfRange = false;

console.time('start');
fs.readFile('input.txt', function (err, data) {
    if (err) throw err;
    var text = data.toString();

    //var number = data.toNumber();


    //console.log("ddd" + text.match(reg));
    for (var i = 0, max = text.length; i < max; i++) {
       // console.log(isNumeric([text[i]]));
        if (isNumeric(text[i])) {
            stackOperand.push(text[i]);
        } else {
            //if()
            stackOperations.push(text[i]);
        }
    }
    //console.log(stackOperand);
    //console.log(stackOperations);
    try {
        var resultato = eval((text));
        console.log(resultato);
    } catch (e) {
        console.log("No");
    }

});
function execute(a, b, operator) {
    var result = 0;
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (Math.abs(b) <= 0.00001) {
                throw "Zero does not divide";
            }
            result = a / b;
            break;
    }
    return result;
}
console.timeEnd('start');
