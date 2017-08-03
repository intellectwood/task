'use strict';

function get_integer_interval(number_a, number_b) {
    let array=[];
    
    if (number_a>number_b) {
        while(number_a>number_b){
            array.push(number_a);
            number_a--;
        }
        
    }
    if (number_a<number_b){
            while(number_a<number_b){
            array.push(number_a);
            number_a++;
        }

    }
    if (number_a==number_b){
        array.push(number_a);
    }
    
    return array;
}

module.exports = get_integer_interval;

