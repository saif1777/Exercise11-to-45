let sandwiches=(...items:string[])=>{
console.log("summarysandwich")
if(items.length!==0){
    console.log("no item selected");
 } else {

for(let i of items){
    console.log(`${i}`)
}
        
    }
}
sandwiches("peppronie","pineapple","tomato ketchup");
sandwiches("peppronie","pineapple");
sandwiches();



