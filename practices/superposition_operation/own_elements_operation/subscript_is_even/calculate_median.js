'use strict';
function func_rank_asc (collection){
    
    let result = collection.sort(function(a,b){

        return a - b;
    });
    return result;
}
function get_medium(array)
{
    let medium;
    let length=array.length;
    let next,front;
    
    if(length%2!=0) medium=array[parseInt(length/2)];
    else{
      next=(length/2);
      front = next-1;
      medium=  (array[front] + array[next] )/ 2;
    }
    return medium;
}
var calculate_median = function(collection){
    let evens=[];
    let medium;
    
    for(let item of collection){
        if(item%2==0) evens.push(item);
    }
    evens=func_rank_asc(evens);
    medium=get_medium(evens);
    return medium;
};
module.exports = calculate_median;
