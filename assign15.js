"use strict";
let originalguestlist = ["saif", "ahsan", "arshad", "kamran",];
let nonguest = "kamran";
let newguest = "sohail";
let a = originalguestlist.indexOf(nonguest);
originalguestlist[a] = newguest;
for (var i = 0; i < originalguestlist.length; i++) {
    console.log(`You are invited to dinner MR ${originalguestlist[i]}`);
}
;
