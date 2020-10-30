var n=2
var op=0;

for(i=n;i>=0;i--){
    for(j=i-1;j>=0;j--){
        op+=Math.pow(10,j)*n;
    }
}
console.log(op);