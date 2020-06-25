import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import Status from "./Status";
import StatusWhithHooks from "./StatusWhithHooks";
import ProfileDataForm from './ProfileDataForm';
let image ='https://html5box.com/html5lightbox/images/skynight.jpg';

const ProfileInfo = ({isOwner,savePhoto,profile,status,updateStatus,saveProfile}) => {

const[editMode,setEditMode]=React.useState(false)

  if(!profile){
return <Preloader />

}




const onMainPhotoSelected=(e)=>{
 if(e.target.files.length) {
    savePhoto(e.target.files[0]);
    
 }
}



const onSubmit =  (formData)=> {

    saveProfile(formData).then(()=>{
      setEditMode(false); //Если получит промис то выключит эдит мод , в редюсере Promise.reject который вернет промис с ошибкой не дает выключить при ошибке
    });

   
   
 
}




return(
  <div>
  <div className = {s.descriptionBlock}>
  <img src={profile.photos.large || image} className={s.mainPhoto}></img>
  <div>{isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}</div>
    {editMode 
    ? <ProfileDataForm  isOwner={isOwner} onSubmit={onSubmit} initialValues={profile} profile={profile}  />
     : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={()=>{setEditMode(true)}}/>}
    
    
    <StatusWhithHooks status={status} updateStatus={updateStatus}/>
  </div>
  </div>
)
  }
  











  const Contact=({contactTitle,contactValue})=>{
    return <div className={s.contact}><b>{contactTitle}</b>:{contactValue}</div>
  }




const ProfileData=({profile,isOwner,goToEditMode})=>{
  return(
  <div>       
    {isOwner && <div><button onClick={goToEditMode}>editMode</button></div>}      
       <div >ИМЯ: {profile.fullName}</div>
    
       <div>Ищу работу: {profile.lookingForAJob ? "ДА" : "НЕТ"} </div>
         
      <div>
      {profile.lookingForAJob && 
      <div><b>my skills</b>:{profile.lookingForAJobDescription}</div> 
      }
      </div>
<div>
  <b>AboutMe</b>: {profile.aboutMe}
</div>

    {/* Реакт не может отобразить объекты для этого надо компоненту  Object.keys пробигается по объекту*/}
<div>
  <b>Контакты</b>{Object.keys(profile.contacts).map(key=>{
  return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>})}     
</div>

   
  </div>
  )
}








  export default ProfileInfo;