let num=13;
let isPrime=0;
for(let i=1; i<=num; i++){
    if(num%2==0){
        isPrime++;
    }
}
if(isPrime==2){
    console.log(num,"isPrime");
}else{
    console.log(num,"Is Not Prime");
}