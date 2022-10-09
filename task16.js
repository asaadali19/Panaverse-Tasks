//More Guests:


let inviteList = ["asad", "ali", "saqib", "wasif", "asif"];


for(i=0; i<inviteList.length; i++){
    console.log("you are invited for dinner, " + inviteList[i]);
}   
console.log(" \ni think "+ inviteList[0]+ " can't make it, so i am sending invitation again");

inviteList.shift();
console.log("so the new invitation is.....\n");

inviteList.unshift("sir zia khan");

for(i=0; i<inviteList.length; i++){
    console.log("you are invited for dinner, " + inviteList[i]);
} 
console.log("\nHey people! I found a bigger dinner table, so inviting more people.");

inviteList.unshift("Sir Danial Nagori ");
inviteList.splice(4,0, "sir zeeshan hanif")
inviteList.push("haris khan");
for(i=0; i<inviteList.length; i++){
    console.log("you are invited for dinner, " + inviteList[i]);
} 
