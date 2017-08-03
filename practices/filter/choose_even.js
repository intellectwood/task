'use strict';

function choose_even(collection) {

  let result=[];
  
  for (let item of collection){
      if(item%2==0) result.push(item);
  }
  
  return result;
}

module.exports = choose_even;
