function city_country(city, country){

    // firstLetter = city.charAt(0).toUpperCase();
    // remainingletters = city.slice(1);
   return console.log(city.charAt(0).toUpperCase()+city.slice(1)+ ", " + country.charAt(0).toUpperCase() +country.slice(1))
    ;
}

city_country("lahore", "pak");
city_country("banglore", "ind");
city_country("manchaster", "uk");