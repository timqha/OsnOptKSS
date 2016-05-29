import java.io.File;
import java.util.Scanner;
import java.util.Stack;

public class Soul {
	//------------------------------------------------
	public static void main(String[] args) {
		int ng =1;
		int p=0;
		int arr[] =new int[2];
		Stack <Number>q = new Stack<>();
		Number nm;
//		Graph a = new Graph(4);
//		a.addVer(1);
//		a.addVer(2);
//		a.addVer(3);
//		a.addReb(1, 1);
//		q.push(new Number(1,1));
//		a.addReb(1, 2);
//		q.push(new Number(1,2));
//		a.addVer(4);
//		a.addReb(1, 4);
//		q.push(new Number(1,4));
//		a.addReb(2, 3);
//		q.push(new Number(2,3));
//		//a.printMat();
//		while(!q.isEmpty()){
//			nm = q.pop();
//			a.delRebReb(nm.a, nm.b);
//			
//			System.out.println(a.dfs()); 
//			a.addReb(nm.a, nm.b);
//		}
//		System.out.println(a.dfs());
		try(Scanner scn = new Scanner(new File("input.txt"))){
	
			Graph a = new Graph(scn.nextInt());
			
			while(scn.hasNext()){
				arr[0] = scn.nextInt();
				arr[1] = scn.nextInt();
				if(arr[0]>ng)
					ng = arr[0];
				if(arr[1]>ng)
					ng = arr[1];
				q.push(new Number(arr[0],arr[1]));
				//a.addVer(ng++);
				a.addReb(arr[0],arr[1]);
			}
			for(int i=0;i<ng;i++)
				a.addVer(i);
			int k =a.dfs();
			while(!q.isEmpty()){
				nm = q.pop();
				a.delRebReb(nm.a, nm.b);
				int m = a.dfs();
				if(m<k){
					p++;
					System.out.println(nm.a +" "+nm.b);}
				
				a.addReb(nm.a, nm.b);
			}
			if(p==0)
				System.out.println("No");
		} catch (Exception e){
			System.out.println(e);
		}
	}	
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
}
//----------------------------------------------------
class Graph{
	 Vertex Verts[];
	 int matrix[][];
	 int maxVertex;
	 int nVertex;
	 Stack <Integer>st;
	 //-----------------------------------------------
	 Graph(int maxVertex){
		 this.maxVertex = maxVertex;
		 matrix = new int[maxVertex][maxVertex];
		 Verts = new Vertex[maxVertex];
		 st = new Stack<>();
		 nVertex = 0;
		 for(int i = 0; i < maxVertex;i++)
			 for(int j = 0;j < maxVertex;j++)
				 matrix[i][j] = 0;
	 }
	 //-----------------------------------------------
	 void addReb(int start, int end){
		 matrix[start-1][end-1] = 1;
		 matrix[end-1][start-1] = 1;
	 }
	 //-----------------------------------------------
	 void delRebReb(int start, int end){
		 matrix[start-1][end-1] = 0;
		 matrix[end-1][start-1] = 0;
	 }
	 //-----------------------------------------------
	 void addVer(int l){
		Verts[nVertex++] = new Vertex(l);
		/* for(int i = 0; i < maxVertex;i++)
			 for(int j = 0;j < maxVertex;j++)
				 for(int k =0;k<maxVertex;k++)
					 */
	 }
	 //-----------------------------------------------
	 void display(int v){
		 System.out.println(Verts[v].label+"** ");
	 }
	 //-----------------------------------------------
	 int findUnvisible(int v){
		for(int i =0;i < nVertex;i++)
			if(matrix[v][i]==1&&Verts[i].wasVisited==false)
				return i;
		return -1;
	 }
	 //-----------------------------------------------
	/* void printMat(){
		 for(int a[]:matrix){
			 for(int b:a)
				 System.out.print(b +" ");
		 System.out.println();
		 }
	 }*/
	 //-----------------------------------------------
	  int dfs(){
		  int n =1;
		Verts[0].wasVisited = true;
		//display(0);
		st.push(0);
		while(!st.isEmpty()){
			int v = findUnvisible(st.peek());
			if(v==-1)
				st.pop();
			else{
				Verts[v].wasVisited = true;
				//display(v);
				n++;
				st.push(v);
			}
		}
		for(int z=0;z<nVertex;z++)
			Verts[z].wasVisited = false;
		 return n;
	 }
}
//----------------------------------------------------
class Number{
	int a;
	int b;
	//------------------------------------------------
	Number(int a,int b){
		this.a = a;
		this.b = b;
	}
}
