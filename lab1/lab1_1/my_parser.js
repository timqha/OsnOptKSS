var fs = require('fs');

console.time('test');
fs.readFile('example_log.txt', function (err, logData) {
    if (err) throw err;
    var text = logData.toString();
    var results = new String();
    var lines = text.split('\n');
    lines.forEach(function(line) {
        var parts = line.split(' ');
        var a = parseInt(parts[0]);
        var b = parseInt(parts[1]);
        //очень медленнно
        //a = a+b;
        //b = a-b;
        //a = a-b;
        // медленно
        b=(a+(a=b))-b;
        // быстро
        a=b+(b=a,0);
        // терпимо быстро
        a = [b, b = a][0];
        //само быстро
        var c = a;
        a = b;
        b = c;
        // медленно
        a = a ^ b;
        b = a ^ b;
        a = a ^ b;
        results+=a+' '+b+'\n';
    });
    console.timeEnd('test');
    fs.writeFile('out.txt',results);
});