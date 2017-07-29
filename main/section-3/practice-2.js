'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {

   let z,w;    

    for (z=0;z<collectionA.length;z++)
    {
        for(w=0;w<objectB.value.length;w++)
        {
            if (collectionA[z].key==objectB.value[w])
            {
                collectionA[z].count -= parseInt(collectionA[z].count / 3) ;
            }
        }
    }
   
  return collectionA;
}
