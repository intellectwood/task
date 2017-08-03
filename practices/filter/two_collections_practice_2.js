'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  let collection_non_intersected=[];
 
  let non_even;
  
  for(let item_a of collection_a){
      non_even=1;
      for(let item_b of collection_b){
          if( (item_b==item_a) ) non_even=0;
      }  
      if(non_even==1) {
          collection_non_intersected.push(item_a);
         
      }
  }
  return collection_non_intersected;
}

module.exports = choose_no_common_elements;
