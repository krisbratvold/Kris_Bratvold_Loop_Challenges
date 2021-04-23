for(var i=1;i<=20;i++){
    if(i%2!=0)
    console.log(i);
}

var arr=[4,2.5,1,-0.5,-2,-3.5]

for(var i=0;i < arr.length;i++){
    console.log(arr[i]);
}

var sum=0;
for(var i=1;i<=100;i++){
    sum += i;
}
console.log(sum);


var n=0;
var product=1;
while(product<1e8) {
    n++;
    product *= n;
    }   
console.log(n);