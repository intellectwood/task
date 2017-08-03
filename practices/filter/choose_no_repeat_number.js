'use strict';
function repeat_or_not(collection, num){
    for (let item of collection){
        if(num==item) return true;
    }
    return false;
}

function choose_no_repeat_number(collection) {

let result=[];

  for(let item of collection){
      if( !repeat_or_not(result,item) ) result.push(item);
  }
  return result;
}

module.exports = choose_no_repeat_number;
