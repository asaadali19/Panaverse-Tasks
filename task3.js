// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let person_name = "asad ali is Going";
console.log(person_name.toUpperCase(),  person_name.toLowerCase());
// for title case we have to right a function
function titlecase(person_name){
    person_name = person_name.toLowerCase();
    person_name = person_name.split(' ');

    for(i=0; i<person_name.length; i++){
        person_name[i] = person_name[i].charAt(0).toUpperCase() + person_name[i].slice(1); 
    }
    return person_name.join(' ');

}
console.log( titlecase(person_name) );
