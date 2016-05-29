var fs = require('fs');
console.time('start');
var l, j, g;
var Bilet = [];
//количество символов N*n тоесть для трамвайных билетов n=3
var n=150;
// пути улучшения:
/* Найти как использовать bigdata
 * оптимизировать хранение пересчитываемых данных */
var k=0;
var Sum = [];

for (j=1; j<=n;j++){
    Sum[j] = [];
    Bilet[j] = 0;
    for(k=0;k<=9*n;k++){
        if(j==1){
            if(k<10) {
                Sum[j][k]=1;
            }
            else {
                Sum[j][k]=0;
            }
            Bilet[j]=Bilet[j]+Sum[j][k]*Sum[j][k];
            continue;
        } else{
            if(k<9) g=k;
            else  g=9;
            var res = 0;
            for(l=0;l<=g;l++){
               res = res+Sum[j-1][k-l];
                Sum[j][k]=res;
            }
        }
        Bilet[j]=Bilet[j]+Sum[j][k]*Sum[j][k];
    }
}
//fs.writeFile('out.txt',Bilet[n]);

//console.log(Math.pow(2,n));
console.log(Bilet[n]);
console.timeEnd('start');