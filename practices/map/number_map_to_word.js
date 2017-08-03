'use strict';
const abc_table=['a','b','c','d','e'];
var number_map_to_word = function(collection){
  
  
  let result=[];
  
  for(let item of collection){
      result.push(abc_table[item-1]);
  }
    
  return result;
};

module.exports = number_map_to_word;
