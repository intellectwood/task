'use strict';

function get_union(collection_a, collection_b) {
  let result=collection_a;
 let flag;
  
  for(let item_b of collection_b){
      flag=0;
      for(let item_a of collection_a){
          if (item_a==item_b)  {    flag=1 }
          }
      if (flag==0) result.push(item_b);

    }      
  
  return result;
}

module.exports = get_union;