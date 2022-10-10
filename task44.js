
// var items_on_sandwich = ["mint", "raita"];
// function sandwich(items_on_sandwich){

// for(i=0; i<items_on_sandwich.length; i++){
// console.log(" \nthe items on sandwiches are " + items_on_sandwich[i]);
// }
// }

// sandwich(...items_on_sandwich);

var sandwichItems = [ 'topping', 'mayo', 'sauce', 'lattice'];


function displayName(){
 	for(var i=0; i<sandwichItems.length; i++){
 		console.log(" the items on sandwich will be"+sandwichItems[i]);
    }
}
displayName(...sandwichItems);
