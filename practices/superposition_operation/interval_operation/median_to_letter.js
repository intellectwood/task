'use strict';
 const abc_table=['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
  'o','p','q','r','s','t', 'u', 'v', 'w', 'x','y', 'z'];
  const abc_table_length=abc_table.length;
function str_for_num(num) //应思维严谨
{
   let str;

    num=num-1; 
    
    let up_num = parseInt(num/(abc_table_length));
    
    
    
    if(up_num==0) {str=abc_table[num];}
    else {
        
        let low_num = num%(abc_table_length);
        
        
        str=abc_table[up_num-1]+abc_table[low_num];
 
    }
    return str;
}

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

  return Math.ceil(medium);
}

function median_to_letter(collection) {

  let str_medium;
  let num_medium;
  
  num_medium=compute_median(collection);
  str_medium=str_for_num(num_medium);
  
  return str_medium;
}

module.exports = median_to_letter;
