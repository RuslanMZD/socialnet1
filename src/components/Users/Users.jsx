import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import { tsConstructorType } from '@babel/types';
import {NavLink} from "react-router-dom";
import { usersAPI } from '../../api/api';
import Paginator from './Paginator';



let image ='https://html5box.com/html5lightbox/images/skynight.jpg';

let Users =(props)=>{

    // let pagesCount= Math.ceil(props.totalUsersCount/ props.pageSize);
   
    // let pages = [];
 
    // for(let i=1;i<=pagesCount;i++){
    //      pages.push(i);};
        
    let portionSize =10;
         
return(

    <div>

        <Paginator onPageChanged={props.onPageChanged} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} portionSize={10}/>

     {/* {pages.map(p=> <span className={this.props.currentPage===p ? s.selectedPage : s.noSelectedPage  }>{p}</span>)}    */}



    {/* {pages.map(p=> <span onClick={(e)=>{props.onPageChanged(p)}} className={props.currentPage===p && s.selectedPage  }> {p}</span>)}   */}

        
        <div>
            {props.users.map((u)=>
            <div key={u.id}>
            <span>
                <div>
              <NavLink to={`/Profile/${u.id}` }><img src={u.photos.small != null ? u.photos.small : image } className={s.userPhoto}/></NavLink>      
                </div>

                <div>
           
             
            {u.followed 




                // ?  <button onClick={()=>{ props.unFollow(u.id)}}>UnFollow</button>
                // : <button  onClick={()=>{ props.follow(u.id)}}>Follow</button>
                
                ?  <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={()=>{ 
                        props.unFollowSuccess(u.id);
                    // props.setToggleFollowingProgress(true,u.id);
                    //     usersAPI.unfollow(u.id)

                    //                                                  //     axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true, 
                    //                                                  // headers:{"API-KEY" : "03743d57-5d42-4009-b627-b66c154de361"}
                    //                                                       // } )
                    //                     .then(respons=>{

                    //                         if(respons.data.resultCode===0){
                    //                             props.unFollow(u.id)

                    //                         }
                    //                         props.setToggleFollowingProgress(false, u.id);

                    //                         });
                    
                  }}>UnFollow</button>


                : <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={()=>{ 
                    props.followSuccess(u.id);
                    // props.setToggleFollowingProgress(true, u.id);

                    // usersAPI.follow(u.id)

                    // // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true,
                    // // headers:{"API-KEY" : "03743d57-5d42-4009-b627-b66c154de361"}} )
                    
                    
                    // .then(respons=>{

                    //     if(respons.data.resultCode===0){
                    //         props.follow(u.id)

                    //     }
                    //     props.setToggleFollowingProgress(false, u.id);
                    //     });
                    
                    
                 }}>Follow</button>









            
            // ? <button onClick={()=>{
                
            //     axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${data.id}`,{   withCredentials: true, headers:{"API-KEY" : "0bfd8b8c-2ddb-4d67-a837-cc0b9f1d3cb1"}} ).then(response=>{

            //         if(response.data.resultCode === 0){
            //             props.unFollow(data.id);
            //         }});

           
            
            // }}>UnFollow</button>
             
            //   : <button  onClick={()=>{
            //     axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${data.id}`,{   withCredentials: true, headers:{"API-KEY" : "0bfd8b8c-2ddb-4d67-a837-cc0b9f1d3cb1"}} ).then(response=>{

            //     if(response.data.resultCode === 0){
            //         props.follow(data.id);
            //     }});
                
                
                
            //     }}>FolloW</button>
           
             
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
        </div>



        </div>










)}

export default Users;