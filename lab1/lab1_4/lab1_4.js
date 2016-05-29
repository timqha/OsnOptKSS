/**
 * Created by prosolvo on 3/19/16.
 */

//N = (A + 0) + (A + 1) + … + (A + P − 1)
// (2+4-4)+(2+4-3)+(2+4-2)+(2+4-1)
// (1+0)+(1+1)+(1+2)+(1+3)+(1+4)=15
// (2+0)+(2+1)+(2+2)+(2+3)
// N 14 A 2 P 4
//0<N<=109
var N = 30;
var sum=0;
var A=0;
var i=0;
for(var i=0;;i++) {
    sum+=A+i;
    if(sum==N){
        console.log("Summ",sum);
        A++;
        console.log(A);
        console.log(i);
        break;
    }
    if(sum>N) {
        A++;
        i=0;
        sum=0;
    }
}


