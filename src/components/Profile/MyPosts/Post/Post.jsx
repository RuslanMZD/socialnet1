import React from 'react';
import s from './Post.module.css';
import { tsPropertySignature } from '@babel/types';




const Post = (props) => {


return (
  
  
         
         
          <div className={s.item}>
         <img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" />
         {props.message}
         <div>
         <span>{props.like}</span>
         </div>
          </div>
                   

)



}


export default Post;