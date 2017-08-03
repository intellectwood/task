'use strict';
 const abc_table=['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
  'o','p','q','r','s','t', 'u', 'v', 'w', 'x','y', 'z'];
  
function even_to_letter(collection) {


    let array=[];
    for(let item of collection){
        if(item %2==0) {
        array.push(abc_table[item-1]);
        }

    }
    
    return array;

}

module.exports = even_to_letter;
