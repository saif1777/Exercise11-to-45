let vipguestlist:string[]=["saif","ahsan","arshad","kamran",];
vipguestlist.unshift("Mushtaq");
vipguestlist.push("haider");
vipguestlist.splice(2,0,"furqan");
console.log(vipguestlist);
let nonguest1:string="kamran";
let newguest1:string="sohail";
let a1= vipguestlist.indexOf(nonguest1);
vipguestlist[a1]=newguest1;
for(var i=0;i<vipguestlist.length;i++){
     console.log(`You are invited to dinner MR ${vipguestlist[i]}`)
};