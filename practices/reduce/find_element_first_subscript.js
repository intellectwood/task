'use strict';

function calculate_elements_sum(collection, element) {
 
 let coordinate=0;

 
 for (let item of collection)
 {
     if(item == element) {
        break;
     }
     coordinate++;
 }
 
 
    return coordinate;

}

module.exports = calculate_elements_sum;

