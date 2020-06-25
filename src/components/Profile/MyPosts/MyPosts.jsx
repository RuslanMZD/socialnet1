import React,{PureComponent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
//import { updateNewPostText } from '../../../redux/state';
import {addPostActionCreator,updateNewPostTextActionCreator} from '../../../redux/profile-reduser';
import {reduxForm , Field} from 'redux-form';
import {required,maxLengthCreator} from '../../utils/validators';
import {Textarea} from '../../common/FormsControl';
import { render } from 'react-dom';

const maxLength10 = maxLengthCreator(10);

const FormMyPost = (props) =>{

  return(


   <form onSubmit={props.handleSubmit}>
<div><Field  component={Textarea} name={"newPostBody"}  validate={[required,maxLength10]} placeholder={"PLEASE POS DOWN "} /></div>
    <div><button >ADD POST</button></div>




</form>


  )}


  const FormReduxMyPost = reduxForm({form:"MyPost"})(FormMyPost);
// let postData = props.postData;

//______________________________________________________________________________
//class MyPosts extends React.Component   //PureComponent отслеживает изменения вместо shouldComponentUpdate




//shouldComponentUpdate(nextProps, nextState){   //Если данные не изменились перерисовываьб данные не нужно
//return nextProps != this.props || nextState != this.state; // Сравнивает пришедшие пропсы с текущими
//}
//______________________________________________________________________________

const MyPosts =React.memo(props=>{ // Как PureComponent отслеживает изменения вместо shouldComponentUpdate только функциональная



let postsElements = props.postData.map((data)=><Post key={data.id} message={data.messages} like={data.likesCount}/> ); 

let newPostElement = React.createRef();

// let addPost = ()=>{

// let text = newPostElement.current.value;
// props.addPost(text);
// props.updateNewPostText(' ');
// }

let addPost = ()=>{

props.addNewPost();
// props.dispatch({type:'ADD-POST'});
//props.dispatch(addPostActionCreator());

};



let addNewPostFormRedux = (body)=>{
 
  props.addNewPost(body.newPostBody);
}


let onPostChange = ()=>{
let text = newPostElement.current.value;
props.updateNewPostText(text);
// let action = {type:'UPDATE-NEW-POST-TEXT',newText:text};
// props.dispatch(updateNewPostTextActionCreator(text));

};

return (
  
    <div className ={s.postsBlock}>
      <h3>My posts</h3>
    
    


      <FormReduxMyPost onSubmit={addNewPostFormRedux}/>
    {/* <div><textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} /></div>
    <div><button onClick={addPost}>Жмяк</button></div> */}

    <div className={s.posts}>
    
        
      {postsElements}

       {/* <Post message={postData[0].messages} like ={postData[0].likesCount} />  
       <Post message={postData[1].messages} like ={postData[1].likesCount} />   */}
       
      
         
   
    </div>
 

 
    </div>

)


      
});


export default MyPosts;