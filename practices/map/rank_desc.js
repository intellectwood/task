'use strict';
var rank_desc = function(collection){ //说明这是升序而不是降序列 
    let result = collection.sort(function(a,b){

        return a-b;
    });
    return result;
};

module.exports = rank_desc;
