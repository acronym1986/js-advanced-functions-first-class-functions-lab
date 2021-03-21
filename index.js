//test 1
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}

//test 2
const returnLastTwoDrivers = function (drivers){
    return drivers.slice(-2);
}

//test3 4 and 5
const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];


//test 6 and 7
const  createFareMultiplier = function (number){
    return function(fare) {
        return parseInt(fare * number);
    }
}
 
//test 7 and 8 
const fareDoubler = function (createFareMultiplier){
     return createFareMultiplier * 2;
} 

//test 8 and 9
const fareTripler = function (createFareMultiplier) {
     return createFareMultiplier * 3;
}


//test 10 and 11
const selectDifferentDrivers = function (drivers,selectingDrivers) {
      return selectingDrivers(drivers) ;
}