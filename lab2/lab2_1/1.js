var fs = require('fs');
var text;
console.time('test');
fs.readFile('input.txt', function (err, logData) {
    if (err) throw err;
    text = logData.toString();
    //console.log(text);

    var mass = [];
    mass[0] = 0;
    mass[1] = 0;
    mass[2] = 0;

    try {
        //Проверяем скобочки открывающиеся.
        var reg = /\{/gi;
        var result = text.match(reg);
        if (result != null)
            mass[0] = (result.length);

        reg = /\[/gi;
        result = text.match(reg);
        if (result != null)
            mass[1] = (result.length);

        reg = /\(/gi;
        result = text.match(reg);
        if (result != null)
            mass[2] = (result.length);

        var status = 1;
        // Проверяем скобочки закрывающиеся если количество не совпадает, тогда все статус NO)
        for (var i = 0; i <= mass.length; i++) {
            if (mass[i] > 0) {
                switch (i) {
                    case 0:
                        reg = /\}/gi;
                        result = text.match(reg);
                        if (result != null) {
                            if (mass[i] != result.length)
                                status = 0;
                        }
                        break;
                    case 1:
                        reg = /\]/gi;
                        result = text.match(reg);
                        if (result != null) {
                            if (mass[i] != result.length)
                                status = 0;
                        }
                        break;
                    case 2:
                        reg = /\)/gi;
                        result = text.match(reg);
                        if (result != null) {
                            if (mass[i] != result.length)
                                status = 0;
                        }
                        break;
                }
            }
            // чего продолжать если виновник найден)
            if(!status) break;
        }
        if (status)
            console.log("YEP");
        else
            console.log("NO");
    } catch (e) {
        console.log("В строке нет " + reg)
    }
});
console.timeEnd('test');