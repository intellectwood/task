'use strict';
function to_simple_array(collection){
 let result=[];
    for (let array_item of collection){
        if (typeof(array_item)=="number")  result.push(array_item);
        else{
            for (let item of array_item) result.push(item);
            }
    }
  return result;
}
function double_to_one(collection) {

  let simple_array=to_simple_array(collection);
  let result=[];
  let flag;
  
  for (let item_s of simple_array){
      flag=0;
      
      if (result == null ) result[0]=item_s;
      
      for (let item_r of result){
          if (item_s===item_r) flag=1;
      }
      if (flag==0)   result.push(item_s);
    
  }
  
  return result;
}

module.exports = double_to_one;
