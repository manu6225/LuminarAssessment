var n=2;
var min=49;
var max=65;

for(i=1;i<=10;i++){

    sq=Math.pow(i,n);

    if((sq>=min)&&(sq<=max)){
        console.log(sq+"("+i+"^"+n+")");
    }
}