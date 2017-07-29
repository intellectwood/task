'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  
  let result=[];
  let i;
  let j;
  let z=0;
  for(i=0;i<collectionA.length;i++)
  {
      for(j=0;j<collectionB.length;j++)
      {
          if (collectionA[i]==collectionB[j]) 
          {
           result[z] = collectionA[i];
           z++;
              
          }
          
      }
      
  }
  
  return result;

}
