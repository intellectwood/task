'use strict';

function find_first_even(collection) {
  let first_even;
  
  for(let item of collection){
      if (item %2==0) {first_even=item;break;}
  }
  
  return first_even;
}

module.exports = find_first_even;

