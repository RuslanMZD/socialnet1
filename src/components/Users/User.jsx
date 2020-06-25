import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import { tsConstructorType } from '@babel/types';
import {NavLink} from "react-router-dom";
import { usersAPI } from '../../api/api';
import Paginator from './Paginator';



let image ='https://html5box.com/html5lightbox/images/skynight.jpg';

let User =({user, followingInProgress,followSuccess,unFollowSuccess})=>{

    let u = user;
  
return(

    <div>

 
     
            <span>
                <div>
              <NavLink to={`/Profile/${u.id}` }><img src={u.photos.small != null ? u.photos.small : image } className={s.userPhoto}/></NavLink>      
                </div>

                <div>
           
             
            {u.followed 




                
                ?  <button disabled={followingInProgress.some(id=>id===u.id)} onClick={()=>{ 
                        unFollowSuccess(u.id);
   
                    
                  }}>UnFollow</button>


                : <button disabled={followingInProgress.some(id=>id===u.id)} onClick={()=>{ 
                    followSuccess(u.id);
                 
                    
                    
                 }}>Follow</button>









       
             
             }
                
                
                
                
               
                </div>
            </span>
            <span>
                <span>

            <div>{u.name}</div>
            <div>{u.id}</div>
             <div>{u.status} </div>

                </span>
                <span>
                <div>{"data.location.city"}</div>  
                <div>{"data.location.country"}</div>
                  

                </span>

            </span>


            </div> )}
   










export default User;