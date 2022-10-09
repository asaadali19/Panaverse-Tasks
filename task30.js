let username = ["admin", "asad", "ali", "saqib","wasif"];

for(i=0; i<username.length; i++){

    if(username[i]=== "admin"){
        console.log("Hello "+ username[i]+ " , would you like to see a status report?")
    }
    else if (username[i]!= "admin"){
        console.log("Hello "+ username[i] + " thank you for logging in again.")
    }
    
}