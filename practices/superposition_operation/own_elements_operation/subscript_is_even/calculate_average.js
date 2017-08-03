'use strict';
var calculate_average = function(collection){
    
    let sum=0;
    let even_times=0;
    for(let item of collection){
    if(item %2 == 0 ) {sum+=item;    even_times++;}

    }
    
    
    return sum / even_times;
};
module.exports = calculate_average;
