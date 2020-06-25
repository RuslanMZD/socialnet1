import * as axios from 'axios';

//const baseUrl ="https://social-network.samuraijs.com/api/1.0/";


const instanse = axios.create({
    
    withCredentials: true, 

        baseURL:"https://social-network.samuraijs.com/api/1.0/",

        headers:{"API-KEY" : "03743d57-5d42-4009-b627-b66c154de361"}



});

export const usersAPI={ 
    
    getUsers(currentPage=1,pageSize=10){

   return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response=>{
        return  response.data});
},

follow(userId){

  return  instanse.post(`follow/${userId}`)

},

unfollow(userId){

   return  instanse.delete(`follow/${userId}`)



}
}





export const profileAPI = {

    getProfile(userId){
  return  instanse.get(`profile/${userId}`).then(response=>{
    return  response.data});;
  
   },


   getStatus(userId){

    return instanse.get(`profile/status/${userId}`)

   },


   updateStatus(status){

    return instanse.put(`profile/status`, {status:status})

   },

   savePhoto(photoFile){
       let formData = new FormData();   // для отправки на сервак необходимо указать тип файла
       formData.append("image", photoFile) 
    return instanse.put(`profile/photo`, formData,{ //НАстраиваем заголовки
        headers:{
            'Content-Type': "multipart/form-data"
        }
    } )            

   },

   saveProfile(profile){
       return instanse.put(`profile`,profile)
   }



}




export const authAPI = {

    me(){

        return instanse.get(`auth/me`);


    },

    login(email,password,rememberMe=false,captcha="null"){
        return instanse.post('auth/login',{email,password,rememberMe,captcha});

    },

    logout(){
        return instanse.delete('auth/login');

    }



}






export const securitiAPI={

getCaptchaUrl(){
    return instanse.get('security/get-captcha-url')
}

}



















