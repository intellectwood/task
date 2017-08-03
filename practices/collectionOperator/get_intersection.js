'use strict';

function get_intersection(collection_a, collection_b) {
  let collection_intersected=[];
  
  for(let item_b of collection_b){
      for(let item_a of collection_a){
          if(item_b==item_a)  collection_intersected.push(item_b);
      }  
  }
  return collection_intersected;
}

module.exports = get_intersection;
