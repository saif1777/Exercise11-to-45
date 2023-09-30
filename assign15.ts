let originalguestlist:string[]=["saif","ahsan","arshad","kamran",];
let nonguest:string="kamran";
let newguest:string="sohail";
let a= originalguestlist.indexOf(nonguest);
originalguestlist[a]=newguest;
for(var i=0;i<originalguestlist.length;i++){
     console.log(`You are invited to dinner MR ${originalguestlist[i]}`)
};