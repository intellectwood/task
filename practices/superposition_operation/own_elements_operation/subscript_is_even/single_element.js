'use strict';

function get_evens(collection)
{
    let evens=[];
    let times=0;

    for (let item of collection){
         times++;
        if(times%2==0) evens.push(item);
       
    }
    
    return evens;
}
var single_element = function(collection){

    let evens=[];
    let i,j,flg;
    let result=[];
    
    evens=get_evens(collection);

    for(i=0;i<evens.length;i++){
        flg=0;
        for(j=0;j<evens.length;j++){
        
            if(evens[i] == evens[j] && i!=j) flg=1; 

        }
        if( flg==0 ) result.push(evens[i]);
    }
    
    return result;

};
module.exports = single_element;
