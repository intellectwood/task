'use strict';
function func_rank_asc (collection){
    
    let result = collection.sort(function(a,b){

        return a - b;
    });
    return result;
}

function rank_by_two_large_one_small(collection){
  
   let times=0; 
   let do_time=0;
   let temp_array=[]; //只有三个元素或者两个
   let temp;
   let result=[];
   
    collection=func_rank_asc(collection);
      
    for(let item of collection)
    {
        times++;
        do_time++;
        temp_array.push(item);
        
        if(do_time==3) {
            do_time=0;
           //temp_array=func_rank_asc(temp_array);
            
            temp=temp_array[0];        
            temp_array[0]=temp_array[1];
            temp_array[1]=temp_array[temp_array.length-1];
            temp_array[temp_array.length-1]=temp;
            
            result=result.concat(temp_array);
            temp_array=[];
            
        }
        if(do_time==2 && times==collection.length)
        {
        //  temp_array=func_rank_asc(temp_array);
            result=result.concat(temp_array);
            temp_array=null;
        }
    }
    return result;
    
}
module.exports = rank_by_two_large_one_small;
