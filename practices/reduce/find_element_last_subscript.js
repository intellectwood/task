'use strict';

function calculate_elements_sum(collection, element) {
 let coordinate=0;
 let element_coordinates=[];
 
 for (let item of collection)
 {
     if(item == element) {
         element_coordinates.push(coordinate);
     }
     coordinate++;
 }
 
 
    return element_coordinates[element_coordinates.length-1];
}

module.exports = calculate_elements_sum;
