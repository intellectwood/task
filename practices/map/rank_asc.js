'use strict';
var rank_asc = function(collection){ //说明这是降序而不是升序列 
    let result = collection.sort(function(a,b){

        return b - a;
    });
    return result;
};

module.exports = rank_asc;
