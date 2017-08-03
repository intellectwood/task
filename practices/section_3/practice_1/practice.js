function find(collection_of_obj, ch){
    for (let item of collection_of_obj){
        if(item.key==ch) return item;
       
    }

     return null;
}
function create_updated_collection(collection_a, object_b) {

    let obj;
    
    for(let item of object_b.value){
        obj=find(collection_a,item);
        obj.count--;
    }
    return collection_a;
}

module.exports = create_updated_collection;
