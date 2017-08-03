'use strict';
var map_to_three_multiples = function(collections){
  let result=[];
  
  for(let item of collections){
      result.push(item*3);
  }
    
  return result;
};

module.exports = map_to_three_multiples;
