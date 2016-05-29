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

//Функция isFinite(n) преобразует аргумент к числу и возвращает true, если это не Infinity/-Infinity/NaN.
//Таким образом, правая часть отсеет заведомо не-числа, но оставит такие значения как true/false/null и
// пустую строку '', т.к. они корректно преобразуются в числа.

//Для их проверки нужна левая часть. Вызов parseFloat(true/false/null/'') вернёт NaN для этих значений.
//Так устроена функция parseFloat: она преобразует аргумент к строке, т.е. true/false/null становятся
// "true"/"false"/"null", а затем считывает из неё число, при этом пустая строка даёт NaN.
function isNumeric(numeral) {
    return !isNaN(parseFloat(numeral) && isFinite(numeral));
}
var fs = require('fs');
var reg = /[^\d\s\.\*\+\-\/()]|[\*\+\-\/]{2,}|[\*\+\-\/]$|(?:\(\))/gi;
console.time('start');
fs.readFile('input.txt', function (err, data) {
    if (err) throw err;
    var text = data.toString();

    console.log("ddd" + text.match(reg));
    for (var i = 0, max = text.length; i < max; i++) {
        console.log(isNumeric([text[i]]));
        if (isNumeric(text[i])) {
            stackOperand.push(text[i]);
        } else {
            //if()
            stackOperations.push(text[i]);
        }
    }
    console.log(stackOperand);
    console.log(stackOperations);
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
