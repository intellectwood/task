
'use strict';

module.exports = function countSameElements(collection) {
    
    let result=[];
    let re_num=[0,0,0,0,0,0,0,0,0];
    let al_num=[
    'a',
    'e',
    'h', 
    't',
    'f',
    'c',
    'g',
    'b',
    'd'];
    
    let i=0;
    let j=0;
    
    for(i=0;i<collection.length;i++)
    {
        switch(collection[i])
        {
            case 'a':
            re_num[0]++;
            break;
            
            case 'e':
            re_num[1]++;
            break;
            
            case 'h':
            re_num[2]++;
            break;
            
            case 't':
            re_num[3]++;
            break;
            
            case 'f': 
            re_num[4]++;
            break;
            
            case 'c':   
            re_num[5]++;
            break;
            
            case 'g':  
            re_num[6]++;
            break;
            
            case 'b':
            re_num[7]++;
            break;

            case 'd':  
            re_num[8]++;
            break;
            
            default:
        }
        
    }
    for(j=0;j<al_num.length;j++)
    {
       // let obj= new Object;
       // obj={key:al_num[j], count:re_num[j]} ;
      //result.push( {key:al_num[j], count:re_num[j]} );
      result[j]= {key:al_num[j], count:re_num[j]} ;
        
    }
   
  return result;
}
