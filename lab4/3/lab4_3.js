var fs = require('fs');

console.time('lab4_3');
fs.readFile('input.txt', function (err, data) {
    if (err) throw err;
    var text = (data.toString()).split("\n");

    //алгоритмом Дейкстры за O(N2+M)
    //Infinity
    var d = [], u = [], temp = [], g = [], p = [];
    var N = text[0];
    text.unshift();
    var s = 0, tempName, tempL=0, i= 0,j=0;
    var INF = 1000000000;

    d[0] = 0;
    for (i = 0; i < N; i++) {
        u[i] = false;
    }

    for (i = 1; i < N; i++) {
        d[i] = INF;
    }

    for (i = 1; i <= N; i++) {
        temp = text[i].split(" ");
        var buf = [];
            for(j=1;j<temp[0]*2;j+=2){
                tempName = parseInt(temp[j]);
                tempL = parseInt(temp[j+1]);
                buf.push({Number: tempName-1, L: tempL});
            }
        g.push(buf);
    }

    for(i=0;i< g.length;i++){
        console.log(g[i]);
        console.log("\n");
    }

    for(i = 0; i < N; i++)
    {
        var v = -1;
        for (j = 0; j < N; j++)
        if (!u[j] && (v == -1 || d[j] < d[v]))
            v = j;
        if (d[v] == INF) break;
        u[v] = true;
        for(j = 0; j < g[v].length; j++)
        {
            var to = g[v][j].Number,
            len = g[v][j].L;
            if(d[v] + len < d[to])
            {
                d[to] = d[v] + len;
                p[to] = v;
            }
        }
    }

    console.log(d);

    console.log("***********************************");

    for(i=1; i<N;i++){
        var result = Path(i, s, p);
        for(j=0;j<result.length;j++){
            result[j]++;
        }
        console.log(result);
    }

    function Path(t, s, p){
        var path = [];
        for(var v=t;v!=s; v=p[v])
            path.push(v);
        path.push(s);
        path.reverse();
        return  path;
    }

});
console.timeEnd('lab4_3');