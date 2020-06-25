import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";






const DialogItem =(props)=>{
    return(

<div className={s.dialog + ' ' + s.active}>
<span ><img src={props.img} className={s.avatarImg}/></span>
<span><NavLink to={"/Dialogs/" + props.id} activeClassName={s.atcive}>{props.name}</NavLink></span>

</div>
    )
}





export default DialogItem;