 import {profileAPI} from '../api/api';
 import { stopSubmit } from 'redux-form'

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT= 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET USER PROFILE';
const SET_STATUS = 'SET STATUS';
const SET_PHOTOS_SUCCESS = 'SET PHOTOS SUCCESS';


let initialState = {

    postData:
        
        
    [{id:1,messages:'Hi, how are you?', likesCount:20,img:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"},
    {id:2,messages:"It's my first post",likesCount:12,img:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"}],
    
    newPostText:'it-kamasutra',

    profile:null,
    status:" "
};



 const profileReducer = (state= initialState,action)=>{


    if (action.type ===ADD_POST){    // Если в action приходит ADD-POST
            
          
        let newPost={id:5,
            messages: action.addNewPostFormRedux, 
            likesCount:13};

            let stateCopy = {...state};
            stateCopy.postData = [...state.postData];
            stateCopy.postData.push(newPost);
           // stateCopy.newPostText=' '
            return stateCopy;
    //    state.postData.push(newPost);
    //    state.newPostText=' '; 
        

    }else if (action.type === UPDATE_NEW_POST_TEXT){

                let stateCopy={...state};
                stateCopy.newPostText=action.newText;
                return stateCopy;
              //  state.newPostText=action.newText;
                
                
            
            
            }else if(action.type===SET_USER_PROFILE){

              let stateCopy ={...state};
              stateCopy.profile=action.profile;
              return stateCopy;
           
            }else if(action.type===SET_STATUS){

                let stateCopy ={...state};
                stateCopy.status=action.status;
                return stateCopy;




            }else if(action.type===SET_PHOTOS_SUCCESS){
              debugger;
              let stateCopy={...state};
              stateCopy.profile=state.profile;
              stateCopy.profile.photos = action.photos;
              return stateCopy;


            }




            return state;
        
        }


    



export default profileReducer;


export let addPostActionCreator = (addNewPostFormRedux) =>{
    return ({type: ADD_POST,addNewPostFormRedux})
  
     
  
  };


  
  export let updateNewPostTextActionCreator=(text)=>{
    return({type:UPDATE_NEW_POST_TEXT,newText:text})
    
    
    };
    

    export let setUserProfile = (profile)=>{
      return({type:SET_USER_PROFILE, profile})
    };


    export let setStatus = (status)=>{
      return({type:SET_STATUS, status})
    };


    export let setPhotoSuccess = (photos)=>{
      return({type:SET_PHOTOS_SUCCESS, photos})
    };



   

// export const updateStatus =(status)=>{
// return (dispatch)=> {

//   profileAPI.updateStatus(status).then(response=>{
//     if (response.data.resultCode===0){
     
//       dispatch(setStatus(status));
//     }
  
    
//   });



// }
// }


export const updateStatus =(status)=>async(dispatch)=>{
try{
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode===0){
     
          dispatch(setStatus(status));
        }

}catch(error){
  alert("ERROR")
}

}














export const savePhoto=(file)=>async (dispatch)=>{
  
let response =await profileAPI.savePhoto(file);

if (response.data.resultCode===0){

 dispatch(setPhotoSuccess(response.data.data.photos));
  
}
}

// В санку приходит стэйт целеком можно его взять getState


export const saveProfile=(profile)=>async (dispatch, getState)=>{
  const userId= getState().auth.userId
  let response =await profileAPI.saveProfile(profile);
  
  if (response.data.resultCode===0){
  
    dispatch(getUserProfileThunkCreator(userId));

    
  }else{
   
    dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]})); 
    return Promise.reject(response.data.messages[0])  // вернет промис с ошибкой при  ошибке , можно положить что то например ошибку с этим не заробало
  }


  }
  










export const getStatus = (userId)=> {

return(dispatch)=> {

profileAPI.getStatus(userId).then(response=> {
 
    dispatch(setStatus(response.data));
});

}

}


    export const getUserProfileThunkCreator = (userId) => {
    return (dispatch) => {

        profileAPI.getProfile(userId).then(response => {
         
          dispatch(setUserProfile(response));
        });}}


