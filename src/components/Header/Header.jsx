import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import { submit } from 'redux-form';




const Header = (props) => {

return(

    <header className={s.header}>
     
    <img src='https://placeit-assets.s3-accelerate.amazonaws.com/landing-pages/landing-page-redo-make-a-gaming-logo/Deadnauts-Esports-Logo-Maker.png'/>

      <div className={s.loginBLock}>
      {props.isAuth ?<div>{props.login}      
      <button onClick={props.logOutThunkCreater}>LogOUT</button > </div> :  <NavLink to="Login/">LOGIN</NavLink>}
     

      </div>
      
      </header>
)

}
export default Header;