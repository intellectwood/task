'use strict';
var is_exist_element = function(collection,element){
    let evens=[];
    let times=0;

    
    for (let item of collection){
        
        if(times%2==0) evens.push(item);
        times++;
    }
    
    console.log(evens);
    
    for (let itemxxx of evens){
        if(itemxxx==element) {return true;}
    }
    return false;

};
module.exports = is_exist_element;
