/**
 * Created by prosolvo on 09/05/16.
 */
var fs = require('fs');
console.time('lab4');
fs.readFile('input.txt', function (err, data) {
    if (err) throw err;
    var text = (data.toString()).split("\n");
    // console.log(text);
    var graph = [];
    var res = [];
    var N = text[0];
    var marks = [];
    var State = {
        WHITE: 0,
        GRAY: 1,
        BLACK: 2
    };
    var timeArr = [];

    for (var i = 1; i <= N; i++) {
        var temp = text[i].split(" ");
        var buf = temp;
        var vertex = temp[0];
        buf.shift();
        var time = temp[0];
        buf.shift();
        graph.push({V: vertex, Time: time, E: buf});
    }

    if (!sortGraph()) {
        console.log("Graph has cycle");
        return;
    }

    function sortGraph() {

        for (var i = 0; i < graph.length; i++) {
            marks.push(graph[i].V, State.WHITE);
        }

        for (i = 0; i < graph.length; i++) {
            if (dfs(graph[i].V, 0.0)) {
                res = null;
                return false;
            }
        }
        return true;
    }

    //Поиск в глубину (англ. Depth-first search
    function dfs(v, curTime, maxTime) {

        if (marks[v] == State.GRAY) return true;
        if (marks[v] == State.BLACK) return false;
        marks[v] = State.GRAY;

        var e;
        for (var i = 0; i < graph.length; i++) {
            if (graph[i].V === v) {
                e = graph[i];
            }
        }

        if(!maxTime) maxTime = 0;
        curTime+= parseFloat(e.Time);

        if (!e) {
            console.log("кого-то не нашли");
            return true;
        }

        for (i = 0; i < e.E.length; i++) {
            if (dfs(e.E[i],curTime, maxTime)) {
                return true;
            }
        }
        if(curTime>maxTime) {
            maxTime = curTime;
            timeArr.push(maxTime);
        }
        //curTime -= e.Time;
        res.push(v);
        marks[v] = State.BLACK;
        return false;
    }
    console.log(res, (timeArr.sort())[0]);
});
console.timeEnd('lab4');