var fs = require('fs');

console.time('lab4_4');
fs.readFile('input.txt', function (err, data) {
    if (err) throw err;
    var text = (data.toString()).split("\n");
    var N = text[0];
    text.unshift();
    var cost = 0;
    var g =[];
    var j= 0,i=0;
    var treeId = [];
    var res = [];
    for (i = 1; i <= N; i++) {
        var temp = text[i].split(" ");
        g.push({A:parseInt(temp[0]), B:parseInt(temp[1]), Weight: parseInt(temp[2])});
    }
    //console.log(g);
    g.sort(compare);
    function compare(a, b) {
        return a.Weight- b.Weight;
    }
    for(i=0; i<=N;++i){
        treeId.push(i);
    }
    //console.log(treeId);
    //console.log(g);

    for(i=0;i<N;++i){
        if(treeId[g[i].A] != treeId[g[i].B]){
            cost+= g[i].Weight;
            res.push({A: g[i].A, B: g[i].B});
            var oldId = treeId[g[i].B];
            var newId = treeId[g[i].A];
            for(j=0;j<N;j++){
                if(treeId[j] == oldId) treeId[j] = newId;
            }
        }
    }

    console.log(res);
    console.log(cost);

});
console.timeEnd('lab4_4');