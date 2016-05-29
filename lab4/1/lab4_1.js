/**
 * Created by prosolvo on 02/05/16.
 */
var fs = require('fs');
console.time('lab4');
fs.readFile('input.txt', function (err, data) {
    if (err) throw err;
    var text = (data.toString()).split("\n");
    var graph = [];
    var res = [];
    var N = text[0];
    var marks = [];
    var State = {
        WHITE: 0,
        GRAY: 1,
        BLACK: 2
    };
    for (var i = 1; i <= N; i++) {
        var temp = text[i].split(" ");
        var buf = temp;
        var vertex = temp[0];
        buf.shift();
        graph.push({V: vertex, E: buf});
    }
    if (!sortGraph()) {
        console.log("Graph has cycle");
        return;
    }
    function sortGraph() {
        var cycle = false;
        var gr = graph;
        for (var i = 0; i < gr.length; i++) {
            marks.push(gr[i].V, State.WHITE);
        }
        for (var i = 0; i < gr.length; i++) {
            cycle = dfs(gr[i].V);
            if (cycle) {
                res = null;
                return false;
            }
        }
        return true;
    }
    //Поиск в глубину (англ. Depth-first search
    function dfs(v) {
        if (marks[v] == State.GRAY) return true;
        if (marks[v] == State.BLACK) return false;
        marks[v] = State.GRAY;
        for (var i = 0; i < graph.length; i++) {
            if (graph[i].V === v) {
                var e = graph[i];
            }
        }
        var e;
        for (var i = 0; i < graph.length; i++) {
            //console.log(graph[i].V, v);
            if (graph[i].V == v) {
                e = graph[i];
            }
        }
        if (!e) {
            console.log("кого-то не нашли");
            return true;
        }
        for (i = 0; i < e.E.length; i++) {
            if (dfs(e.E[i])) {
                return true;
            }
        }
        res.push(v);
        marks[v] = State.BLACK;
        return false;
    }
    console.log(res);
});
console.timeEnd('lab4');