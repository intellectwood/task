'use strict';

function collect_all_even(collection) {
  let even_array=[];
  for(let item of collection){
      if(item%2==0) even_array.push(item);
  }
  
  return even_array;
}

module.exports = collect_all_even;
