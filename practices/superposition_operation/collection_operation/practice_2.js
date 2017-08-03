'use strict';

function hybrid_operation_to_uneven(collection) {

     let odds=[];
   
    for(let item of collection){
    if(item %2 != 0) odds.push(item*3+2);        

    }
    
    
    return odds;
}

module.exports = hybrid_operation_to_uneven;

