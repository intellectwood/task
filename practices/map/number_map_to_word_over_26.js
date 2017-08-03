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


var number_map_to_word_over_26 = function(collection){
  
  let result=[];
  
  for(let item of collection){
      result.push(str_for_num(item));
  }
    
  return result;
};

module.exports = number_map_to_word_over_26;
