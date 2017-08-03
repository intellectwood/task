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
        if(item.key==ch) return item;
       
    }

     return null;
}

function create_updated_collection(collection_a, object_b) {
    
   let result=[];
  
  
  collection_a=array_adjust(collection_a);
    
    for(let item of collection_a){
      let obj=find(result,item);
         if(obj){
            obj.count++; //这个obj为什么能改变result???
        }
        else  result.push( {key:item,count:1} );
   
    }



    for(let item of object_b.value){
        for(let item_obj of result){
            if(item_obj.key==item){
                    item_obj.count=item_obj.count-parseInt(item_obj.count/3);
            }
        }
       

    }
    
    return result;
}

module.exports = create_updated_collection;
