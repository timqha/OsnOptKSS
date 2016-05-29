var fs = require('fs');
var texts;
console.time('test');
fs.readFile('input.txt', function (err, logData) {
if (err) throw err;
texts = logData.toString();
var regOpen = /[\{\[\(]/;
var regClose = /[\}\]\)]/;
var dequeBracets = [];
var check = function (texts) {
try {
for (var index in texts) {
var character = texts[index];
var text = character;
if (character.match(regClose)) {
    if (dequeBracets.length == 0) return "NO";
    var bracket = dequeBracets.pop();
    switch (text) {
        case '}':
            if ('{' != bracket) {
                return "NO";}
            break;
        case ']':
            if ('[' != bracket) {
                return "NO";}
            break;
        case ')':
            if ('(' != bracket) {
                return "NO";}
            break;
    }                }
if (regOpen.exec(character)) {
    dequeBracets.push(text);
}            }
return dequeBracets.length == 0 ? "YES" : "NO";
} catch (e) {
console.log("В строке нет ");
}    };
var result = check(texts);
console.log(result);
});
console.timeEnd('test');