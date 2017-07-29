'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let result=[];
  let i;
  let j;
  let z=0;
  for(i=0;i<collectionA.length;i++)
  {
      for(j=0;j<objectB['value'].length;j++)
      {
          if (collectionA[i]==objectB['value'][j]) 
          {
           result[z] = collectionA[i];
           z++;
              
          }
          
      }
      
  }
  
  return result;
}
