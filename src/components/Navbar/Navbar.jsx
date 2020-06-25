import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";



const NavBar = (props)=>{

return (
<nav className={s.nav}>
<div className={s.item}>
  <NavLink to="/Profile" activeClassName={s.active}>Profile </NavLink>
  </div>
<div className={s.item}><NavLink to="/Dialogs"  activeClassName={s.active}>Messages</NavLink></div>

<div className={s.item}>
  <NavLink to="/Music"  activeClassName={s.active}>Music </NavLink>
  </div>

  <div className={s.item}>
  <NavLink to="/News"  activeClassName={s.active}>News </NavLink>
  </div>

  <div className={s.item}>
  <NavLink to="/Settings"  activeClassName={s.active}>Settings </NavLink>
  </div>

  <div className={s.item}>
  <NavLink to="/Users" activeClassName={s.active}>USERS</NavLink>
  </div>

  <div className={s.item}>
  <div><NavLink to="/Friends"  activeClassName={s.active}>Friends </NavLink></div>
  <div className={s.avatarImg}><span ><img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" /></span>
  <span ><img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" /></span>
  <span ><img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" /></span>
    </div>
    <div><span>ИГорь</span></div>
  </div>
</nav>

)
}
export default NavBar;