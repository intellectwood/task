'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  let result=[];
  let i;
  let j;
  let z=0;
  for(i=0;i<collectionA.length;i++)
  {
      for(j=0;j<collectionB[0].length;j++)
      {
          if (collectionA[i]==collectionB[0][j]) 
          {
           result[z] = collectionA[i];
           z++;
              
          }
          
      }
      
  }
  
  return result;
}
