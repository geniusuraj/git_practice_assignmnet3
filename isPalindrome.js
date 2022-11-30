let str=12215;
let bag="";
let pali=str.toString().split("");
for(let i=pali.length-1; i>=0; i--){
    bag+=pali[i];
}
if(bag==str){
    console.log("Palindrome");
}else{
    console.log("Not Palindrome");
}