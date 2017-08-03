'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  let collection_divisible=[];
  
  for(let item_a of collection_a){
      for(let item_b of collection_b){
          if(item_a%item_b==0)  collection_divisible.push(item_a);
      }  
  }
  return collection_divisible;
}

module.exports = choose_divisible_integer;
