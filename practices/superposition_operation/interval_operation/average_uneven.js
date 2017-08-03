'use strict';

function average_uneven(collection) {

    let sum=0;
    let odds=[];
    for(let item of collection){
    if(item %2 != 0 && item<=10) {    odds.push(item); sum+=item;        }

    }
    
    
    return parseInt(sum / odds.length);
}

module.exports = average_uneven;
