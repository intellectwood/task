'use strict';

function find_last_even(collection) {
  let last_even;
  let evens=[];
  
  for(let item of collection){
      if (item %2==0) evens.push(item);
  }
  last_even=evens[evens.length-1];
  return last_even;
}

module.exports = find_last_even;
