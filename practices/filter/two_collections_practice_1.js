'use strict';

function choose_common_elements(collection_a, collection_b) {

  let collection_intersected=[];
  
  for(let item_a of collection_a){
      for(let item_b of collection_b){
          if(item_b==item_a)  collection_intersected.push(item_a);
      }  
  }
  return collection_intersected;
}

module.exports = choose_common_elements;
