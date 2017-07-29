'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let collectionC=[];
//  let result=[];
   
    let re_num=[0,0,0,0,0,0,0,0,0];
    
    let relation={
    'a':0,
    'e':1,
    'h':2, 
    't':3,
    'f':4,
    'c':5,
    'g':6,
    'b':7,
    'd':8};
    
    let al_num=[
    'a',
    'e',
    'h', 
    't',
    'f',
    'c',
    'g',
    'b',
    'd'];
    
    let i,j,z,w;
    
    for(i=0;i<collectionA.length;i++)
    {
        let first_al=relation[collectionA[i].charAt(0)];
        re_num[first_al]++;
        let temp = parseInt(collectionA[i].replace(/[^0-9]/ig,""));
        
        if(temp) {
            re_num[first_al] +=  temp-1;    
            
        }         
     
    }


    for(j=0;j<al_num.length;j++)
    {

      collectionC.push( {key:al_num[j], count:re_num[j]} );
    
          
      //console.log(al_num[j]+':'+re_num[j]);
    
    }
    
    for (z=0;z<collectionC.length;z++)
    {
        for(w=0;w<objectB.value.length;w++)
        {
            if (collectionC[z].key==objectB.value[w])
            {
                collectionC[z].count -= parseInt(collectionC[z].count / 3);
            }
        }
    }
   
  return collectionC;
}
