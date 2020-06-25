import {authAPI, securitiAPI} from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA="auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS="auth/GET_CAPTCHA_URL_SUCCESS";

let initialState ={

    userId:null,
    email: null,
    login:null,
   isAuth: false,
   captchaUrl:null 
     


}

const authReducer = (state= initialState, action)=>{

switch(action.type){

case SET_USER_DATA:
   
    return{

        ...state,
        ...action.payload
        
        

    }
    case GET_CAPTCHA_URL_SUCCESS:
        return{
            ...state,
            ...action.payload


        }
    default:
        return state;
    
    
}





}


export const setAuthUserData=(userId,email,login, isAuth)=>{
return({type:SET_USER_DATA, payload:{userId,email,login,isAuth}})}








// export const getUserDataThunkCreater = () =>{  БЕЗ AWAIT
// return (dispatch) => {
// return authAPI.me()
// .then(response=>{
           
//     if(response.data.resultCode===0) {
//         let {id, email, login} = response.data.data;
//         dispatch(setAuthUserData(id, email, login, true));

// }
// });

// }  

// }





export const getUserDataThunkCreater = () =>{
    return async (dispatch) => {
   let response = await authAPI.me();
               
        if(response.data.resultCode===0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
    
    }
    }}








    // export const loginThunkCreater = (email,password,rememberMe) =>{
    //     return (dispatch) => {
    //     authAPI.login(email,password,rememberMe)
    //     .then(response=>{
                   
    //         if(response.data.resultCode===0) {
    
    //             dispatch(getUserDataThunkCreater())
        
    //     }else {
    //      //   let action = stopSubmit("login", {email:"email is wrong"}); // имя формы и поля в котором вывести ошибку если серва отправил ошибку,  если прописать свво _error то ошибка придет на всю форму
    //      let messages = response.data.messages.length > 0 ? response.data.messages[0] : "SOME ERROR";
    //      let action = stopSubmit("login", {_error: messages});   
    //      dispatch(action);
    
    //     }
    
    
    // })}}
    
    








export const loginThunkCreater = (email,password,rememberMe,captcha) =>{
    return async (dispatch) => {
 let response =  await  authAPI.login(email,password,rememberMe,captcha)

               
        if(response.data.resultCode===0) {

            dispatch(getUserDataThunkCreater())
    
    }else{
        if(response.data.resultCode===10){
            dispatch(getCaptchaUrl());

        }
     //   let action = stopSubmit("login", {email:"email is wrong"}); // имя формы и поля в котором вывести ошибку если серва отправил ошибку,  если прописать свво _error то ошибка придет на всю форму
     let messages = response.data.messages.length > 0 ? response.data.messages[0] : "SOME ERROR";
     let action = stopSubmit("login", {_error: messages});   
     dispatch(action);

    }


}}



// export const logOutThunkCreater = () =>{
//     return (dispatch) => {
//     authAPI.logout()
//     .then(response=>{
               
//         if(response.data.resultCode===0) {

//             dispatch(setAuthUserData(null,null,null, false))
    
//     }})}}






    export const logOutThunkCreater = () =>{
        return async (dispatch) => {
       let response = await authAPI.logout()
        
                   
            if(response.data.resultCode===0) {
    
                dispatch(setAuthUserData(null,null,null, false))
        
        }}}



    export const getCaptchaUrlSuccess =(captchaUrl)=>({
        type: GET_CAPTCHA_URL_SUCCESS, payload:{captchaUrl}
    })

    export const getCaptchaUrl=()=>{
        return async (dispatch)=>{
            const response = await securitiAPI.getCaptchaUrl();
            const captchaUrl= response.data.url;
            dispatch(getCaptchaUrlSuccess(captchaUrl))

        }
    }



    export default authReducer;
