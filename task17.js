//Shrinking Guest List:

//More Guests:


var inviteList = ["asad", "ali", "saqib", "wasif", "asif"];


for(var i=0; i<inviteList.length; i++){
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
console.log(" \nI can invite only two people for dinner");

for( i<inviteList.length; i>2; i--){
    
    namee=inviteList.pop();
    console.log("I am sorry I can’t invite you to dinner, " + namee);
    
} 
for( i=0;i<inviteList.length;  i++){
    console.log("you’re still invited. " + inviteList[i]);
    } 
for( i=0;i<=inviteList.length;  i++){
        inviteList.pop();
    

    }
    console.log(inviteList);
    

