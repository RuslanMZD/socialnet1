import profileReducer from '../redux/profile-reduser';
import dialogReducer from "../redux/dialogs-reduser";
import Profile from '../components/Profile/Profile';
import sidebarReducer from "../redux/sidebar-reducser";

 let store = {

    // addPost(){
          
    //     let newPost={id:5,
    //         messages: this._state.profile.newPostText, 
    //         likesCount:0};
       
    //    this._state.profile.postData.push(newPost);
    //    this._state.profile.newPostText=' '; 
    //    this._callSubskriber(this._state); 

    //     },



    _state:{
        profile:{
            postData:
        
        
        [{id:1,messages:'Hi, how are you?', likesCount:20,img:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"},
        {id:2,messages:"It's my first post",likesCount:12,img:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"}],
        
        newPostText:'it-kamasutra'
        
        
        
        },
        
                dialogs:{   
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


        newMessageBody:''
    },

            sidebar:{ },

       
        

               },


               getState(){
                   return this._state;




               },


     _callSubskriber(){
            console.log('state is changed');

        },

     

    // updateNewPostText(newText){
    //     this._state.profile.newPostText=newText;
    //     this._callSubskriber(this._state); 
    //     },

        
    subscribe(observer){

        this._callSubskriber=observer;
    },



    dispatch(action){
       // debugger;

       this._state.profile=profileReducer(this._state.profile, action);
       this._state.dialogs= dialogReducer(this._state.dialogs, action);
       this._state.sidebar= sidebarReducer(this._state.sidebar, action);
       this._callSubskriber(this._state);

    //     if (action.type ==='ADD-POST'){    // Если в action приходит ADD-POST
            
          
    //     let newPost={id:5,
    //         messages: this._state.profile.newPostText, 
    //         likesCount:0};
       
    //    this._state.profile.postData.push(newPost);
    //    this._state.profile.newPostText=' '; 
    //    this._callSubskriber(this._state); 

    // }else if (action.type ==='UPDATE-NEW-POST-TEXT'){

          
    //             this._state.profile.newPostText=action.newText;
    //             this._callSubskriber(this._state); 
                
            
            
    //         }else if(action.type===UPDATE_NEW_MESSAGE_BODY){
    //                 this._state.dialogs.newMessageBody=action.body;
    //                 this._callSubskriber(this._state);
                    
                    



    //             }else if(action.type===SEND_MESSAGE){
                                                
    //                     let newMessForState = {id:6,message:this._state.dialogs.newMessageBody};

    //                     this._state.dialogs.newMessageBody='';
    //                     this._state.dialogs.messageData.push(newMessForState);                        
    //                     this._callSubskriber(this._state);


    //             }











        

        }

    

};

// const SEND_MESSAGE = "SEND-MESSAGE";
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT= 'UPDATE-NEW-POST-TEXT';

  
  
 


window.store=store;
 export default store;









// let reRender = () =>{
// console.log('State is changed');

// }



// let state = {
        
//         profile:{
//     postData:


// [{id:1,messages:'Hi, how are you?', likesCount:20,img:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"},
// {id:2,messages:"It's my first post",likesCount:12,img:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"}],

// newPostText:'it-kama'



// },

//         dialogs:{   
//     dialogsData:

// [{id:1,name:"Ruslanich",img:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"},
// {id:2,name:"Dasha",img:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"},
// {id:3,name:"Igor",img:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"},
// {id:4,name:"Putin",img:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"}],
    

//     messageData:

// [{id:1,message:"HI",img:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"},
// {id:2,message:"ZAEBIS",img:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"},
// {id:3,message:"NU I ZAEBIS",img:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"},
// {id:4,message:"YO",img:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"}
// ]}


// };

// window.state = state; //посомтреть какой state на странице



// export const addPost =() =>{

 

// let newPost={id:5,
//      messages:state.profile.newPostText, 
//      likesCount:0};

// state.profile.postData.push(newPost);
// state.profile.newPostText=' '; 
// reRender(state); 

// };



// export const updateNewPostText =(newText) =>{


    
//     state.profile.newPostText=newText;
//     reRender(state); 
    
//     };
    



// export  const  subscriber =(observer)=>{ // патерн ОБсервер
// reRender=observer;

// }  






