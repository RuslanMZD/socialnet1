const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let  initialState = {
  dialogsData:
        
        [{id:1,name:"Ruslanich",img:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"},
        {id:2,name:"Dasha",img:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"},
        {id:3,name:"Igor",img:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"},
        {id:4,name:"Putin",img:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"}],
            
        
            messageData:
        
        [{id:1,message:"HI",img:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"},
        {id:2,message:"ZAEBIS",img:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"},
        {id:3,message:"NU I ZAEBIS",img:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"},
        {id:4,message:"YO",img:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"}],

         

       // newMessageBody:''
        


};



 const dialogReducer = (state=initialState,action)=>{


    if(action.type===UPDATE_NEW_MESSAGE_BODY){
        // state.newMessageBody=action.body;
      
        let stateCopy = {...state};
        stateCopy.messageData=[...state.messageData];
        stateCopy.newMessageBody=action.body
        return stateCopy;



    }else if(action.type===SEND_MESSAGE, action){
                   
        let stateCopy = {...state,
          messageData:[...state.messageData]};
        //stateCopy.messageData=[...state.messageData];
         //let body = stateCopy.newMessageBody;
           // stateCopy.newMessageBody='';
           let body = action.newMessageBody;
            let newMessForState = {id:6,message:body};           
            stateCopy.messageData.push(newMessForState);   





            // let body = state.newMessageBody;
            // state.newMessageBody='';
            // let newMessForState = {id:6,message:body};           
            // state.messageData.push(newMessForState);                        
            
            return stateCopy;


    }


    
    return state;

}




export default dialogReducer;

 
export let updateNewMessageBodyCreater=(messageBody)=>{
    return({type:UPDATE_NEW_MESSAGE_BODY,body:messageBody});

  } 

 export  let sendMessageBodyCreater=(newMessageBody)=>{
    return({type:SEND_MESSAGE, newMessageBody});

  } 
