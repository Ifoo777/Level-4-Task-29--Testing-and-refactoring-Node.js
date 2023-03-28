// exporting the module that takes in the function
module.exports = {calculateCost}
// function who takes kilometers as input amd return price as output

function calculateCost(kilometers){
     // condition if kilometers is between 0 to 20
     if (kilometers >= 0 && kilometers <=20){
     return 200;
}

// condition if kilometers is between 21 to 50
    if (kilometers >=21 && kilometers <=50){
    return (200 + (kilometers - 20));
}

// condition if kilometers is between 51 to 100
    if (kilometers >= 51 && kilometers <= 100 ){
    return (220 + ((kilometers - 50 ) * 0.80));
}

 // condition if kilometers is more than 101
    if (kilometers >= 101){
    return (260 + ((kilometers - 100) * 0.50));
 }


}
