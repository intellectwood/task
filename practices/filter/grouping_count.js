'use strict';

function grouping_count(collection) {

  let obj={};
  
  
  for(let item_count of collection){
      
      if(obj[item_count.toString()] == null){ obj[item_count.toString()]=1;}
      else obj[item_count.toString()]++;
      
    //    console.log(obj[item_count.toString()]);
        
     }
      
      return obj;
  }
  


module.exports = grouping_count;
