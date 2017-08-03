'use strict';

function spilt_to_zero(number, interval) {
 let nums=[];
 //let num_now=parseFloat(number.toFixed(1));
  let num_now=Math.round(number*100)/100;
  
 if(number%interval==0){
     while(num_now>0){
     nums.push(num_now);
     num_now-=interval;  
     //num_now=parseFloat(num_now.toFixed(1));
    num_now=Math.round(num_now*100)/100;
    }
     nums.push(num_now);
 }
 
 else{
      while(num_now>0){
 
     nums.push(num_now);
     num_now-=interval;
  //num_now=parseFloat(num_now.toFixed(1));
  num_now=Math.round(num_now*100)/100;    
    }
     nums.push(num_now);
}

 
 return nums;
 
}

module.exports = spilt_to_zero;
