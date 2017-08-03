'use strict';
 const abc_table=['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
  'o','p','q','r','s','t', 'u', 'v', 'w', 'x','y', 'z'];
  
function average_to_letter(collection) {

    let result;
    let sum=0;
    for(let item of collection){
        sum+=item;
    }
    
    result= abc_table[ Math.ceil(sum/collection.length) - 1 ];
    
    return result;
}

module.exports = average_to_letter;

