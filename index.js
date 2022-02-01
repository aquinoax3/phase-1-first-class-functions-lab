



const returnFirstTwoDrivers = (function (driver1) {
    return driver1.slice(0,2);

});


const returnLastTwoDrivers = (function (driver1){
    return driver1.slice(-2);

});

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return (function (fare) {
        return fare * integer
    });
}


const fareDoubler = function fareDoubler(fare) {
    return createFareMultiplier(2)(fare); 
} 

const fareTripler = function fareTripler(fare) {
    return createFareMultiplier(3)(fare);

}


//const fareDoubler = createFareMultiplier(2)

//const fareTripler =  createFareMultiplier(3)


function selectDifferentDrivers(arrDrivers,returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrDrivers);
}


