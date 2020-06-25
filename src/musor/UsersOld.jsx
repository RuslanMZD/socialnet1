import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';

let image ='https://html5box.com/html5lightbox/images/skynight.jpg';

let Users_Old = (props) => {
 let getUsers=()=>{
    if(props.users.length===0){
            
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(respons=>{

        props.setUsers(respons.data.items);
       
    });
}}

  
   
   
   
   
    return(
        <div>
        <button onClick={getUsers}>Get Users</button>
        <div>
            {props.users.map((data)=>
            <div key={data.id}>
            <span>
                <div>
                    <img src={data.photos.small != null ? data.photos.small : image    } className={s.userPhoto}/>
                </div>

                <div>
           
             
            {data.followed  ? <button onClick={()=>{props.unfollow(data.id)}}>UnFollow</button>
             : <button  onClick={()=>{props.follow(data.id)}}>FolloW</button>
           
             
             }
                
                
                
                
               
                </div>
            </span>
            <span>
                <span>

            <div>{data.name}</div>
             <div>{data.status} </div>

                </span>
                <span>
                <div>{"data.location.city"}</div>  
                <div>{"data.location.country"}</div>
                  

                </span>

            </span>


            </div> )}
        </div>
        </div>

    )

}


// export default Users;