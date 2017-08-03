'use strict';

function func_rank_asc (collection){
    
    let result = collection.sort(function(a,b){

        return b - a;
    });
    return result;
}

function compute_median(collection) {
  let array=[];
  let front,next;
  let length;
  let medium;
  


  for(let item of collection){
      array.push(parseInt(item));
  }
 


  array=func_rank_asc(array);
  


  length=array.length;

  if(length%2!=0) medium=array[parseInt(length/2)];
  else{
      next=(length/2);
      front = next-1;
      medium=  (array[front] + array[next] )/ 2;
  }

  return medium;
}

module.exports = compute_median;


