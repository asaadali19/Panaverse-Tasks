

function check(car){
    return car=='subar' ? true : false;

}

console.log(check("abc"));
console.log(check("subar"));

function check1(caseSen){
    return caseSen=='Subar' ? true : false;

}

console.log(check1("abc"));
console.log(check1("Subar"));
console.log("this is using case sensitive");

function check2(intgr){
    return intgr===10 ? true : false;

}
console.log(check2(10));
console.log(check2("Subar"));

function check3(intgr){
    return intgr<10 ? true : false;

}
console.log("this is using integer");
console.log(check3(10));
console.log(check3(7));

function check4(intgr){
    if( intgr <20 && intgr >5){
        return true;
    }
    else return false;
    
}
console.log("this is using and operator");
console.log(check4(10));
    console.log(check4(25));


    function check5(intgr){
        if( intgr <20 || intgr >5){
            return true;
        }
        else return false;
        
    }
    console.log("this is using OR operator");
    console.log(check5(10));
        console.log(check5(25));


        console.log("checking that is this array or not");
        const nums = [ 1, 3, 5, 7];
        console.log(nums.includes(3,1
            ));

            console.log(nums.includes(5,15
                ));

