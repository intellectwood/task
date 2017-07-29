'use strict';

module.exports = function countSameElements(collection) {
   let result=[];
   
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
    
    let i=0;
    let j=0;
    
    for(i=0;i<collection.length;i++)
    {
        let first_al=relation[collection[i].charAt(0)];
        re_num[first_al]++;
        let temp = parseInt(collection[i].replace(/[^0-9]/ig,""));
        
        if(temp) {
            re_num[first_al] +=  temp-1;    
            
        }         
     
    }


    for(j=0;j<al_num.length;j++)
    {

      result.push( {name:al_num[j], summary:re_num[j]} );
      
     // result[j] = {key:al_num[j], count:re_num[j]} ;
          
      //console.log(al_num[j]+':'+re_num[j]);
    
    }
   
  return result;
}
