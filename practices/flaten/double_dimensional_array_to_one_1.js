'use strict';

function double_to_one(collection) {
    let result=[];


    for (let array_item of collection){
        if (typeof(array_item)=="number")  result.push(array_item);
        else{
            for (let item of array_item) result.push(item);
            }
    }
    
 
  return result;
}

module.exports = double_to_one;
