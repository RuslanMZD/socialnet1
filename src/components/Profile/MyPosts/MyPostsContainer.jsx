import React from 'react';
import {addPostActionCreator,updateNewPostTextActionCreator} from '../../../redux/profile-reduser';
import MyPosts from "./MyPosts";
import StoreContext from '../../../StoreContext';
import {connect} from 'react-redux';



// const MyPostsContainer = (props) => {
  
// // let state = props.store.getState();

// return (
//   <StoreContext.Consumer>
//     {
    
//     (store)=>{
//       let state = store.getState();
//       let addPost = ()=>{

// store.dispatch(addPostActionCreator());

// }

// let onPostChange = (text)=>{

// let action = updateNewPostTextActionCreator(text);
// store.dispatch(action);

// }


               


//      return <MyPosts updateNewPostText={onPostChange} addNewPost={addPost} postData={state.profile.postData} newPostText={state.profile.newPostText}/>
//     }}


//       </StoreContext.Consumer>

// )}

let mapStateToProps = (state) =>{ // connect позволяет взять state или dispatch , отслежтвает измененения в state и сравнивая их и перересовывает
   
   
  return{
    postData: state.profile.postData,
    newPostText:state.profile.newPostText
  }
}

let mapDispatchToProps=(dispatch)=>{
  return{

    updateNewPostText: (text)=>{
      let action = updateNewPostTextActionCreator(text);
       dispatch(action);

    },

    addNewPost:(addNewPostFormRedux)=>{

      dispatch(addPostActionCreator(addNewPostFormRedux));

    }

      }

  }



const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts); // передается sate и dispatch
    

export default MyPostsContainer;