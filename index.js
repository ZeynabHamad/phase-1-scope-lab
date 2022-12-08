
//1.
var customerName= "bob";

//2.
function upperCaseCustomerName(){
    customerName= customerName.toUpperCase();
    return customerName;
}

//3.
var bestCustomer ;
function setBestCustomer(){
    bestCustomer= "not bob";
    return bestCustomer;
}

//4.
function overwriteBestCustomer(){
    bestCustomer= "maybe bob";
    return bestCustomer;
}

//5.
const leastFavoriteCustomer="";
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer="Assignment to constant variable.";
    return leastFavoriteCustomer;

}