'use strict';
var compute_average = require('../../../../practices/reduce/compute_average.js');
var even_group_calculate_average = function(collection){
    let even = collection.filter((element,index) => {
        if ((index + 1) % 2 == 0) return true;
        return false;
    });
    
    if(even.length != 0){
        even = even.filter((element) => {
            if(element % 2 == 0) return true;
            return false;
        });
        
        let even1 = [] ,even2 = [],even3 = [];
        even.forEach((element) => {
            if(String(element).length == 1) even1.push(element);
            if(String(element).length == 2) even2.push(element);
            if(String(element).length == 3) even3.push(element);
        });
        
        if(even3.length != 0  && even2.length == 0 && even3.length !=0) return [compute_average(even3)];
        if(even1.length !=0 && even2.length && even3.length != 0 ) return[compute_average(even1), compute_average(even2), compute_average(even3)];
        }
    return [0];
    
};
module.exports = even_group_calculate_average;

/*
'use strict';

function get_evens(collection){
    let evens=[];
    let times=0;
    
    
    for(let item of collection){
        if((item%2==0)) {
           times++; 
           if(times%2==0){
            evens.push(item); 
            console.log("得到了evens 它是数组:"+evens);
           }

      }
    }
    if(times==0) evens=[0];
    

    return evens;
}

function get_average(collection){
    let sum=0;
    let even_times=0;
    let result;
    
    for(let item of collection){
    sum+=item;    
    even_times++;

    }    
    
    if (even_times==0) result = 0;
    else result = sum / even_times;
    
    return result;
}

function get_bits(num)
{
    let bits;
    let arch100=(num/100);
    let arch10=(num/10);

    
    if(arch100 >= 1) bits=3;
    if ( (arch100 < 1) && ( arch10>=1 ) ) bits=2;
    if (arch10<1) bits=1;
    
    console.log(bits);
    return bits;
    
}


var even_group_calculate_average = function(collection){

    let evens=[];
    let array_3bits=[];
    let array_2bits=[];
    let array_1bits=[];
    let result=[];

    evens=get_evens(collection);
  //  console.log(evens);
    if (evens==0) {result=[0];}
    else{
        for (let item of evens){
        if( get_bits(item) ==3 ) {array_3bits.push(item);}
        if( get_bits(item) ==2 ) {array_2bits.push(item);}
        if( get_bits(item) ==1 ) {array_1bits.push(item);}
        }
           
      if(get_average(array_1bits) != 0) result.push( parseInt (get_average(array_1bits))  );
      if(get_average(array_2bits) != 0) result.push( parseInt (get_average(array_2bits))  );     
      if(get_average(array_3bits) != 0) result.push( parseInt (get_average(array_3bits))  );      
    }

    return result;
};

module.exports = even_group_calculate_average;
*/
