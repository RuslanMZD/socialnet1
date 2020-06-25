import React from 'react';
import {createField,Input, Textarea} from '../../common/FormsControl';
import s from './ProfileInfo.module.css';
import {reduxForm , Field} from 'redux-form';
import style from '../../common/FormsControl.module.css'



// Значения fullName и остальные берутся из initialValues={profile} все что в филдах , остальное надо из profile={profile}
const ProfileDataForm=({profile,goToEditMode,isOwner,handleSubmit,error})=>{
    return(
        <form onSubmit={handleSubmit}>   

        <div><button>SAVE</button></div>

        {error && <div className={style.formSummaryError}> 
        {error}
</div>}


           <div>ИМЯ:{createField("Full name","fullName",[],Input)}</div>
        
           <div>Ищу работу:{createField(" ","lookingForAJob",[],Input,{type:"checkbox"})}</div>
             
          <div>
         
          <div>
              <b>my skills</b>:
          {createField("my skills","lookingForAJobDescription",[],Textarea)}
          </div> 
          

          <div>
        <b>AboutMe</b>: 
        {createField("aboutMe","aboutMe",[],Textarea)}
        </div>





          </div>
   
    
        {/* Реакт не может отобразить объекты для этого надо компоненту  Object.keys пробигается по объекту*/}
    <div>
      <b>Контакты</b>{Object.keys(profile.contacts).map(key=>{
      return <div key={key} className={s.contact}>
          <b>{key}:</b>  {createField(key,"contacts."+key,[],Textarea)}
      </div>})}     
    </div>
    
       
      </form>
    )
    
    } 
    
    const ProfileDataFormReduxForm=reduxForm({form:'edit-profile'})(ProfileDataForm);

    export default ProfileDataFormReduxForm;