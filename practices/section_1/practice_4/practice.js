function collect_same_elements(collection_a, object_b) {
  let collection_intersected=[];
  
  for(let obj_a of collection_a){
      for(let item_b of object_b.value){
          if(item_b==obj_a.key)  collection_intersected.push(item_b);
      }  
  }
  return collection_intersected;
}

module.exports = collect_same_elements;
