'use strict';

function get_letter_interval(number_a, number_b) {
  let result=[];
  let abc_table=['a','b','c','d','e'];
  
  if(number_a<number_b){
      while(number_a!=number_b){
          result.push(abc_table[number_a-1]);
          number_a++;
      }
  }
  if(number_a>number_b){
      while(number_a!=number_b){
          result.push(abc_table[number_a-1]);
          number_a--;
      }
  }

  if(number_a==number_b){
      result.push(abc_table[number_a-1]);
  }
  
  return result;

}

module.exports = get_letter_interval;