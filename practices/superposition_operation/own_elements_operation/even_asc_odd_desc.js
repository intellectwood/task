'use strict';
function func_rank_deasc (collection){
    
    let result = collection.sort(function(a,b){

        return b - a;
    });
    return result;
}
function func_rank_asc (collection){
    
    let result = collection.sort(function(a,b){

        return a - b;
    });
    return result;
}

var even_asc_odd_desc = function(collection){

    let evens=[];
    let odds=[];
    let result=[];
    
    for(let item of collection){
        if(item%2 != 0) odds.push(item);
        else evens.push(item);
    }
    evens=func_rank_asc(evens);
    odds=func_rank_deasc(odds);
    result=evens.concat(odds);
    
    return result;
};
module.exports = even_asc_odd_desc;
