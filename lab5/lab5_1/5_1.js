var fs = require("fs");
fs.readFile('input2.txt', function(err,data){
    if(err) throw err;
    var text = (data.toString()).split("\n");
    var ng=1;
    var p=0;
    var arr = [];
    var q = [];
    var graph = [];
    var nm;
    var N = text[0];
    text.unshift();
    console.log(text);
    var State = {
        WHITE: 0,
        GRAY: 1,
        BLACK: 2
    };
    for (var i = 1; i <= N; i++) {
        var temp = text[i].split(" ");
        var vertex = temp[0];
        var edge = temp[1];

        if(vertex>ng)
            ng = vertex;
        if(edge>ng)
            ng = edge;
        q.push([vertex, edge]);
        graph.push({V: vertex, E: edge});
    }

    console.log(q);
    console.log(graph);

    //for (var i = 0; i < graph.length; i++) {
    //    marks.push(graph[i].V, State.WHITE);
    //}


});
/*  int ng =1;
    int p=0;
    int arr[] =new int[2];
    Stack <Number>q = new Stack<>();
    Number nm;
    try(Scanner scn = new Scanner(new File("input.txt"))){
    Graph graph = new Graph(scn.nextInt());
    while(scn.hasNext()){
    arr[0] = scn.nextInt();
    arr[1] = scn.nextInt();
    if(arr[0]>ng)
    ng = arr[0];
    if(arr[1]>ng)
    ng = arr[1];
    q.push(new Number(arr[0],arr[1]));
  graph.addReb(arr[0],arr[1]);
}
for(int i=0;i<ng;i++)
  graph.addVer(i);
int k =graph.dfs();
while(!q.isEmpty()){
    nm = q.pop();
  graph.delRebReb(nm.a, nm.b);
    int m = a.dfs();
    if(m<k){
        p++;
        System.out.println(nm.a +" "+nm.b);}
  graph.addReb(nm.a, nm.b);
}
if(p==0)
    System.out.println("No");
} catch (Exception e){
    System.out.println(e);
}
//----------------------------------------------------
class Vertex{
    public boolean wasVisited;
    public int label;
    //------------------------------------------------
    Vertex(int a){
    wasVisited = false;
    label = a;
}
}*/
////----------------------------------------------------
//class Graph{
//    Vertex Verts[];
//    int matrix[][];
//    int maxVertex;
//    int nVertex;
//    Stack <Integer>st;
//    //-----------------------------------------------
//    Graph(int maxVertex){
//    this.maxVertex = maxVertex;
//    matrix = new int[maxVertex][maxVertex];
//    Verts = new Vertex[maxVertex];
//    st = new Stack<>();
//    nVertex = 0;
//    for(int i = 0; i < maxVertex;i++)
//    for(int j = 0;j < maxVertex;j++)
//    matrix[i][j] = 0;
//}
////-----------------------------------------------
//void addReb(int start, int end){
//    matrix[start-1][end-1] = 1;
//    matrix[end-1][start-1] = 1;
//}
////-----------------------------------------------
//void delRebReb(int start, int end){
//    matrix[start-1][end-1] = 0;
//    matrix[end-1][start-1] = 0;
//}
////-----------------------------------------------
//void addVer(int l){
//    Verts[nVertex++] = new Vertex(l);
//}
////-----------------------------------------------
//void display(int v){
//    System.out.println(Verts[v].label+"** ");
//}
////-----------------------------------------------
//int findUnvisible(int v){
//    for(int i =0;i < nVertex;i++)
//    if(matrix[v][i]==1&&Verts[i].wasVisited==false)
//        return i;
//    return -1;
//}
//int dfs(){
//    int n =1;
//    Verts[0].wasVisited = true;
//    //display(0);
//    st.push(0);
//    while(!st.isEmpty()){
//        int v = findUnvisible(st.peek());
//        if(v==-1)
//            st.pop();
//        else{
//            Verts[v].wasVisited = true;
//            //display(v);
//            n++;
//            st.push(v);
//        }
//    }
//    for(int z=0;z<nVertex;z++)
//    Verts[z].wasVisited = false;
//    return n;
//}
//}
////----------------------------------------------------
//class Number{
//    int a;
//    int b;
//    //------------------------------------------------
//    Number(int a,int b){
//    this.a = a;
//    this.b = b;
//}
//}