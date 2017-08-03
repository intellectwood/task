function array_adjust(array){
    let abc_times;//字符出现次数
    let char;
    let result=[];
    
    for(let item of array){
        
        if(item.length>1){
        abc_times = parseInt(item.replace(/[^0-9]/ig,""));
        char= item.charAt(0);
        while(abc_times>0) {result.push(char);abc_times--;}
        }
        else result.push(item);

    }
    return result;
}

function find(collection_of_obj, ch){
    for (let item of collection_of_obj){
        if(item.name==ch) return item;
       
    }

     return null;
}

function count_same_elements(collection) {
 let result=[];
  
  
  collection=array_adjust(collection);
    
    
    for(let item of collection){
      let obj=find(result,item);
         if(obj){
            obj.summary++; //这个obj为什么能改变result???
        }
        else  result.push( {name:item,summary:1} );
   
    }

    
    return result;
}

module.exports = count_same_elements;
