let visitingPlaces = ["US", "Canada", "India", "Australia"];

var sortedArray = visitingPlaces.slice();
for(let i=0; i< visitingPlaces.length; i++){
    console.log(visitingPlaces[i]);
}



sortedArray = sortedArray.sort();
console.log("");
for(let i=0; i< sortedArray.length; i++){
    
    console.log(sortedArray[i]);
}
//Show that your array is still in its original order by printing it.


console.log("");
for(let i=0; i< visitingPlaces.length; i++){
    console.log(visitingPlaces[i]);
}
console.log(sortedArray.reverse());

// aagin Show that your array is still in its original order by printing it.
console.log(visitingPlaces);

//again reversing 
console.log(sortedArray.reverse());

// reversingg the order of original list
console.log(visitingPlaces.reverse());

// reversingg again the order of original list

console.log(visitingPlaces.reverse());
// soring original list
console.log(visitingPlaces.sort());

// reversing the sorted array original list
console.log(visitingPlaces.reverse());