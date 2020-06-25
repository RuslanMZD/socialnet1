import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from './MyPosts/MyPostsContainer';





const Profile = (props) => {

//let postData = props.postData;

return (

    <div>
   <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile}  status={props.status} updateStatus={props.updateStatus} saveProfile={props.saveProfile}/>
   {/* <MyPostsContainer postData={props.state.postData } dispatch={props.dispatch}  newPostText={props.state.newPostText}  /> */}
   <MyPostsContainer />
   {/* <MyPostsContainer store={props.store}/> */}
  </div>


)



}


export default Profile;