function car_details(model, manufacturer, ...otherOptions){

    car_dict = {
        'manufacturer': manufacturer,
        'model': model,
       
        }
        for( i=0; i<otherOptions.length; i++){
            car_dict[otherOptions] = otherOptions[i];
        }
        
    return car_dict;
}


my_outback = car_details('subaru', 'outback', color='blue')
console.log(my_outback );

my_accord = car_details('honda', 'accord', year=1991, color='white',
        headlights='popup')
console.log(my_accord)