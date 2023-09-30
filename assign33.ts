let numbers:number[]=[1,2,3,4,5,6,7,8,9];
for(let num of numbers){
let ordending:string;
if(num===1){
ordending="st";
}
else if(num===2){
   ordending="nd" 
}else if(num===3){
    ordending="rd"
}else{
    ordending="th"
}
console.log(`${num}${ordending}`);
}