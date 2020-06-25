export const required = (value)=> {
if(value){
    return undefined;
  
}



return 'Field is require';
}



// export const maxLength30 = (value)=> {
//     if( value.length > 30){
//         return 'MAX LENGTH IS 30 SYMBOLS';
      
//     }
    
    
//     return undefined;
   
//     }


    
export const maxLengthCreator = (maxLength) => (value)=> {
    if( value.length > maxLength){
        return `MAX LENGTH IS ${maxLength} SYMBOLS`;
      
    }
    
    
    return undefined;
   
    }